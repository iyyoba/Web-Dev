const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    // patchUser

} = require("../controllers/userController")

// GET /users
router.get("/", getAllUsers);

// POST /cars
router.post("/", createUser);

// GET /cars/:userId
router.get("/:userId", getUserById);

// PUT /cars/:userId
router.put("/:userId", updateUser);

// DELETE /cars/:userId
router.delete("/:userId", deleteUser);

// Update car using PATCH 
// router.patch('/:userId', patchUser)

module.exports = router;
