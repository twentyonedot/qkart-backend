const { userService } = require("../services");
const { ApiError } = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const getUser = catchAsync(async (req, res) => {
  let data;
  if (req.query.q === "address") {
    data = await userService.getUserAddressById(req.params.userId);
  } else {
    data = await userService.getUserById(req.params.userId);
  }

  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (data.email !== req.user.email) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      "User not authorized to access this resource"
    );
  }

  if (req.query.q === "address") {
    res.send({
      address: data.address,
    });
  } else {
    res.send(data);
  }
});

const setAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  if (user.email != req.user.email) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      "User not authorized to access this resource"
    );
  }

  const address = await userService.setAddress(user, req.body.address);

  res.send({ address: address });
});

module.exports = {
  getUser,
  setAddress,
};
