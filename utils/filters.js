class DataFilters{
    offset=0
    pageSize=10
    order=[]
}
getFilters=( page, pageSize, sortBy, sortOrder)=>{
    var data=new DataFilters()
    data.offset = (parseInt(page)- 1) * parseInt(pageSize);
    if (sortBy && sortOrder) {
        data.order.push([sortBy, sortOrder]); // E.g., [['name', 'ASC']]
    }else{
        data.order.push(['Id', 'DESC']); // E.g., [['name', 'ASC']]
    }
    data.pageSize=parseInt(pageSize)
    return data;
}
module.exports={getFilters}
