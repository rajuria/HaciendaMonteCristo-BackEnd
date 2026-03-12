var routes = require("express").Router();
var SignedInvoicesController = require("../controllers/signedInvoices");
let getAllSignedInvoices = SignedInvoicesController.getAllSignedInvoices;

routes.get("/get", getAllSignedInvoices);

module.exports = routes;