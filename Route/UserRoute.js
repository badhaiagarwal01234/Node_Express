const express = require('express')
const mongoose = require('mongoose')
const userController = require("../Controller/UserController")

const router = express.Router()

router.post('/save', userController.createUser)
router.get("/getAll",userController.getAllUser)
router.get("/getOne/:id" , userController.getOneUser)
router.delete("/deleteOne/:id", userController.deletebyid)
router.put("/update/:id", userController.updateUser)
router.patch("/updateAll", userController.createandupdateUser)

module.exports = router