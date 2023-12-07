const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");
const { blogRouter } = require("./routes/blogsRoutes");
const { connection } = require("./controller/db");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", blogRouter);


app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("Server is running and db is connected");
    } catch (err) {
        console.log(err)
    }
    
})



