const express = require('express')
require('express-async-errors')
require('dotenv').config()
const cors = require('cors')

const app = express()

const path =require('path')

const mainRouter = require('./routes/auth')
const errorHandlerMiddleware = require('./middlwares/error-handler')
const connectDB = require('./db/connect')


app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.use(express.json())
app.use(errorHandlerMiddleware)
app.use(cors())

app.use('/api/v1', mainRouter)


const port = process.env.PORT || 5000;

const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);

        app.listen(port , ()=>
            console.log(`server is listening on port ${port}`)
        )
    } catch (error) {
        console.log(error)
    }
}

start()