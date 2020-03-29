const app = require('../bootstrap/app');

/*

Here, the program is bootsraping from the app.js file located in bootstrap 
so if we need to import any of other npm packages we need: 
    - First after installing it via npm install {package_name} we need to add the import line in bootstrap before the express initiation line.

*/

app.listen(process.env.APP_PORT, function(){
    console.log("Listening on Port " + process.env.APP_PORT);
});