var routes = require("express").Router();

var imagesController = require("../controllers/orderDetails");
let createOrderDetail = imagesController.createOrderDetail;
let getOrderDetailsByOrderID = imagesController.getOrderDetailsByOrderID;
let modifyOrderDetail = imagesController.modifyOrderDetail;

routes.post("/create", createOrderDetail);
routes.get("/get/:orderID", getOrderDetailsByOrderID);
routes.put("/modify/:orderDetailID", modifyOrderDetail);

module.exports = routes;