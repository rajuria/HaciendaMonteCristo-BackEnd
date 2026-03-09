var routes = require("express").Router();
var InvoiceController = require("../controllers/invoice");
let getAllInvoices = InvoiceController.getAllInvoices;

routes.get("/get", getAllInvoices);

module.exports = routes;