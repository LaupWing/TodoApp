const express = require('express');
const router = new express.Router();
const User = require('../models/User.js');
const tokenAge = require('../helpers/tokenAge.js');
const auth = require('../middleware/auth.js');

router  
    .get('/',auth, (req,res)=>{
        res.render('template',{
            page: 'home'
        });
    })
    .post('/login',(req,res)=>{
        res.render('template',{
            page: 'login'
        });
    })
    .get('/login',(req,res)=>{
        res.render('template',{
            page: 'login',
            errors:[]
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
                maxAge: tokenAge(false)
            });
            res.redirect('/');
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
    }) 
    .get('/logout', auth, async (req,res)=>{
        try{
            console.log('logout')
            req.session.user.tokens = req.session.user.tokens.filter(token=>token.token !== req.token)
            await req.session.user.save()
            res
                .clearCookie('dating_token')
                .redirect('/login')
        }catch(e){
            res.status(500).send(e)
        }
    });

module.exports = router;