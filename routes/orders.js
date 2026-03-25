var routes = require("express").Router();

var ordersController = require("../controllers/orders");
let createOrder = ordersController.createOrder;
let modifyOrderStatus = ordersController.modifyOrderStatus;
let getOrdersByClient = ordersController.getOrdersByClient;
let asignarOrden = ordersController.asignarOrden;
let solicitarCancelacion = ordersController.solicitarCancelacion;

routes.post("/create", createOrder);
routes.put("/modifyStatus/:orderID", modifyOrderStatus);
routes.get("/getByClient/:RTN", getOrdersByClient);
routes.put("/asignarOrden/:orderID/:vendedor", asignarOrden);
routes.put("/solicitarCancelacion/:orderID", solicitarCancelacion);

module.exports = routes;