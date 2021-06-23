const { User } = require("../models");

const getUserById = (id) => {
  return User.findById(id);
};
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new Error("Already registered");
  }
  const user = await User.create(userBody);
  return user;
};
const getUserAddressById = async (id) => {
  return User.findOne({ _id: id }, { email: 1, address: 1 });
};
const setAddress = async (user, newAddress) => {
  user.address = newAddress;
  await user.save();
  return user.address;
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  getUserAddressById,
  setAddress,
};
