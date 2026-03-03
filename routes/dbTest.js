var routes = require("express").Router();

var dbTestController = require("../controllers/dbTest");
let getAllUsers = dbTestController.getAllUsers;

routes.get("/",getAllUsers);

module.exports = routes;