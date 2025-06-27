const express = require('express');
const authMiddleware = require('../middleware/auth')
const router = express.Router();
const {GetAllProduct} = require('../controllers/product.controller')

router.get('/products' ,authMiddleware , GetAllProduct ) // Get all products route






module.exports = router