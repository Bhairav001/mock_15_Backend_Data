const express = require("express")
const { connection } = require("./db")




const cors = require("cors")
const { userRouter } = require("./routes/UserRoutes")
const { authenticate } = require("./middlewares/authenticate.middleware")

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Kanban Board Application")
})







app.use("/users",userRouter)
app.use(authenticate)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    
    console.log(`Server runing at port ${process.env.port}`)
})