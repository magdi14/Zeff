var app = require('../bootstrap/app');

/*

Here the program is bootsraping from the app.js file located in bootstrap 
so if we need to import any of other npm packages we need: 
    - First after installing it via npm install {PackageName} we need to add the import line in bootstrap before the express initiation line.

*/

app.listen(3008, function(){
    console.log("Listening on Port 3008");
});