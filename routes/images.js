var routes = require("express").Router();

var imagesController = require("../controllers/images");
let getByProductID = imagesController.getByProductID;
let AddImage = imagesController.AddImage;

routes.get("/get/:productID", getByProductID);
routes.post("/add", AddImage);

module.exports = routes;