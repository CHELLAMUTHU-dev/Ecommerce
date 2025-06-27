require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute')
const productsRoute = require('./routes/productsRoute')
const specificProductRoute = require('./routes/specificProductRoute')

const port = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())

app.use('/user', userRoute)
app.use('/amazon', productsRoute)
app.use('/amazon',specificProductRoute)

try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")
    app.listen(port,()=> {
        console.log("Server is running on port 3001")
    })
}
catch(err){
    console.log(err)
}


