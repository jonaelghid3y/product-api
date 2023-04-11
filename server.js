require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnect')
const productsRouter = require('./routes/product')


connectDB()


app.use(express.json())
app.use(cors())

app.use('/products', productsRouter)



mongoose.connection.once('open', ()=> {
    console.log('connected to mongoDB')
    app.listen(port, ()=> {console.log(`example app listening on port ${port}`)})
})