const express = require('express')
const router = express.Router()
const Product =require('../data/model/product')
const productRepo=require('../repository/productRepository')
const productService=require('../service/productService')
const {getFilters} =require('../utils/filters')
router.get('/', async (req, res) => {  
    const { page, pageSize, sortBy, sortOrder} = req.query;
    var filter=getFilters(page, pageSize, sortBy, sortOrder)
    const result = await productRepo.getAll(filter,{})
    res.json(result)
});

//api/product/getbyid?id=1
router.get('/getbyid',async(req,res)=>{
    const id = req.query.id;
    const result=await productRepo.getById(id);
    res.json(result)
})

router.get('/getbyname',async(req,res)=>{
    const name = req.query.name;
    console.log(name)
    const result=await productRepo.FindByName(name);
    res.json(result)
})

router.post('/', async (req, res) => {
    var result;
    const product = req.body;
    try{
        if(product.Id>0){
            result=await productService.update(product.Id,product);
        }
        else {
            result=await productService.create(product);
        }
        res.json(result);
    }catch(error){}    
});

router.delete('/delete',async(req,res)=>{
    const id=req.query.id
    var result=await productService.delete(id)
    res.json(result)
})
module.exports=router;
