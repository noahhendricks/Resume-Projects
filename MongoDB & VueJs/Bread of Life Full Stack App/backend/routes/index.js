// index.js

// file imports all route modules together
// also assembles the router for use for each custom route

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })

//importing route modules
const test = require('./test')

//const custom_routes = require('./custom_routes')

// external resources route file
const external_resources = require('./custom_routes/external_resources')

// events route file
const events = require('./custom_routes/events')

// additional support services route file
const additional_support_services = require('./custom_routes/additional_support_services')

// applicant information route file
const applicant_information = require('./custom_routes/applicant_information')

// history route file
const history = require('./custom_routes/history')


//assembling router
router.use(test)

//router.use('/api', custom_routes)

// localhost:8000/api/external_resources
router.use('/api', external_resources)

// localhost:8000/api/events
router.use('/api', events)

// localhost:8000/api/additional_support_services
router.use('/api', additional_support_services)

// localhost:8000/api/applicant_information
router.use('/api', applicant_information)

// localhost:8000/api/history
router.use('/api', history)

// imports/exports the route file
module.exports = router