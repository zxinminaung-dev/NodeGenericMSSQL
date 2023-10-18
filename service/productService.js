const req = require('express/lib/request');
const Product =require('../data/model/product');

const Service=require('./service')

class ProductService extends Service{
    constructor() {
        super();
        this.model = Product;
    }
    
}
module.exports=new ProductService();