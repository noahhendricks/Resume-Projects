// test.js

// file to test the express route connection to make sure our full stack project correctly makes a connection to the route

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })

// get route for localhost:8000/api/test
router.get('/test', (req, res, next) => {
        // result on webpage to notify that route works
        res.send('working')
        }
)

// imports/exports the route file
module.exports = router
