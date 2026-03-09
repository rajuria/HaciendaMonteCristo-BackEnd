var routes = require("express").Router();

var ClientController = require("../controllers/clients");
let getAllClients = ClientController.getAllClients;
let getByRTN = ClientController.getByRTN;
let createClient = ClientController.createClient;
let deleteClientbyRTN = ClientController.deleteClientbyRTN;
let updateClientbyRTN = ClientController.updateClientbyRTN;

routes.get("/get",getAllClients);
routes.get("/get/:RTN",getByRTN);
routes.post("/create",createClient);
routes.delete("/delete/:RTN",deleteClientbyRTN);
routes.put("/update/:RTN",updateClientbyRTN);

module.exports = routes;