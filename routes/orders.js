var routes = require("express").Router();

var ordersController = require("../controllers/orders");
let createOrder = ordersController.createOrder;
let modifyOrderStatus = ordersController.modifyOrderStatus;
let getOrdersByClient = ordersController.getOrdersByClient;
let asignarOrden = ordersController.asignarOrden;
let solicitarCancelacion = ordersController.solicitarCancelacion;
let aprobarCancelacion = ordersController.aprobarCancelacion;
let getOrdersByDateRange = ordersController.getOrdersByDateRange;
let getOrdersByVendor = ordersController.getOrdersByVendor;
let getStats = ordersController.getStats;

routes.post("/create", createOrder);
routes.put("/modifyStatus/:orderID", modifyOrderStatus);
routes.get("/getByClient/:RTN", getOrdersByClient);
routes.get("/getByDate/:startDate/:endDate", getOrdersByDateRange);
routes.get("/getByVendor/:vendedor", getOrdersByVendor);
routes.put("/asignarOrden/:orderID/:vendedor", asignarOrden);
routes.put("/solicitarCancelacion/:orderID", solicitarCancelacion);
routes.put("/aprobarCancelacion/:orderID", aprobarCancelacion);
routes.get("/getStats/:startDate/:endDate", getStats);

module.exports = routes;