const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getByProductID,
  createProduct,
  disableProductByProductID,
  updateProductByProductID,
  getAllProductsInStock
} = require('../controllers/products.controller');

router.get('/', getAllProducts);
router.get('/stock', getAllProductsInStock);
router.get('/:productID', getByProductID);
router.post('/', createProduct);
router.put('/:productID', updateProductByProductID);
router.delete('/:productID', disableProductByProductID);

module.exports = router;