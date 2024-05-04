import express from 'express';
const app = express()

const port =  process.env.PORT ||  3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    res.json({
      name: "Harsh Kumar",
      age: 24
    })
  })

app.listen(port,()=>{
    console.log(`Server Started listening at port http://localhost:${port}`)
})