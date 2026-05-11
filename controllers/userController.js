const userService = require("../services/userService");

const sendResponse = require("../utils/sendResponse");


// GET USERS
exports.getUsers = (req, res) => {

  const users = userService.getAllUsers();

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};


// CREATE USER
exports.createUser = (req, res) => {

  const newUser = userService.createUser(
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
exports.updateUser = (req, res) => {

  const id = parseInt(req.params.id);

  const updatedUser =
    userService.updateUser(
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
exports.deleteUser = (req, res) => {

  const id = parseInt(req.params.id);

  const deletedUser =
    userService.deleteUser(id);

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