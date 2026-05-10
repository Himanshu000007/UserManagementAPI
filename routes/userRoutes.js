const express = require('express');

const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// GET USERS
router.get('/', getUsers);

// CREATE USER
router.post('/', createUser);

// UPDATE USER
router.patch('/:id', updateUser);

// DELETE USER
router.delete('/:id', deleteUser);

module.exports = router;