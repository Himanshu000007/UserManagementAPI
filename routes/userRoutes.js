const express = require("express");

const router = express.Router();


// CONTROLLERS
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  searchUsersByName
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

router.get("/search/:name",searchUsersByName);


router.get("/:id", getUserById);

router.get("/email/:email",getUserByEmail);

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