const express = require('express')
const app = express()
const db = require('./mongoConfig')

app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./index')
app.use('/', indexRouter)

app.listen(3000, () => console.log("running"))