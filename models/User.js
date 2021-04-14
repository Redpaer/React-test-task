const { Schema, model, Types} = require('mongoose');

const schema = new Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true},
    city: {type: String, require: true},
    phone: {type: Number, require: true, unique: true}
});

module.exports= model('User', schema);