const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value){
            if(value === '' || !value){
                throw new Error('Todo cant be empty')
            }
        }
    },
    done:{
        type: Boolean,
        required: true,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    } 
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;