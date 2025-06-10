const SpecificProductModal = require('../models/SpecificProducts')


exports.GetProductById = async (req,res) => {
    const {id} = req.params
    try {
        const product_details = await SpecificProductModal.findById({_id:id})
        res.status(201).json({product_details})
    } catch (error) {
        res.status(501).json({message : error.message})
    }
} 
