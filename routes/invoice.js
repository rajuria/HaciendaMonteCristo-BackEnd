var routes = require("express").Router();
var InvoiceController = require("../controllers/invoice");
let getAllInvoices = InvoiceController.getAllInvoices;
let getInvoiceByID = InvoiceController.getInvoiceByID;
let createInvoice = InvoiceController.createInvoice;

routes.post("/create", createInvoice);
routes.get("/get", getAllInvoices);
routes.get("/get/:invoiceID", getInvoiceByID);

module.exports = routes;