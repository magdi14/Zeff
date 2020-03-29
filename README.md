<img src="https://bit.ly/3aregLh" width="200" height="200">


A simple MVC structure with node.js, it makes developing REST API's very easy for those guys who have experience in Laravel/Lumen projects structure. also it prevents the developer from writing a unreadable, unstructured, difficult-to-maintain source code `spaghetti-code` which's a problem i faced when i first started coding with node.js.

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
### A typical top-level directory layout for zeff
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
    ├── .env_example                        # file that has all the configrations keys of your app like db_name, db_user, your main port     │                                         all of these variables and keys.(you must create a `.env` file from this one)
    ├── package.json                        # file of all your app info and dependencies.
    │
    └── ...
    
    
    
    
    
    
    
    
    
  
