const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
module.exports = db;
/*
const mongoose = require('mongoose');

Here add your database connection then export the variable you made

e.g:
    const db = mongoose.connect('mongoose://{yr_db_Host}:{db_port}/{yr_db_name}', { useNewUrlParser: true, useUnifiedTopology: true });
OR
    const db = mongoose.connect('mongodb://{username}:{password}@{yr_db_Host}:{db_port}/{yr_db_name}, { useNewUrlParser: true, useUnifiedTopology: true });
and this if you have specific username and password for your db, so you will need to add them in .env file and access them here via process.env.DB_USERNAME and process.env.DB_PASSWORD,

db connection created successfully!

PS: 
    - Here the {db_port} variable you specified when you're creating your mongodb database.
    - Then the next variable is the db name. 
    - Of course all of these vars must included in .env file to have a convenient access to it through the app.
Then tou need to export it  
e.g:   
    module.exports = db;

*/