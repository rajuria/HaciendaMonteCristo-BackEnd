var routes = require("express").Router();

var ordersController = require("../controllers/orders");
let createOrder = ordersController.createOrder;
let modifyOrderStatus = ordersController.modifyOrderStatus;
let asignarOrden = ordersController.asignarOrden;

routes.post("/create", createOrder);
routes.put("/modifyStatus/:orderID", modifyOrderStatus);
routes.put("/asignarOrden/:orderID/:vendedor", asignarOrden);

module.exports = routes;