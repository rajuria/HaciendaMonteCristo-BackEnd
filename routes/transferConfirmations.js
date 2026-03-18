var routes = require("express").Router();
var TransferConfirmationsController = require("../controllers/transferConfirmations");
let getAllTransferConfirmations = TransferConfirmationsController.getAllTransferConfirmations;

routes.get("/get", getAllTransferConfirmations);

module.exports = routes;