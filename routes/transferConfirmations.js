var routes = require("express").Router();
var TransferConfirmationsController = require("../controllers/transferConfirmations");
let getAllTransferConfirmations = TransferConfirmationsController.getAllTransferConfirmations;
let createTransferConfirmation = TransferConfirmationsController.createTransferConfirmation;

routes.post("/create", createTransferConfirmation);
routes.get("/get", getAllTransferConfirmations);

module.exports = routes;