const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //사이 공백 없애 주는 역할
        unique: 1 //같은 이메일 사용 불가
    },
    role:{
        type: Number,
        default: 0 //임의로 role 지정하지 않을 시 기본값 0
    },
    image: String,
    token: {
        type: String //유효성 
    },
    tokenExp: {
        type: Number //token 유효 기간
    },

})

const User = mongoose.model('User', userSchema)

module.exports = {User}