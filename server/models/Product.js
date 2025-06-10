const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title:String,
    brand:String,
    price:Number,
    image_url: String,
    rating : Number,
    category:String
})

const ProductModal = mongoose.model('Products', ProductSchema);
module.exports = ProductModal;


