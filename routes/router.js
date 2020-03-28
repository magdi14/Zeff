const express = require('express');
const router = express.Router();


/*
const userCtrl = require('../app/controller/UsersController');

Then here add your endpoints for the user controller like

//Users
router.route('users').get(userCtrl.index)  here index is a fn to get all users from db implemented in users controller.
router.route('users/:id').get(userCtrl.show)  here show is a fn to get a user from db implemented in users controller with specific id represented in the url as shown.

PS: you can accsess the id provided in url via request by params attribute.
*/


/* 
After adding all your routes you must to export the router variable
*/
module.exports = router;