const express=require('express')
const http=require('http')
const socketIO=require('socket.io')
const bodyParser=require('body-parser')
const productController=require('./controllers/productController')
const sequelize=require('./data/database/dbcontext')
const app=express();
app.use(bodyParser.json());
const server=http.createServer(app);
const io=socketIO(server);

// Map to store the relationship between user ID and socket ID
const userSockets = new Map();
io.on('connection',(socket)=>{
    console.log('a client connect')

    // Listen for authentication when a user logs in
    socket.on('authenticate',(userId)=>{
        userSockets.set(userId,socket.userId)
    })
    // Listen for messages from the client
    socket.on('message',(data)=>{
        const { userId, message } = data;
        const socketId = userSockets.get(userId);
        if (socketId) {
            // Send the message to the specified user based on their socket ID
            io.to(socketId).emit('message', message);
        }
    });
    // Listen for disconnection
    socket.on('disconnect', () => {
        console.log('A client disconnected.');
        // Remove the socket from the mapping when a client disconnects
        for (const [userId, socketId] of userSockets.entries()) {
        if (socketId === socket.id) {
            userSockets.delete(userId);
            break;
        }
        }
    });
})
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch(err => {
    console.error('Database synchronization failed:', err);
  });
app.use('/api/product',productController)
const PORT=3000;
server.listen(PORT,()=>{
    console.log("server is listening on http://localhost"+PORT)
})

