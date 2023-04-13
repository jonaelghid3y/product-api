const Product = require('../Models/Product')

module.exports.fetchAllProducts = async (req, res) =>{
    try {
        res.send(await Product.find());
    
    }
    catch(error){
        res.json({message: error})
    }
}

module.exports.fetchSpecifikProducts = async(req , res) => {
    try{
        res.send(await Product.findById(req.params.productId))

    }
    catch(error){

        res.json({message: error})

    }
}

module.exports.createProduct = async(req, res) =>{
    console.log(req.body)
    try{
        const product = new Product({

            title: req.body.title,
            description: req.body.description,
            releaseyear: req.body.releaseyear,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category,
            image: req.body.image,

        })
        res.json(await product.save());
    }
    catch(error){

       res.json({message: error})

    }
}

module.exports.deleteProduct = async(req , res) => {
    try{
        res.send(await Product.deleteOne({_id: req.params.productId}))

    }
    catch(error){

        res.json({message: error})

    }
}
module.exports.uppdateProduct = async(req , res) => {
    
    console.log(req.body)
    try{
        const product = await Product.updateOne(
            {_id: req.params.productId},
            {$set:{

            title: req.body.title,
            description: req.body.description,
            releaseyear: req.body.releaseyear,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category,
            image: req.body.image,

        }})
        res.json(await product.save());
    }
    catch(error){

       res.json({message: error})

    }
}