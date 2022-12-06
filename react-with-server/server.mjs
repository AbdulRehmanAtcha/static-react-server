import express from 'express';
import path from 'path';
console.log("hello World");
// const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/abc', (req, res) => {
  res.send('Hello World!')
})

const __dirname =path.resolve();

app.use('/', express.static(path.join(__dirname, './my-web/build')))
app.use('*  ', express.static(path.join(__dirname, './my-web/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})