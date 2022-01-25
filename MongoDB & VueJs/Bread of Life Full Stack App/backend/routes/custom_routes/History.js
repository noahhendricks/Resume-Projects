// History.js ROUTE FILE

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })
const History = require('../../db/models/History')
const Applicant_Information =require('../../db/models/Applicant_Information')
const mongoose = require('mongoose');


// FIND ALL REQ BODY
// Created enpoint that retrieves all of the Histories in the db
router.get('/history/findall', (req, res, next) => {
    // Get all data back for History in mongoose schema
    History.find((error, data) => {

        // error message in case of failed get all route
        if (error) {
          console.log('History Retrieval: ALL => Failed')
          // send an error message back to next() if there is an error
          console.log(error)
          res.status(400)

          // returns all data 
        } else {
          console.log('History Retrieval: ALL => Success', data)
          res.status(200).json(data)
        }
      })
});


// FIND ONE REQ BODY
// endpoint for retrieving a single History by Applicant ID
router.get('/history/findone', (req, res, next) => {
  // Find the single History by an applicant's id in the body and outputs its resulting data
  History.find({Applicant_ID: req.body.Applicant_ID}, (error, data) => {

    // error message in case of failed get single route
    if (error) {
      console.log('History Retrieval: '+req.body.History_ID+' => Failed')
      console.log(error)
      res.status(400)
      // resturns the history id searched for
    } else {
      console.log('History Retrieval: '+req.body.History_ID+' => Success',data)
      res.status(200).json(data)
}
})
})

// FIND ONE REQ BODY
// endpoint for retrieving a single History by Applicant ID
router.get('/history/findone/:History_ID', (req, res, next) => {
  // Find the single History by an applicant's id in the body and outputs its resulting data
  History.findOne({History_ID: req.params.History_ID}, (error, data) => {

    // error message in case of failed get single route
    if (error) {
      console.log('History Retrieval: '+req.params.History_ID+' => Failed')
      console.log(error)
      res.status(400)
      // resturns the history id searched for
    } else {
      console.log('History Retrieval: '+req.params.History_ID+' => Success',data)
      res.status(200).json(data)
}
})
})


//******
// params applicant id for front end history button to trigger chart/table for that applicant's history
// FIND ONE REQ BODY
// endpoint for retrieving a single History by Applicant ID
router.get('/history/find/:Applicant_ID', (req, res, next) => {
  // Find the single History by an applicant's id in the body and outputs its resulting data
  History.find({Applicant_ID: req.params.Applicant_ID}, (error, data) => {

    // error message in case of failed get single route
    if (error) {
      console.log('History Retrieval: '+req.params.History_ID+' => Failed')
      console.log(error)
      res.status(400)
      // resturns the history id searched for
    } else {
      console.log('History Retrieval: '+req.params.History_ID+' => Success',data)
      res.status(200).json(data)
}
})
})



//FIND History 
//endpoint for documents with application_information data aggregated
// **Consider moving to Applicant Information route folder
router.get('/history/findhistory', (req, res, next) => {
  Applicant_Information.aggregate([{
    $lookup:{
      from: 'History',
      localField: 'ApplicantId',
      foreignField: 'Applicant_ID',
      as: "HistoryTotals"
    }}]).exec((error, data) => {
    
    // error message in case of failed get route
    if (error){
      console.log('Error finding Historical Applicant Information')
      console.log(error)
      res.status(400)

      // resturns the event data searched for
    }else {
      console.log('Found Historical Applicant Information', data)
      res.status(200).json(data)
    }
  })
})  

// POST REQ BODY
// Created enpoint that will create a History document
router.post('/history/create', (req, res, next) => {
    // Creates a single history document
        // creates document through body
        History.create({
          History_ID: req.body.History_ID,
          Applicant_ID: req.body.Applicant_ID,
          Event_ID: req.body.Event_ID,
        }, (error, data) => {

          // error message if post request is entered wrong
          if (error) {
            console.log('History Retrieval: Add => Failed')
            console.log(error)
            res.status(400)

            // Data for successful post request
          } else {
            console.log('History Retrieval: Add => Success', data)
            // res.json(data) user friendly
            res.status(200).send('History has been added to the database');
          }
      });
      });

// DELETE REQ BODY
// Created enpoint that will delete a History document
router.delete('/history/delete', (req, res, next) => {
    //mongoose will use Applicant_ID of document to find and delete the inputted History
    // finds the applicant id within the body of the history table you search for
    History.find({History_ID: req.body.History_ID}, (error, data) => {

      // error message if applicant does not exist
      if (error){ 
          res.status(409).send(' History Does Not Exist: '+req.body.Applicant_ID)
          console.log('History Delete => Failed')
          console.log(error)
          res.status(400);
         } else {

          // finds and deletes the searched for applicant id within the body of the history table
          History.findOneAndDelete({History_ID: req.body.History_ID})
          .then((result) => {
           console.log('History Delete => Success', data)
           res.status(200).send(' History Deleted')
          })
        }
      })
  });


// PUT REQ BODY
// Updating an History
router.put('/history/update/:History_ID', (req, res, next) => {
  History.findOneAndUpdate({ History_ID: req.params.History_ID }, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('History is edited via PUT');
      console.log('History successfully updated!', data)
    }
  })
})

// History table will be disabled for updates because the data will not need to be edited after entry.
//We want to prevent the ability to do so.

// Saved put route for history table just in case
  /*
// PUT
// Updating a History
router.put('/history/update', (req, res, next) => {
  // mongoose will use the History_ID to find and update the data within that specific History
  History.find({History_ID: req.body.History_ID}, (error,data) => {
    if(error){
      console.log(error) 
      res.status(409).send('History Does Not Exist: '+req.body.History_ID)
    }
    else{
      if(req.body.Applicant_ID == 'nochange' && req.body.Event_ID == 'nochange') {
        console.log("History: "+req.body.History_ID+" No Update Params")
        res.status(200).send('History Not Updated: No Params')
      }
      else if(req.body.Applicant_ID != 'nochange' && req.body.Event_ID == 'nochange') {
        History.findOneAndUpdate({
          History_ID: req.body.History_ID},
          {History_ID: req.body.History_ID,
            Applicant_ID: req.body.Applicant_ID,
        }).then(
          console.log("History: "+req.body.History_ID+" Applicant ID Updated")
        ).finally(
          res.status(200).send('History Updated: Applicant ID')
        )
        
      }
      else if(req.body.Applicant_ID == 'nochange' && req.body.Event_ID != 'nochange') {
        History.findOneAndUpdate({
          History_ID: req.body.History_ID},
          {History_ID: req.body.History_ID,
            Event_ID: req.body.Event_ID
        }).then(
          console.log("History: "+req.body.History_ID+" Event ID Updated")
        ).finally(
          res.status(200).send('History Updated: Event ID')
        )
      }
      else if(req.body.Applicant_ID != 'nochange' && req.body.Event_ID != 'nochange') {
        History.findOneAndUpdate({
          History_ID: req.body.History_ID},
          {History_ID: req.body.History_ID,
            Applicant_ID: req.body.Applicant_ID,
            Event_ID: req.body.Event_ID
        }).then(
          console.log("History: "+req.body.History_ID+" Applicant and Event ID's Updated")
        ).finally(
          res.status(200).send("History Updated: Applicant and Event ID's")
        )
      }
    }
  } 
  )
})
*/

// imports/exports the route file
module.exports = router
