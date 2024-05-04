const express = require('express')
const app = express()

const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    res.send('Hello World Home')
  })

app.listen(port,()=>{
    console.log("Server Started listening at port", port)
})