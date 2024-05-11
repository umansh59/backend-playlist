require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('welcome to twitter ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
