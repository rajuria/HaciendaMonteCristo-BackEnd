var routes = require("express").Router();
var InvoiceDetailsController = require("../controllers/invoiceDetails");
let createInvoiceDetail = InvoiceDetailsController.createInvoiceDetail;
let deleteInvoiceDetail = InvoiceDetailsController.deleteInvoiceDetail;
let getByInvoiceID = InvoiceDetailsController.getByInvoiceID;

routes.delete("/delete/:invoiceDetailID", deleteInvoiceDetail);
routes.post("/create", createInvoiceDetail);
routes.get("/get/:invoiceID", getByInvoiceID);

module.exports = routes;