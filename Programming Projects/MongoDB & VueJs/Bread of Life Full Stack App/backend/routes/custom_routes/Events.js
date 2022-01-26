// Events.js ROUTE FILE

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })
const EventsModel = require('../../db/models/Events')
const mongoose = require('mongoose');

// FIND ALL REQ BODY
// Created enpoint that retrieves all of the Events in the db
router.get('/events/findall', (req, res, next) => {
  // Get all data back for Events in mongoose schema
  EventsModel.find((error, data) => {

      // error message in case of failed get all route
      if (error) {
        console.log('Events Retrieval: ALL => Failed')
        // send an error message back to next() if there is an error
        console.log(error)

        // returns all data
      } else {
        console.log('Events Retrieval: ALL => Success', data)
        res.json(data)
      }
    })
});


// FIND ONE REQ BODY
// endpoint for retrieving a single event by the EventID
router.get('/events/findone/:EventID', (req, res, next) => {
// Find the single event by the EventID and outputs its resulting data
EventsModel.findOne({ EventID: req.params.EventID}, (error, data) => {
//EventsModel.find({EventID: req.params.EventID}, (error, data) => {

  // error message in case of failed get single route
  if (error) {
    console.log('Event Retrieval: '+req.params.EventID+' => Failed')
    console.log(error).then(
      res.status(400)
    )

    // resturns the event id searched for
  } else {
    console.log('Event Retrieval: '+req.params.EventID+' => Success', data)
    res.json(data)
  }
})
})


// FIND BY Zipcode REQ BODY
// Created enpoint that retrieves events by their location (zipcode)
router.get('/events/findbyzip', (req, res, next) => {
  // finds all of the events by the zipcode of that event location
  EventsModel.find({Location:{$elemMatch:{Zipcode: 77588}}}).select({'_id':0,'EventID':1, 'Type.Event_Type_Desc': 1, 'Location': 1, 'Date': 1}).exec((error, data) => {
    
    // error message in case of failed get route
    if (error){
      console.log('Error finding Events')
      return(error)

      // resturns the event data searched for
    }else {
      console.log('Found events', data)
      res.json(data)
    }
  })
})


//FIND All Types REQ BODY
// Created enpoint that retrieves events by their event id to display all of that events' types
router.get('/events/findtypes', (req, res, next) => {
  // finds all of the events by the event
  EventsModel.find({EventID: req.body.EventID}).select({'_id':0,'EventID':1, 'Type.Event_Type_Desc': 1}).exec((error, data) => {
    
    // error message in case of failed get route
    if (error){
      console.log('Error finding Events')
      return(error)

      // resturns the event data searched for
    }else {
      console.log('Found events', data)
      res.json(data)
    }
  })
})


// GET Most Recent Three Events REQ BODY
// Created enpoint that retrieves the latest 3 events by date
router.get('/events/find3date', (req, res, next)=>{

  // finds the latest events up to 3 by date
  EventsModel.find({}).sort({Date: -1}).limit(3).exec((error, data) => {

    // error message in case of failed get route
    if (error){
      console.log('Could Not find Last Three dates')
      return(error)

    // resturns the data if successful
    }else {
      console.log('Found dates', data)
      res.json(data)
    }
  })
})

// POST REQ BODY
// Created enpoint that will create an Events document
router.post('/events/create', (req, res, next) => {
// Creates a document using the EventsModel schema for Events
/*EventsModel.create(req.body, (error, data) => {*/

  EventsModel.create({
    EventID: req.body.EventID,
    Type: req.body.Type,
    Location: req.body.Location,
    Date: req.body.Date
  }, (error, data) => {

    // error message if post request is entered wrong
    if (error) {
      console.log('Events Retrieval: Add => Failed')
      console.log(error)

    // Data for successful post request
    } else {
      console.log('Events Retrieval: Add => Success', data)
      // res.json(data) user friendly
      res.send('Event has been added to the database');
    }
});
});

// PUT REQ BODY
// Updating an Event
router.put('/events/update/:EventID', (req, res, next) => {
  EventsModel.findOneAndUpdate({ EventID: req.params.EventID }, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Event is edited via PUT');
      console.log('Event successfully updated!', data)
    }
  })
})

// DELETE
// DELETE REQ BODY
//delete an event by EventID
router.delete('/events/delete', (req, res, next) => {
  //mongoose will use EventID of document to find and delete the inputted Event
  EventsModel.find({EventID: req.body.EventID}, (error, data) => {

    // error message if event does not exist
    if (error){  
      res.status(409).send('Event Does Not Exist: '+req.body.Name)
    } else {
      // finds and deletes the searched for event within the body of the external resource table
      EventsModel.findOneAndDelete({EventID: req.body.EventID})
        .then((result) => {
        console.log('Event Deleted: '+ req.body.Name, data)
        res.status(200).send('Event Deleted')
      
        })
    }
  })
})
// imports/exports the route file
module.exports = router
