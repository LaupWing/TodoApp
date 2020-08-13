const express = require('express');
const router = new express.Router();
const User = require('../models/User.js');

router  
    .post('/login',(req,res)=>{
        res.render('template',{
            page: 'login'
        });
    })
    .get('/login',(req,res)=>{
        res.render('template',{
            page: 'login'
        });
    })
    .post('/signup',async (req,res)=>{
        const {
            email,
            password,
            password_confirm
        } = req.body;
        const errors = [];

        if(password !== password_confirm){
            errors.push('Passwords doesnt match');
        }
        const user = new User({
            email,
            password
        });

        try{
            await user.save();
            const token = await user.generateAuthToken();
            res.cookie('todos_token', token, {
                httpOnly: true,
                maxAge: (24*2) * 60 * 60 *1000
            });
        }catch(e){
            errors.push(e.message);
            res.render('template', {
                page: 'signup',
                errors
            });
        }
    })
    .get('/signup',(req,res)=>{
        res.render('template',{
            page: 'signup',
            errors:[]
        });
    });

module.exports = router;