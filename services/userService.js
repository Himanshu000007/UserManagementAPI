const User = require("../models/User");


// GET USERS
exports.getAllUsers = async () => {
  const users = await User.find();
  return users;
};


// CREATE USER
exports.createUser = async (
userData) => {

  const newUser =
    await User.create(userData);

  return newUser;
};


// UPDATE USER
exports.updateUser = async (
  id,
  updatedData
) => {

  return await User.findByIdAndUpdate(
    id,
    updatedData,
    {
      new: true
    }
  );
};


// DELETE USER
exports.deleteUser = async (id) => {

  return await User.findByIdAndDelete(id);

};

exports.getUserById = async (
  id
) => {

  return await User.findById(id);

};

exports.getUserByEmail = async (
  email
) => {

  return await User.findOne({
    email: email
  });

};


exports.searchUsersByName = async (
  name
) => {

  return await User.find({
    name: name
  });

};