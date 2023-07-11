const express = require('express')
const app = express()
const path =require('path')

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const port = 5000;

app.listen(port , ()=>{
    console.log(`server is listening on port ${port}`)
})