const express = require('express');
const router = new express.Router();
const User = require('../models/User.js');
const Todo = require('../models/Todo.js');
const tokenAge = require('../helpers/tokenAge.js');
const auth = require('../middleware/auth.js');

router  
    .get('/',auth, async (req,res)=>{
        await req.session.user.populate('todos').execPopulate();
        res.render('template',{
            page: 'home',
            todos:  req.session.user.todos
        });
    })
    .post('/add-todo', async (req,res)=>{
        try{
            const todo = new Todo({
                owner: req.session.user._id,
                todo: req.body.todo
            });
            await todo.save();

            res.redirect('/');
        }catch(e){
            console.log(e.message);
        }
    })
    .post('/edit-todo', async (req, res)=>{
        try{

        }catch(e){
            
        }
    })
    .get('/login',(req,res)=>{
        res.render('template',{
            page: 'login',
            errors:[]
        });
    })
    .post('/login', async (req,res)=>{
        try{
            const user = await User.findByCredentials(
                req.body.email,
                req.body.password
            );
            const token = await user.generateAuthToken();
            res.cookie('todos_token', token, {
                httpOnly: true,
                maxAge: tokenAge(false)
            });
            res.redirect('/');
        }
        catch(e){
            res.render('template',{
                page: 'login',
                errors:['Invalid password/email']
            });
        }
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