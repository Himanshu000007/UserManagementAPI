const express = require("express");

const router = express.Router();


// ======================================================
// CONTROLLERS
// ======================================================

const {

    // BASIC CRUD
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,

    // SEARCH APIs
    searchUsersByName,
    searchUsersByRegex,

    // MONGODB OPERATORS
    getAdultUsers,
    getTeenUsers,
    getUsersAge21AndAbove,
    getUsersAge21OrLess,
    getUsersByNames,
    getUsersByOrCondition,
    getUsersByAndCondition,

    // PROJECTION APIs
    getNameAndAgeUsers,
    getUsersWithoutTimestamps,
    getUsersWithoutAge,
    getOnlyEmails,

    // MONGOOSE QUERY APIs
    getBasicUsers,
    getUsersSortedAsc,
    getUsersSortedDesc,
    getLatestUsers,
    getLimitedUsers,
    getSkippedUsers,
    getPaginatedUsers,
    getAdvancedUsers

} = require("../controllers/userController");


// ======================================================
// VALIDATION MIDDLEWARE
// ======================================================

const validate = require(
    "../middlewares/validate"
);


// ======================================================
// ZOD SCHEMAS
// ======================================================

const {
    createUserSchema
} = require(
    "../validations/userValidation"
);

const asyncHandler = require("../middlewares/asyncHandler");


// ======================================================
// ROUTES
// ======================================================


// ======================================================
// BASIC CRUD ROUTES
// ======================================================

// GET ALL USERS
router.get("/", asyncHandler(getUsers));


// GET USER BY EMAIL
router.get(
    "/email/:email",
    getUserByEmail
);


// GET USER BY ID
// KEEP THIS LAST AMONG DYNAMIC ROUTES
router.get(
    "/:id",
    getUserById
);


// CREATE USER
router.post(
    "/",
    validate(createUserSchema),
    createUser
);


// UPDATE USER
router.patch(
    "/:id",
    updateUser
);


// DELETE USER
router.delete(
    "/:id",
    deleteUser
);


// ======================================================
// SEARCH ROUTES
// ======================================================

// SEARCH USERS BY NAME
router.get(
    "/search/:name",
    searchUsersByName
);


// REGEX SEARCH
router.get(
    "/searchregex/:keyword",
    searchUsersByRegex
);


// ======================================================
// MONGODB OPERATORS
// ======================================================

// AGE > 18
router.get(
    "/adults/all",
    getAdultUsers
);


// AGE < 20
router.get(
    "/teens/all",
    getTeenUsers
);


// AGE >= 21
router.get(
    "/age21plus/all",
    getUsersAge21AndAbove
);


// AGE <= 21
router.get(
    "/age21less/all",
    getUsersAge21OrLess
);


// $IN OPERATOR
router.get(
    "/names/all",
    getUsersByNames
);


// OR OPERATOR
router.get(
    "/or/all",
    getUsersByOrCondition
);


// AND OPERATOR
router.get(
    "/and/all",
    getUsersByAndCondition
);


// ======================================================
// PROJECTION APIs (.select())
// ======================================================

// GET NAME + AGE
router.get(
    "/name-age/all",
    getNameAndAgeUsers
);


// EXCLUDE TIMESTAMPS
router.get(
    "/without-timestamps/all",
    getUsersWithoutTimestamps
);


// EXCLUDE AGE
router.get(
    "/without-age/all",
    getUsersWithoutAge
);


// GET ONLY EMAILS
router.get(
    "/emails/all",
    getOnlyEmails
);


// BASIC USERS
router.get(
    "/basic/all",
    getBasicUsers
);


// ======================================================
// SORTING APIs (.sort())
// ======================================================

// AGE ASCENDING
router.get(
    "/sorted/asc",
    getUsersSortedAsc
);


// AGE DESCENDING
router.get(
    "/sorted/desc",
    getUsersSortedDesc
);


// LATEST USERS FIRST
router.get(
    "/latest/all",
    getLatestUsers
);


// ======================================================
// LIMIT APIs (.limit())
// ======================================================

// LIMIT USERS
router.get(
    "/limited/all",
    getLimitedUsers
);


// ======================================================
// SKIP APIs (.skip())
// ======================================================

// SKIP USERS
router.get(
    "/skipped/all",
    getSkippedUsers
);


// ======================================================
// PAGINATION APIs
// ======================================================

// PAGINATION
router.get(
    "/paginated/all",
    getPaginatedUsers
);


// ======================================================
// ADVANCED QUERY CHAINING
// ======================================================

// ADVANCED QUERY
router.get(
    "/advanced/all",
    getAdvancedUsers
);


module.exports = router;