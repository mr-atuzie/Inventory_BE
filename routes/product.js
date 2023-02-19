const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getAllProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
