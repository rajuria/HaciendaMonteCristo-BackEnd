var routes = require("express").Router();

var imagesController = require("../controllers/orderDetails");
let createOrderDetail = imagesController.createOrderDetail;
let getOrderDetailsByOrderID = imagesController.getOrderDetailsByOrderID;

routes.post("/create", createOrderDetail);
routes.get("/get/:orderID", getOrderDetailsByOrderID);

module.exports = routes;