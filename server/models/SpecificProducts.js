const mongoose = require('mongoose');


const SpecificProductSchema = new mongoose.Schema({
    image_url: String,
    title:String,
    style:String,
    price:Number,
    description:String,
    brand:String,
    total_reviews:Number,
    rating: Number,
    availability:String,
    similar_products: [
        {
            id: Number,
            image_url:String,
             title:String,
            style:String,
            price:Number,
            description:String,
            brand:String,
            total_reviews:Number,
            rating: Number,
            availability:String,
        },
        {
            id: Number,
            image_url:String,
            title:String,
            style:String,
            price:Number,
            description:String,
            brand:String,
            total_reviews:Number,
            rating: Number,
            availability:String,
        },
        {
            id: Number,
            image_url:String,
            title:String,
            style:String,
            price:Number,
            description:String,
            brand:String,
            total_reviews:Number,
            rating: Number,
            availability:String,
        }
    ]
})

const SpecificProductModal = mongoose.model('Specific_products', SpecificProductSchema);
module.exports = SpecificProductModal;