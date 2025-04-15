
const express= require("express")
const { connection } = require("mongoose")

const app= express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to the database successfully")
        console.log(`server is running on port ${process.env.port}`)
    } catch(err){
        console.log("error while connecting to the DB")
        console.log(err)
    }
})