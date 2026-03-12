var routes = require("express").Router();
var SignedInvoicesController = require("../controllers/signedInvoices");

let getAllSignedInvoices = SignedInvoicesController.getAllSignedInvoices;
let createSignedInvoice = SignedInvoicesController.createSignedInvoice;

routes.post("/create", createSignedInvoice);
routes.get("/get", getAllSignedInvoices);

module.exports = routes;