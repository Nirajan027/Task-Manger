const express = require("express");
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config();
//middleware 
app.use(express.json());
//routes 
app.get('/hello',(req,res)=>{
    res.send('this is home')
})

app.use('/api/tasks', tasks)


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
