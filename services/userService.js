const users = require("../data/users");


// GET USERS
exports.getAllUsers = () => {

  return users;
};


// CREATE USER
exports.createUser = (userData) => {

  const newUser = {
    id: users.length + 1,
    ...userData
  };

  users.push(newUser);

  return newUser;
};


// UPDATE USER
exports.updateUser = (id, updatedData) => {

  const user = users.find(u => u.id === id);

  if (!user) {
    return null;
  }

  if (updatedData.name) {
    user.name = updatedData.name;
  }

  if (updatedData.email) {
    user.email = updatedData.email;
  }

  return user;
};


// DELETE USER
exports.deleteUser = (id) => {

  const index = users.findIndex(
    u => u.id === id
  );

  if (index === -1) {
    return null;
  }

  return users.splice(index, 1);
};