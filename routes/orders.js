var routes = require("express").Router();

var ordersController = require("../controllers/orders");
let createOrder = ordersController.createOrder;
let modifyOrderStatus = ordersController.modifyOrderStatus;
let asignarOrden = ordersController.asignarOrden;
let solicitarCancelacion = ordersController.solicitarCancelacion;
let aprobarCancelacion = ordersController.aprobarCancelacion;

routes.post("/create", createOrder);
routes.put("/modifyStatus/:orderID", modifyOrderStatus);
routes.put("/asignarOrden/:orderID/:vendedor", asignarOrden);
routes.put("/solicitarCancelacion/:orderID", solicitarCancelacion);
routes.put("/aprobarCancelacion/:orderID", aprobarCancelacion);

module.exports = routes;