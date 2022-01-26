// app.js

// CIS 4339 Full Stack Development Project
// Project Group 16
// Thomas Peters, Noah Hendricks, Muhib Maknojia
// Bread of Life

// api requires and constraints
const routes = require('./routes/index')
const express = require('express')
const cors = require('cors')
const https = require('https')

//mongoose requires
const mongoose = require("mongoose")
const config = require('./dbconfig/login')

//api setup for entire project
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
        entended: false
        })
)

// how routes are divided up by "/" operator
app.use('/', routes)

app.use((req, res, next) => {
        const err = new Error('Not Found')
        err.status = 404
        next(err)
      })

//db connection code
app.set('development', config.db[app.settings.env])
mongoose.connect(app.get('development'))
const connection = mongoose.connection

connection.once("open", function() {
  console.log("Connected to MongoDB");
})

// imports/exports the route file to the main app.js
module.exports = app