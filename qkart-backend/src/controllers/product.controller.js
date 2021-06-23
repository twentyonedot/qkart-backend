const httpStatus = require("http-status");
const { productService } = require("../services");
const { ApiError } = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const getProductById = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
  }
  res.send(product);
});

const getProducts = catchAsync(async (req, res) => {
  const products = await productService.getProducts();
  res.send(products);
});

module.exports = {
  getProductById,
  getProducts,
};
