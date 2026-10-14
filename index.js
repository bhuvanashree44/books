const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
// const BookRoutes=require('./app/routes/bookRoutes')
const BookRoutes=require('./app/routes/bookRoutes')
const app=express()
app.use(express.json())

app.use('/api',BookRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Mongodb DataBase Connectd sucessfully'))
.catch(err=>console.error(err))


app.listen(process.env.PORT,()=>
{
    console.log(`server is running in the Port Number ${process.env.PORT}`)
})

