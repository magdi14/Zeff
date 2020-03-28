const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Defining a schema to create a model in mongoose.

const user = new Schema({
    // here add the collection entries for your models like name, email, etc ... 
});

//PS: By default, Mongoose adds an _id property to your schemas.

//then export that variable as follows

module.exports = mongoose.model('User', user); //here we are passing tha schema of the model

//Check docs for mongoose here: https://mongoosejs.com/docs/index.html