//biblioteca para modelagem de dados 
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    objetivos: String,
    avatar_url: String,
    renda: String,

});

module.exports = mongoose.model('User', UserSchema);