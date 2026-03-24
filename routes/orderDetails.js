var routes = require("express").Router();

var imagesController = require("../controllers/orderDetails");
let createOrderDetail = imagesController.createOrderDetail;

routes.post("/create", createOrderDetail);

module.exports = routes;