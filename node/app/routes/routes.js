const express   = require('express');
const router    = new express.Router();

router  
    .get('/',(req,res)=>{
        res.render('app')
    });

module.exports = router;