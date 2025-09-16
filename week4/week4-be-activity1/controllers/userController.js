const User = require("../models/userModel");

// GET /users
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
};

// POST /users

const createUser = async (req, res) => {
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser);
};

// GET /users/:userId

const getUserById = async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (User) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "user not found" });
    }
};

// PUT /users/:userId

const updateUser = async (req, res) => {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
        { _id: userId },
        { ...req.body },
        { new: true }
    );
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

// DELETE /users/:userId
const deleteUser = async (req, res) => {
    const { userId } = req.params;

    const deleteUser = await User.findByIdAndDelete({ _id: userId });
    if (deletedUser) {
        res.status(200).json({ message: "User deleted Successfully" });

    } else {
        res.status(404).json({ message: "User not found" });
    };
};



module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,

};