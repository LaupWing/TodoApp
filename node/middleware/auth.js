const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const auth = async(req,res,next)=>{
    try{
        const cookie = req.get('cookie');
        const token = cookie
            .split(';')
            .find(c=>c.includes('todos_token='))
            .trim()
            .split('todos_token=')
            .filter(x=>x!=='')[0]
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, 'tokens.token':token});
        console.log(user);
        if(!user){
            throw new Error('User not found');
        }
        req.session.user = user;
        delete req.session.user.password;
        delete req.session.user.tokens;
        req.token = token;
        next();
    }catch(e){
        console.log(e.message)
        res.redirect('/login');
    }
}

module.exports = auth;