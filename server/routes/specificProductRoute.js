const express = require('express');
const authMiddleware = require('../middleware/auth')
const router = express.Router();
const {GetProductById} = require('../controllers/specificProductController')

router.get('/product_details/:id' , authMiddleware , GetProductById)

module.exports = router