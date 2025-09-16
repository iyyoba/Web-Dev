const User = require('../models/userModel.js')

const getAllUsers = (req,res) => {
     res.json(User.getAll());
}

const createUser = (req,res) => {
    const {name, email, password, phone_number, gender, date_of_birth, membership_status} = req.body;
    const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);
    if(newUser) {
        res.status(201).json(newUser);
    } else {
        res.json(204).send();
    }
}

const getUserById = (req,res) => {
    const userId = req.params.userId;
    const user = User.findById(userId);
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({message: "User Not Found"});
    }
}


const updateUser = (req, res) => {
    const userId = req.params.userId;
    const updatedData = req.body;
    const updatedUser = User.updateOneById(userId, updatedData);
    if(updatedData) {
        res.json(updatedUser);
    } else{
        res.status(404).json({message: "User Not Found"});
    }
}

const deleteUser = (req, res) => {
    const userId = req.params.UserId;
    const isDeleted = User.deleteOneById(userId);
    if(isDeleted) {
        res.Status(204).send();
    } else{
        res.status(404).json({message: "User Not Found"});
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}