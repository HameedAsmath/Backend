const mongoose = require("mongoose")
const {MONGO_URL} = process.env
const connectToDb = ()=>{
    mongoose.connect(MONGO_URL)
    .then((conn)=>{
        console.log(`DB connected to ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err)
        process.exit(1)
    })
}

module.exports = connectToDb