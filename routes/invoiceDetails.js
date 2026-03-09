var routes = require("express").Router();
var InvoiceDetailsController = require("../controllers/invoiceDetails");
let createInvoiceDetail = InvoiceDetailsController.createInvoiceDetail;

routes.post("/create", createInvoiceDetail);

module.exports = routes;