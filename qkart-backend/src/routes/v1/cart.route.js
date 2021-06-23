const express = require("express");
const { cartController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const { validate } = require("../../middlewares/validate");
const { cartValidation } = require("../../validations");

const router = express.Router();

router.get("/", auth(), cartController.getCart);
router.post(
  "/",
  auth(),
  validate(cartValidation.addProductToCart),
  cartController.addProductToCart
);
router.put(
  "/",
  auth(),
  validate(cartValidation.addProductToCart),
  cartController.updateProductInCart
);
router.put("/checkout", auth(), cartController.checkout);
module.exports = router;
