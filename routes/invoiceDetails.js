var routes = require("express").Router();
var InvoiceDetailsController = require("../controllers/invoiceDetails");
let createInvoiceDetail = InvoiceDetailsController.createInvoiceDetail;
let deleteInvoiceDetail = InvoiceDetailsController.deleteInvoiceDetail;

routes.delete("/delete/:invoiceDetailID", deleteInvoiceDetail);
routes.post("/create", createInvoiceDetail);

module.exports = routes;