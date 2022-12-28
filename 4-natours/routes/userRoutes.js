const express = require("express");
const fs = require("fs");

const router = express.Router();

//Route Handlers
const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route has not been defined yet!'
    })
}

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route has not been defined yet!'
    })
}

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route has not been defined yet!'
    })
}

const changeUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route has not been defined yet!'
    })
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route has not been defined yet!'
    })
}


router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .patch(changeUser)
    .delete(deleteUser);

module.exports = router;