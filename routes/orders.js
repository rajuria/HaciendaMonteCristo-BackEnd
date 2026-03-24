var routes = require("express").Router();

var ordersController = require("../controllers/orders");
let createOrder = ordersController.createOrder;

routes.post("/create", createOrder);
routes.put("/modifyStatus/:orderID", ordersController.modifyOrderStatus);

module.exports = routes;