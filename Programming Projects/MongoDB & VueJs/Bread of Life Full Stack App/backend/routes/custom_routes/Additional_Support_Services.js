// Additional_Support_Services.js ROUTE FILE

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })
const Additional_Support_ServicesModel = require('../../db/models/Additional_Support_Services')
const mongoose = require('mongoose');


// FIND ALL REQ BODY
// Created enpoint that retrieves all of the Additional Support Services in the db
router.get('/additional_support_services/findall', (req, res, next) => {
    // Get all data back for Additional Support Services in mongoose schema
    Additional_Support_ServicesModel.find((error, data) => {

        // error message in case of failed get all route
        if (error) {
          console.log('Services Retrieval: ALL => Failed')
          // send an error message back to next() if there is an error
          console.log(error)

          // returns all data 
        } else {
          console.log('Services Retrieval: ALL => Success', data)
          res.json(data)
        }
      })
});


// FIND ONE REQ BODY
// endpoint for retrieving a single Additional Support Service by Additional_Support_Service_ID
router.get('/additional_support_services/findone', (req, res, next) => {
  // Find the single additional support service by the additional suppoprt service id in body and outputs its resulting data
  Additional_Support_ServicesModel.find({Additional_Support_Service_ID: req.body.Additional_Support_Service_ID}, (error, data) => {

    // error message in case of failed get single route
    if (error) {
      console.log('Service Retrieval: '+req.body.Additional_Support_Service_ID+' => Failed')
      console.log(error)

      // resturns the additional support service id searched for
    } else {
      console.log('Service Retrieval: '+req.body.Additional_Support_Service_ID+' => Success', data)
      res.json(data)
    }
  })
  })


// POST REQ BODY
// Created enpoint that will create an Additional Support Services document
router.post('/additional_support_services/create', (req, res, next) => {
  // Creates a document using the additional support service model schema for additional support services
  // creates document through body
  Additional_Support_ServicesModel.create({
    Additional_Support_Service_ID: req.body.Additional_Support_Service_ID,
    Additional_Support_Service_Name: req.body.Additional_Support_Service_Name
  }, (error, data) => {

    // error message if post request is entered wrong
    if (error) {
      console.log('Service Retrieval: Add => Failed')
      console.log(error)

      // Data for successful post request
    } else {
      console.log('Service Retrieval: Add => Success', data)
      // res.json(data) user friendly
      res.send('Service has been added to the database');
    }
});
});


// PUT REQ BODY
// Updating an Additional Support Service
router.put('/additional_support_services/update', (req, res, next) => {
  // mongoose will use the Additional_Support_Service_ID to find and update the data within that specific additional service
  Additional_Support_ServicesModel.find({Additional_Support_Service_ID: req.body.Additional_Support_Service_ID}, (error,data) => {
    
    // error message if data does not exist
    if(error){
      console.log(error) 
      res.status(409).send('Service Does Not Exist: '+req.body.Additional_Support_Service_ID)
    }

    // occurs if no parameters are updated
    else{
      if(req.body.Additional_Support_Service_Name == 'nochange') {
        console.log("Service: "+req.body.Additional_Support_Service_ID+" No Update Params", data)
        res.status(200).send('Service Not Updated: No Params')
      }

        // occurs if only additional support service name is updated
        else if(req.body.Additional_Support_Service_Name != 'nochange') {
          Additional_Support_ServicesModel.findOneAndUpdate({
            Additional_Support_Service_ID: req.body.Additional_Support_Service_ID},
            {Additional_Support_Service_ID: req.body.Additional_Support_Service_ID,
            Additional_Support_Service_Name: req.body.Additional_Support_Service_Name,
          }).then(
            console.log("Service: "+req.body.Additional_Support_Service_ID+" Service Name Updated", data)
          ).finally(
            res.status(200).send('Service Updated: Name')
          )
        }
      }
    } 
    )
  })


// DELETE REQ BODY
//delete an Additional Support Service
router.delete('/additional_support_services/delete', (req, res, next) => {
  //mongoose will use additional support service id of document to find and delete the inputted service id
  // finds the name within the body of the additional support services table that you search for
  Additional_Support_ServicesModel.find({Additional_Support_Service_ID: req.body.Additional_Support_Service_ID}, (error, data) => {
    
    // error message if applicant does not exist
    if (error){ 
         res.status(409).send('Service Does Not Exist: '+req.body.Additional_Support_Service_ID)
         console.log('Service Retrieval: Delete => Failed')
         console.log(error);
       } else {
         // finds and deletes the searched for additional support service id within the body of the additional support service table
        Additional_Support_ServicesModel.findOneAndDelete({Additional_Support_Service_ID: req.body.Additional_Support_Service_ID})
        .then((result) => {
         console.log("Service: "+req.body.Additional_Support_Service_ID+" has been deleted\n", data)
         res.status(200).send('Service Deleted')
        })
      }
    })
});

// imports/exports the route file
module.exports = router
