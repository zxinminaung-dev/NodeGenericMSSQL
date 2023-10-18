const Product =require('../data/model/product')

const Repository =require('./repository');

class productRepository extends Repository{
    constructor() {
        super();
        this.model = Product;
    }
    async FindByName(name){
        return this.model.findOne({where:{Name:name}});
    }
}
module.exports=new productRepository();