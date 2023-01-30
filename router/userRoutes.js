const express = require("express")
const router = express.Router()
const {home,createUser,editUser,deleteUser,getUsers} = require("../controllers/userController")

router.get("/",home)
router.post("/createUser",createUser)
router.put("/editUser/:id",editUser)
router.get("/getUsers",getUsers)
router.delete("/deleteUser/:id",deleteUser)


module.exports = router