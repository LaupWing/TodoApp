const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenAge = require('../helpers/tokenAge.js');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        trim: true,
        minlength: 6,
        required: true,
        validate(value){
            const hasNumber = /\d/;
            if(!hasNumber.test(value)){
                throw new Error('Password has to contain at least one number bleep bleep')
            }
        }
    },
    tokens:[{
        token:{
            _id:false,
            type: String,
            required: true
        }
    }]
});

userSchema.virtual('todos',{
    ref: 'Todo',
    localField: '_id',
    foreignField: 'owner'
});

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = await jwt.sign(
        {
            _id:user._id.toString()
        }, process.env.JWT_SECRET, 
        {
            expiresIn: tokenAge(true)
        });
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Given info is invalid');
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error('Given info is invalid');
    }
    return user;
}

userSchema.pre('save', async function(){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;