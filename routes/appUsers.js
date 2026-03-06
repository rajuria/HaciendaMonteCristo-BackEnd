var routes = require("express").Router();

var appUsersController = require("../controllers/appUsers");
let getAllUsers = appUsersController.getAllUsers;
let getByUsername = appUsersController.getByUsername;
let createUser = appUsersController.createUser;
let deleteUserByUsername = appUsersController.deleteUserByUsername;
let updateUserByUsername = appUsersController.updateUserByUsername;

routes.get("/get",getAllUsers);
routes.get("/get/:username",getByUsername);
routes.post("/create",createUser);
routes.delete("/delete/:username",deleteUserByUsername);
routes.put("/update/:username",updateUserByUsername);

module.exports = routes;