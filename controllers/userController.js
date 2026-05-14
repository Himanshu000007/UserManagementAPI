const userService = require("../services/userService");

const sendResponse = require("../utils/sendResponse");


// GET USERS
exports.getUsers = async (
  req,
  res
) => {

  const users =
    await userService.getAllUsers();

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};


// CREATE USER
exports.createUser = async (
  req,
  res
) => {

  const newUser =
    await userService.createUser(
      req.validatedData
    );

  sendResponse(
    res,
    201,
    true,
    "User created successfully",
    newUser
  );
};


// UPDATE USER
exports.updateUser = async (
  req,
  res
) => {

  const id = req.params.id;

  const updatedUser =
    await userService.updateUser(
      id,
      req.body
    );

  if (!updatedUser) {

    return sendResponse(
      res,
      404,
      false,
      "User not found"
    );
  }

  sendResponse(
    res,
    200,
    true,
    "User updated successfully",
    updatedUser
  );
};


// DELETE USER
exports.deleteUser = async (
  req,
  res
) => {

  const id = req.params.id;

  const deletedUser =
    await userService.deleteUser(id);

  if (!deletedUser) {

    return sendResponse(
      res,
      404,
      false,
      "User not found"
    );
  }

  sendResponse(
    res,
    200,
    true,
    "User deleted successfully"
  );
};

exports.getUserById = async (
  req,
  res
) => {

  const id = req.params.id;

  const user =
    await userService.getUserById(id);

  if (!user) {

    return sendResponse(
      res,
      404,
      false,
      "User not found"
    );
  }

  sendResponse(
    res,
    200,
    true,
    "User fetched successfully",
    user
  );
};

exports.getUserByEmail = async (
  req,
  res
) => {

  const email = req.params.email;

  const user =
    await userService.getUserByEmail(
      email
    );

  if (!user) {

    return sendResponse(
      res,
      404,
      false,
      "User not found"
    );
  }

  sendResponse(
    res,
    200,
    true,
    "User fetched successfully",
    user
  );
};

exports.searchUsersByName = async (
  req,
  res
) => {

  const name = req.params.name;

  const users =
    await userService.searchUsersByName(
      name
    );

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};