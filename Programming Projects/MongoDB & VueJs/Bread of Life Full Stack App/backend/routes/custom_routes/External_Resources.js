// External_Resources.js ROUTE FILE

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })
const External_Resources = require('../../db/models/External_Resources')
const mongoose = require('mongoose');

// FIND ALL REQ BODY
// Created enpoint that retrieves all of the external resources in the db
router.get('/external_resources/findall', (req, res, next) => {
        // Get all data back for external resources in mongoose schema
        External_Resources.find((error, data) => {

            // error message in case of failed get all route
            if (error) {
              console.log('Resources Retrieval: ALL => Failed')
              console.log(error)

              // returns all data 
            } else {
              console.log('Resources Retrieval: ALL => Success', data)
              res.json(data)
            }
          })
    }
)

//FIND ONE REQ BODY
// Created enpoint that retrieves one of the external resources in the db by name search 
router.get('/external_resources/findone', (req, res, next) => {  
  // Find the single external resource by the name in the body and outputs its resulting data
  External_Resources.find({Name: req.body.Name}, (error, data) => {

          // error message in case of failed get single route
          if (error) {
            console.log('Resource Retrieval: '+req.body.Name+' => Failed')
            console.log(error)

            // resturns the name searched for
          } else {
            console.log('Resource Retrieval: '+req.body.Name+' => Success', data)
            res.json(data)
      }
    })
})


// POST REQ BODY
// Created enpoint that will create an external resource document
router.post('/external_resources/create', (req, res, next) => {
  // Creates a single external resource document
  // creates document through body
  External_Resources.create({
    Name: req.body.Name,
    Web: req.body.Web,
    Phone: req.body.Phone
  }, (error,data) => {

    // error message if post request is entered wrong
    if(error){
       res.status(409).send('Resource Already Exists: '+req.body.Name)
    }

    // Data for successful post request
    else{
      console.log("Resource Created: ", '\n',
        "Name: "+ req.body.Name, '\n',
        "Web: "+ req.body.Web,   '\n',
        "Phone: "+ req.body.Phone
      )
      res.status(200).send('Resource Created')
    }
  } 
  )
})


// PUT REQ BODY
// Updating an External Resource
router.put('/external_resources/update', (req, res, next) => {
  // mongoose will use the Name to find and update the data within that specific external resource within the body
  External_Resources.find({Name: req.body.Name}, (error,data) => {

    // error message if data does not exist
    if(error){
      console.log(error) 
      res.status(409).send('Resource Does Not Exist: '+req.body.Name)
    }

    // occurs if no parameters are updated
    else{
      if(req.body.Web == 'nochange' && req.body.Phone == 'nochange') {
        console.log("Resource: "+req.body.Name+" No Update Params", data)
        res.status(200).send('Resource Not Updated: No Params')
      }

      // occurs if only Web is updated
      else if(req.body.Web != 'nochange' && req.body.Phone == 'nochange') {
        External_Resources.findOneAndUpdate({
          Name: req.body.Name},
          {Name: req.body.Name,
            Web: req.body.Web,
        }).then(
          console.log("Resource: "+req.body.Name+" Web Updated", data)
        ).finally(
          res.status(200).send('Resource Updated: Web')
        )
        
      }

      // occurs if only Phone is updated
      else if(req.body.Web == 'nochange' && req.body.Phone != 'nochange') {
        External_Resources.findOneAndUpdate({
          Name: req.body.Name},
          {Name: req.body.Name,
          Phone: req.body.Phone
        }).then(
          console.log("Resource: "+req.body.Name+" Phone Updated", data)
        ).finally(
          res.status(200).send('Resource Updated: Phone')
        )
      }

      // occurs if both parameters are updated
      else if(req.body.Web != 'nochange' && req.body.Phone != 'nochange') {
        External_Resources.findOneAndUpdate({
          Name: req.body.Name},
          {Name: req.body.Name,
            Web: req.body.Web,
          Phone: req.body.Phone
        }).then(
          console.log("Resource: "+req.body.Name+" Web & Phone Updated", data)
        ).finally(
          res.status(200).send('Resource Updated: Web / Phone')
        )
      }
    }
  } 
  )
})

 
//DELETE REQ BODY
// Created enpoint that will delete a History document
router.delete('/external_resources/delete', (req, res, next) => {
  //mongoose will use Name of document to find and delete the inputted external resource
  // finds the name within the body of the external resource table that you search for
  External_Resources.find({Name: req.body.Name}, (error, data) => {

    // error message if applicant does not exist
    if (error){  
      res.status(409).send('Resource Does Not Exist: '+req.body.Name)
    } else {
      // finds and deletes the searched for name within the body of the external resource table
        External_Resources.findOneAndDelete({Name: req.body.Name})
        .then((result) => {
        console.log('Resource Deleted: '+ req.body.Name, data)
        res.status(200).send('Resource Deleted')
      
        })
    }
  })
})



//TEST Route
/** 
router.put('/external_resources/test', (req, res, next) => {
  External_Resources.findOneAndUpdate({
    Name: req.body.Name},
    {Name: req.body.Name,
      Web: req.body.Web,
    //Phone: req.body.Phone
  }
  
  , (error,data) => {
    if(error){
       res.status(409).send('test failed')
       console.log(error)
    }
    else{
      console.log("Resource test: ", '\n',
        "Name: "+ req.body.Name, '\n',
        "Web: "+ req.body.Web,   '\n',
        "Phone: "+ req.body.Phone
      )
      res.status(200).send('test succeeded')
    }
  } 
  )
})
*/

// imports/exports the route file
module.exports = router
