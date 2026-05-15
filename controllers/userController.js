const userService = require("../services/userService");

const sendResponse = require("../utils/sendResponse");


// GET USERS
exports.getUsers = async (req, res) => {

    const users = await userService.getAllUsers();

    res.status(200).json({
        success: true,
        data: users
    });
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

// AGE > 18
exports.getAdultUsers = async (
  req,
  res
) => {

  const users =
    await userService.getAdultUsers();

  sendResponse(
    res,
    200,
    true,
    "Adult users fetched successfully",
    users
  );
};


// AGE < 20
exports.getTeenUsers = async (
  req,
  res
) => {

  const users =
    await userService.getTeenUsers();

  sendResponse(
    res,
    200,
    true,
    "Teen users fetched successfully",
    users
  );
};


// AGE >= 21
exports.getUsersAge21AndAbove =
  async (req, res) => {

  const users =
    await userService
      .getUsersAge21AndAbove();

  sendResponse(
    res,
    200,
    true,
    "Users age 21 and above fetched successfully",
    users
  );
};


// AGE <= 21
exports.getUsersAge21OrLess =
  async (req, res) => {

  const users =
    await userService
      .getUsersAge21OrLess();

  sendResponse(
    res,
    200,
    true,
    "Users age 21 or less fetched successfully",
    users
  );
};


// $IN OPERATOR
exports.getUsersByNames = async (
  req,
  res
) => {

  const users =
    await userService.getUsersByNames();

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};


// REGEX SEARCH
exports.searchUsersByRegex =
  async (req, res) => {

  const keyword =
    req.params.keyword;

  const users =
    await userService
      .searchUsersByRegex(keyword);

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};


// OR OPERATOR
exports.getUsersByOrCondition =
  async (req, res) => {

  const users =
    await userService
      .getUsersByOrCondition();

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};


// AND OPERATOR
exports.getUsersByAndCondition =
  async (req, res) => {

  const users =
    await userService
      .getUsersByAndCondition();

  sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users
  );
};



// GET NAME + AGE
exports.getNameAndAgeUsers = async (req, res) => {

    const users = await userService.getNameAndAgeUsers();

    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};


// EXCLUDE TIMESTAMPS
exports.getUsersWithoutTimestamps = async (req, res) => {

    const users = await userService.getUsersWithoutTimestamps();

    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};


// EXCLUDE AGE
exports.getUsersWithoutAge = async (req, res) => {

    const users = await userService.getUsersWithoutAge();

    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};


// GET ONLY EMAILS
exports.getOnlyEmails = async (req, res) => {

    const users = await userService.getOnlyEmails();

    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};





// ======================================================
// PROJECTION
// ======================================================

exports.getBasicUsers = async (req, res) => {

    const users = await userService.getBasicUsers();

    res.status(200).json({
        success: true,
        data: users
    });
};


// ======================================================
// SORTING
// ======================================================

exports.getUsersSortedAsc = async (req, res) => {

    const users = await userService.getUsersSortedAsc();

    res.status(200).json({
        success: true,
        data: users
    });
};


exports.getUsersSortedDesc = async (req, res) => {

    const users = await userService.getUsersSortedDesc();

    res.status(200).json({
        success: true,
        data: users
    });
};


exports.getLatestUsers = async (req, res) => {

    const users = await userService.getLatestUsers();

    res.status(200).json({
        success: true,
        data: users
    });
};


// ======================================================
// LIMIT
// ======================================================

exports.getLimitedUsers = async (req, res) => {

    const users = await userService.getLimitedUsers();

    res.status(200).json({
        success: true,
        data: users
    });
};


// ======================================================
// SKIP
// ======================================================

exports.getSkippedUsers = async (req, res) => {

    const users = await userService.getSkippedUsers();

    res.status(200).json({
        success: true,
        data: users
    });
};


// ======================================================
// PAGINATION
// ======================================================

exports.getPaginatedUsers = async (req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const users = await userService.getPaginatedUsers(page, limit);

    res.status(200).json({
        success: true,
        page,
        limit,
        data: users
    });
};


// ======================================================
// ADVANCED QUERY CHAINING
// ======================================================

exports.getAdvancedUsers = async (req, res) => {

    const users = await userService.getAdvancedUsers();

    res.status(200).json({
        success: true,
        data: users
    });
};