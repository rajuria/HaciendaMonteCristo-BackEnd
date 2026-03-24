var routes = require("express").Router();

var imagesController = require("../controllers/images");
let getByProductID = imagesController.getByProductID;
let AddImage = imagesController.AddImage;
let deleteImage = imagesController.deleteImage;

routes.get("/get/:productID", getByProductID);
routes.post("/add", AddImage);
routes.delete("/delete/:imageID", deleteImage);

module.exports = routes;