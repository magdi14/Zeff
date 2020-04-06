<img src="https://bit.ly/3aregLh" width="200" height="200">


A simple MVC structure with node.js, it makes building RESTful API's very handy for those guys who have experience in Laravel/Lumen projects structure. also it prevents the developer from writing an unreadable, unstructured, difficult-to-maintain source code `spaghetti-code` which's a problem i faced when i first started coding with node.js. and it's a good template for a quick start of personal projects.

## Getting Started
You can start using zeff structure via multiple ways:
* You can clone or download the repo from [here](https://github.com/magdi14/Zeff.git).
``
OR
``
* You can install it from the install command provided in node package manager npm.
```
npm install zeff.js
```
OR
```
yarn add zeff.js
```
Of course you'll need to either:
* run ```npm install``` and it will install all the dependencies needed for project initiation like [express](https://expressjs.com/) `pkg`
[mongoose](https://mongoosejs.com/) `pkg` [body-parser](https://www.npmjs.com/package/body-parser) `pkg` [dotenv](https://www.npmjs.com/package/dotenv) `pkg`.
* OR to run ```npm init``` and install all of these packages manually via ```npm install [package_name]```
### Prerequisites
* First of all you'll need [node.js](https://nodejs.org/en/download/) installed and running on your machine.
* Also [MongoDB](https://www.mongodb.com/download-center/community) with its default installation.
See this [tutorial](https://www.youtube.com/watch?v=FwMwO8pXfq0) for setting up mongodb on windows 10.

Project Structure Conventions
============================
> Folders structure options and naming conventions for `zeff`
### A typical top-level directory layout
    .
    ├── ...
    ├── app                                 # app folder (the `main` folder).
    │   ├── controllers                     # has all the controllers file needed to each module
    │   │     ├── UsersController.js        # an example of controller file.
    │   │     ├── ...                       # ..
    │   │     └── ...                       # ..
    │   │
    │   └── helpers                         # herlper folder with all the helper function needed.     
    │       └── helpers.js                  # has tha implementation of helper functions. 
    ├── bootstrap                           # the bootstrap folder that have the app.js file.
    │   └── app.js                          # app file that bootsraping all the needed packages and seting up environment in the app.
    │
    ├── config                              # configration files (`auth`, `permission`, `jwt`, etc ..).
    │   └── e.g: auth.js                    # auth files.
    │
    ├── database                            # the folder that hs all the needed actions dealing with the db.
    │    ├── models                         # the folder has the schemas definations for app modules.
    │    │     ├── User.js                  # example of user defined schema.
    │    │     └── ...
    │    └── db.js                          # here's the most important file that initiate the connection to your db.
    │    
    ├── public                              # has the main file of the app and the uploads folder that have media of your app.
    │   ├── uploads                         # the folder with all media that app contains.
    │   └── server.js                       # the entry point of your application.
    │
    ├── resourses                           # this will have your views of your app.
    │   └── views                           # a folder that has all the views needed for the app.
    │          ├── view#1
    │          └── ...
    │
    ├── routes                              # folder that has all routes in your app.
    │   └── router.js                       # here you can define the routes and endpoints for the modules you've created.
    │
    ├── .env_example                        # file that has all the configrations keys of your app like db_name, db_user, your main port ..
    │
    ├── package.json                        # file of all your app info and dependencies.
    │
    └── ...
    
Documentation
=============
## 1- Models
Here in `mongo` we need to define schemas for our models, and the package we use ``mongoose`` has a very good `docs` provided [here](https://mongoosejs.com/docs/guide.html).
* First we define the schema with all the properties we want e.g: name, email, etc ...
```node
const mongoose = require("mongoose")
const Schema = mongoose.Schema;  // make instance from mongoose schema

const user = new Schema({
  name: String,
  email: { type: String, unique: true }, //specifying email as unique
  password: String,
})
```
* The the most important part is to export the model with the defined schema as follows:
```node
module.exports = mongoose.model("User", user)
```
Here the first argument model takes is the name of the model you want, and the second is the schema you've defined.
### - NOTES
   * When you insert a new document to the collection the `_id` generated automaticlly by mongoose.
   * mongoose defines `_id` by default with type `ObjectId` for the collection, but you have the ability to overwrite that but it's not         recommended.
   * Also if you want to create a `ref` to another collection which called in relational dbs Relations the `_id` should be of type               `ObjectID`.
   * Visit mongoose [documentations](https://mongoosejs.com/docs/guides.html) for more of definnig schemas, documents, quiries ..
## 2- Controllers
* So Controllers is the part which's responsible for do all the logic between the view and the model, it has the CRUD operations and any other logic you want to add, then returns a response to the user even if it's a view `HTML-Files` or a JSON with the data needed which's we concern here.
* First Thing you want to ``require`` your model you've been created in the models folder to deal with the collection -table- in db.
> Notice that the collection won't appear in the db you created till you insert a document.
* Then You will need to export the methods as follows:
```node
module.exports = {
     index: (req, res){
            // Get all docs from your collection
     },
     show: (req, res){
            // TODO
     },
     store: (req, res){
            // TODO
     },
     ...   
}
```
> Future Work: Enhance the controller structure with ES6 classes.
## 3- Routing
You will define most of the routes for your application in the `routes/router.js` file, which is loaded by the `app.js` file located in bootstrap. here we're using express.router class to create modular, mountable route handlers.
```node
const express = require("express")
const router = express.Router()
```
Then require the controller you want to add its routes here as follows: 
```node
const usersCtrl = require("../app/controllers/UsersController")
```
Now we're able to defines URI's for this controller doing the logic we have defined.
```node
//template
router.route("{URI}").{request_type}({controller.method})

//Here's an example of the users endpoints.
router.route("/users").get(usersCtrl.index)
router.route("/permissions").post(permissionsCtrl.store)
...

module.exports = router
```
> it's not mandatory you can use any structure of defining routes for the application but make sure that you export it and use while app's bootstraping in `app.js` 

## 4- Starting the server
* As we see the start point of the application is in public folder so to start serving you need to make sure the start script in `package.json` is as ``node ./public/server.js``
* if you'll use `nodemon` which is i recommend also you'll need to make sure of the start script also.
* By defining app from bootstrap file we're making an instance of our application and it'll be ready to listen on the port you defined in `.env` file
```node
const app = require('../bootstrap/app')

app.listen(process.env.APP_PORT, function(){
    console.log("Listening on Port " + process.env.APP_PORT)
});
```
> NOTE: if you want to import any of the npm packages you'll need to import it in bootstrap file `app`.

## Adds On
* There's some additional files and features come with the installation i added for mapping between admins, roles and permissions feel free to ignore them and add your favourite structure or style.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on code of conduct.
## License
see the [MIT](LICENSE) file for details
  
