const express   = require('express');
const router    = new express.Router();

router  
    .get('/',(req,res)=>{
        res.render('template',{
            page: 'auth'
        })
    });

module.exports = router;