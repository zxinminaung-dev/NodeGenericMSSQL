
const Response=require('../utils/response')
class Service{
    //Create Model
    async create(entity) {
        var response=new Response();
        try{
            var data= await this.model.create(entity)
            response.success=true
            response.id=data.id
            response.data=data;
            response.messages.push("Save Success!")
        }catch(error){
            response.success=false;
            response.messages.push(error)
        }
        return response;
    }
    //Update Model
    async update(id, entity) {
        var response=new Response();
        try{
            var data= await this.model.update(entity, { where: { id } })
            response.success=true
            response.id=entity.Id
            response.data=entity;
            response.messages.push("Update Success!")
        }catch(error){
            response.success=false;
            response.messages.push(error)
        }
        return response;
    }
    //Delete Model
    async delete(id) {
        var response=new Response();
        try{
          const result= await this.model.destroy({ where: { id } });
          response.success=true;
          response.messages.push("Delete Success!")
        }catch(error){
            response.success=false;
            response.messages.push(error)
        }
        return response;
    }
}
module.exports=Service;