const express = require("express")
require("dotenv").config()
const router = require("./router/userRoutes")
const app = express()
const connectToDb = require("./config/database")
connectToDb()
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router)

module.exports = app
