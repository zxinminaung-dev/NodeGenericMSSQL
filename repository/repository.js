const dataTableResponse=require('../utils/dataTableResponse')
const Response=require('../utils/response')
var Filters =require('../utils/dataTableFilters')
class Repository{
    //search clause 
    //{name:"John","age:20"}
    async getAll(filters,searchClause) {
        var offset=filters.offset
        var pageSize=filters.pageSize
        var order=filters.order
        const response=new dataTableResponse();
        try{
            var data= await this.model.findAll({
                where:searchClause,
                order,
                offset,
                limit:pageSize
            });
            response.data=data;
            response.success=true;
            response.recordsTotal=data.length;
        }catch(error){
            response.success=false;
            response.messages.push(error);
        }
        return response;
    }    
    async getById(id) {
        const response=new Response();
        try{
            var data= await this.model.findByPk(id);
            if(data){
                response.success=true
                response.id=data.Id
                response.data=data
            }else{
                response.success=false
                response.messages.push("Not Found")
            }
        }catch(error){
            response.success=false
            response.messages.push(error)
        }
       return response;
    }
}
module.exports=Repository;