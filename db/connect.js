const mongoose = require('mongoose')

const connectionString =
"mongodb+srv://nirajan22:re4-T-qE88*StG-@taskmanagerproject.cr5qx.mongodb.net/taskmanagerDB?retryWrites=true&w=majority"

const connectDB = (url) =>{
    return mongoose
    .connect(url)
}

module.exports = connectDB



