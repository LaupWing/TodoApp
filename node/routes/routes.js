const express   = require('express');
const router    = new express.Router();

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
    .post('/signup',(req,res)=>{
        res.redirect('/signup');
    })
    .get('/signup',(req,res)=>{
        res.render('template',{
            page: 'signup'
        });
    });

module.exports = router;