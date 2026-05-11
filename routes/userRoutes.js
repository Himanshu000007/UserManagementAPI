const express = require("express");

const router = express.Router();


// CONTROLLERS
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");


// VALIDATION MIDDLEWARE
const validate = require(
  "../middlewares/validate"
);


// ZOD SCHEMAS
const {
  createUserSchema
} = require(
  "../validations/userValidation"
);


// ROUTES

// GET USERS
router.get("/", getUsers);


// CREATE USER
router.post(
  "/",
  validate(createUserSchema),
  createUser
);


// UPDATE USER
router.patch("/:id", updateUser);


// DELETE USER
router.delete("/:id", deleteUser);


module.exports = router;