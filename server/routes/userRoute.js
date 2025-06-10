require('dotenv').config();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

router.post('/register' , async (req,res) => {
    const {username, email , password} = req.body
    try{
        const hashedPassword = await bcrypt.hashSync(password , 10)
        const user           = new User({
            username,
            email,
            password: hashedPassword
        })
        await user.save();
        res.status(201).json({message : 'User Created Successfully'})
    }
    catch(e){
        res.status(500).json({message : 'error Registering User',error: e.message})
    }
})

router.post('/login', async (req, res) => {
    const {email,password} = req.body
    try{
        const user = await User.findOne({email})
        if(user){
            const isPassword = bcrypt.compareSync(password,user.password)
            console.log(isPassword)
            if(isPassword){
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
                return res.status(201).json({token})
            }else{
                return res.status(400).json('Invalid Password')
            }
        }else{
            return res.status(400).json('Invalid Email ID')
            }
        }catch(e){
            res.status(500).json({message: e.message})   
        }
})

module.exports = router