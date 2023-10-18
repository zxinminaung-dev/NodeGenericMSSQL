# Node JS Express with Generic Repository Design, MSSQL, Sequelize

## install
npm install

## run 
npm start

### Get All (Get Method)
http://localhost:3000/api/product?page=1&pageSize=10&sortBy=Name&sortOrdeDESC
### GET By Id (Get Method)
http://localhost:3000/api/product/getbyid?id=1
### Create/Update (Post Method)
http://localhost:3000/api/product
If New Id must NULL
{
  "Id":null,
  "name":"Solar System",
  "Description":"Made in Burma",
  "Price":"$2000"
}
If update Id must greater than zero
 {
  "Id":1,
  "name":"Solar System",
  "Description":"Made in Burma",
  "Price":"$2000"
  }

 
