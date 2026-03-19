var routes = require("express").Router();
var TransferConfirmationsController = require("../controllers/transferConfirmations");
let getAllTransferConfirmations = TransferConfirmationsController.getAllTransferConfirmations;
let createTransferConfirmation = TransferConfirmationsController.createTransferConfirmation;
let getTransferConfirmationByID = TransferConfirmationsController.getTransferConfirmationByID;

routes.get("/get/:confirmationID", getTransferConfirmationByID);
routes.post("/create", createTransferConfirmation);
routes.get("/get", getAllTransferConfirmations);

module.exports = routes;