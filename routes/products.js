var routes = require("express").Router();

var ProductController = require("../controllers/products");
let getAllProducts = ProductController.getAllProducts;
let getByProductID = ProductController.getByProductID;
let createProduct = ProductController.createProduct;
let deleteProductByProductID = ProductController.deleteProductByProductID;
let updateProductByProductID = ProductController.updateProductByProductID;

routes.get("/get",getAllProducts);
routes.get("/get/:productID",getByProductID);
routes.post("/create",createProduct);
routes.put("/delete/:productID",deleteProductByProductID);
routes.put("/update/:productID",updateProductByProductID);

module.exports = routes;