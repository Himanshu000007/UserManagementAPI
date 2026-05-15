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


// AGE > 18
exports.getAdultUsers = async () => {

  return await User.find({
    age: {
      $gt: 18
    }
  });

};


// AGE < 20
exports.getTeenUsers = async () => {

  return await User.find({
    age: {
      $lt: 20
    }
  });

};


// AGE >= 21
exports.getUsersAge21AndAbove =
  async () => {

  return await User.find({
    age: {
      $gte: 21
    }
  });

};


// AGE <= 21
exports.getUsersAge21OrLess =
  async () => {

  return await User.find({
    age: {
      $lte: 21
    }
  });

};


// $IN OPERATOR
exports.getUsersByNames = async () => {

  return await User.find({
    name: {
      $in: ["Himu", "Rahul"]
    }
  });

};


// REGEX SEARCH
exports.searchUsersByRegex =
  async (keyword) => {

  return await User.find({
    name: {
      $regex: keyword,
      $options: "i"
    }
  });

};


// OR OPERATOR
exports.getUsersByOrCondition =
  async () => {

  return await User.find({
    $or: [
      { age: { $lt: 18 } },
      { name: "Himu" }
    ]
  });

};


// AND OPERATOR
exports.getUsersByAndCondition =
  async () => {

  return await User.find({
    $and: [
      { age: { $gt: 18 } },
      { name: "Himu" }
    ]
  });

};


// GET ONLY NAME + AGE
exports.getNameAndAgeUsers = async () => {

    const users = await User.find()
        .select("name age");

    return users;
};


// EXCLUDE TIMESTAMPS
exports.getUsersWithoutTimestamps = async () => {

    const users = await User.find()
        .select("-createdAt -updatedAt");

    return users;
};


// EXCLUDE AGE
exports.getUsersWithoutAge = async () => {

    const users = await User.find()
        .select("-age");

    return users;
};


// GET ONLY EMAILS
exports.getOnlyEmails = async () => {

    const users = await User.find()
        .select("email");

    return users;
};



// ======================================================
// PROJECTION
// ======================================================

// GET ONLY NAME + EMAIL
exports.getBasicUsers = async () => {

    const users = await User.find()
        .select("name email");

    return users;
};


// ======================================================
// SORTING
// ======================================================

// AGE ASCENDING
exports.getUsersSortedAsc = async () => {

    const users = await User.find()
        .sort({ age: 1 });

    return users;
};


// AGE DESCENDING
exports.getUsersSortedDesc = async () => {

    const users = await User.find()
        .sort({ age: -1 });

    return users;
};


// LATEST USERS FIRST
exports.getLatestUsers = async () => {

    const users = await User.find()
        .sort({ createdAt: -1 });

    return users;
};


// ======================================================
// LIMIT
// ======================================================

// LIMIT USERS
exports.getLimitedUsers = async () => {

    const users = await User.find()
        .limit(3);

    return users;
};


// ======================================================
// SKIP
// ======================================================

// SKIP FIRST 2 USERS
exports.getSkippedUsers = async () => {

    const users = await User.find()
        .skip(2);

    return users;
};


// ======================================================
// PAGINATION
// ======================================================

exports.getPaginatedUsers = async (page, limit) => {

    const skip = (page - 1) * limit;

    const users = await User.find()
        .skip(skip)
        .limit(limit);

    return users;
};


// ======================================================
// ADVANCED QUERY CHAINING
// ======================================================

exports.getAdvancedUsers = async () => {

    const users = await User.find({
        age: { $gte: 18 }
    })
        .select("name email age")
        .sort({ age: -1 })
        .limit(5);

    return users;
};