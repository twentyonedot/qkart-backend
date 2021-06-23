const httpStatus = require("http-status");
const { cartService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getCart = catchAsync(async (req, res) => {
  const cart = await cartService.getCartByUser(req.user);
  res.send(cart);
});
const addProductToCart = catchAsync(async (req, res) => {
  const cart = await cartService.addProduct(
    req.user,
    req.body.productId,
    req.body.quantity
  );
  res.status(httpStatus.CREATED).send(cart);
});
const updateProductInCart = catchAsync(async (req, res) => {
  if (req.body.quantity === 0) {
    await cartService.deleteProductFromCart(req.user, req.body.productId);
    return res.status(httpStatus.NO_CONTENT).send();
  }
  const cart = await cartService.updateProductInCart(
    req.user,
    req.body.productId,
    req.body.quantity
  );

  return res.status(httpStatus.OK).send(cart);
});
const checkout = catchAsync(async (req, res) => {
  await cartService.checkout(req.user);
  return res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getCart,
  addProductToCart,
  updateProductInCart,
  checkout,
};
