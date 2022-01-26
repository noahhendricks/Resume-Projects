// Applicant_Information.js ROUTE FILE

// constraints for the express function and router variable
const express = require('express')
const router = express.Router({ caseSensitive: true })
const Applicant_Information = require('../../db/models/Applicant_Information')
const mongoose = require('mongoose');


// FIND ALL REQ BODY
// Created enpoint that retrieves all of the applicants in the db
router.get('/applicant_information/findall', (req, res, next) => {
  // Get all data back for applicants in mongoose schema
  Applicant_Information.find((error, data) => {

            // error message in case of failed get all route
            if (error) {
              console.log('Applicant Retrieval: ALL => Failed')
              console.log(error)

              // returns all data 
            } else {
              console.log('Applicant Retrieval: ALL => Success', data)
              res.json(data)
            }
          })
    }
)


// FIND ONE REQ BODY
// Created enpoint that retrieves one of the applicants in the db by applicant id search 
router.get('/applicant_information/findone/:ApplicantId', (req, res, next) => { 
//router.get('/applicant_information/findone', (req, res, next) => {  :ApplicantId
  // Find the single applicant by the applicant id in the body and outputs its resulting data
  Applicant_Information.findOne({ ApplicantId: req.params.ApplicantId}, (error, data) => {
  //Applicant_Information.find({ApplicantId: req.body.ApplicantId}, (error, data) => {

    // error message in case of failed get single route
    if (error) {
      console.log('Applicant Retrieval: '+req.body.ApplicantId+' => Failed')
      console.log(error)

      // resturns the applicant id searched for
    } else {
      console.log('Applicant Retrieval: '+req.body.ApplicantId+' => Success', data)
      res.json(data)
}
})
})

router.get('/applicant_information/findlast', (req, res, next) => { 
  //router.get('/applicant_information/findone', (req, res, next) => {  :ApplicantId
    // Find the single applicant by the applicant id in the body and outputs its resulting data
    Applicant_Information.findOne().sort('-ApplicantId').limit(1, (error, data) => {
    //Applicant_Information.find({ApplicantId: req.body.ApplicantId}, (error, data) => {
  
      // error message in case of failed get single route
      if (error) {
        console.log('Applicant Retrieval: '+req.body.ApplicantId+' => Failed')
        console.log(error)
  
        // resturns the applicant id searched for
      } else {
        console.log('Last Applicant Retrieval: '+req.body.ApplicantId+' => Success', data)
        res.json(data)
  }
  })
  })


//POST REQ BODY
// Created enpoint that will create an applicnat information document
router.post('/applicant_information/create', (req, res, next) => {
console.log(req)
  // Creates a single applicant info document
  // creates document through body
  Applicant_Information.create({
    ApplicantId: req.body.ApplicantId,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    PhoneNumber: req.body.PhoneNumber,
    DistributionReference: req.body.DistributionReference,
    ZipCode: req.body.ZipCode,
    CovidVaccacineOnDistribution: req.body.CovidVaccacineOnDistribution,
    VaccinePreference: req.body.VaccinePreference,
    VaccacineReceived: req.body.VaccacineReceived,
    RequireAdditionalSupportiveService: req.body.RequireAdditionalSupportiveService,
    NumberOfChildrenInHousehold: req.body.NumberOfChildrenInHousehold,
    AnyMemberOver65: req.body.AnyMemberOver65,
    Veteran: req.body.Veteran,
    DescribesYourself: req.body.DescribesYourself,
    CurrentlyEmployed: req.body.CurrentlyEmployed,
    HistoryTotal : req.body.HistoryTotal
  }, (error,data) => {

    // error message if post request is entered wrong
    if(error){
            console.log(error)
       res.status(409).send('Retry') //+req.body.ApplicantId)
    }

    // Data for successful post request
    else{
      console.log("Applicant Created: ", '\n',
        "ApplicantId: "+ req.body.ApplicantId, '\n',
        "FirstName: "+ req.body.FirstName,   '\n',
        "LastName: "+ req.body.LastName, '\n',
        "PhoneNumber: "+ req.body.PhoneNumber, '\n',
        "DistributionReference: "+ req.body.DistributionReference, '\n',
        "ZipCode: "+ req.body.ZipCode, '\n',
        "CovidVaccacineOnDistribution: "+ req.body.CovidVaccacineOnDistribution, '\n',
        "VaccinePreference: "+ req.body.VaccinePreference, '\n',
        "VaccacineReceived: "+ req.body.VaccacineReceived, '\n',
        "RequireAdditionalSupportiveService: "+ req.body.RequireAdditionalSupportiveService, '\n',
        "NumberOfChildrenInHousehold: "+ req.body.NumberOfChildrenInHousehold, '\n',
        "AnyMemberOver65: "+ req.body.AnyMemberOver65, '\n',
        "Veteran: "+ req.body.Veteran, '\n',
        "DescribesYourself: "+ req.body.DescribesYourself, '\n',
        "CurrentlyEmployed: "+ req.body.CurrentlyEmployed, '\n',
        "HistoryTotal: "+ req.body.HistoryTotal, '\n',
        "Timestamp: "+ req.body.Timestamp
      )
      res.status(200).send('Applicant Created')
    }
  } 
  )
})


// PUT REQ BODY
// Updating an Applicant Information
router.put('/applicant_information/update/:ApplicantId', (req, res, next) => {
//router.put('/applicant_information/update', (req, res, next) => {
  // mongoose will use the ApplicantId to find and update the data within that specific applicant's info within the body
    Applicant_Information.findOneAndUpdate({ ApplicantId: req.params.ApplicantId }, {
  //Applicant_Information.findOneAndUpdate({ ApplicantId: req.body.ApplicantId }, {
      $set: req.body
    }, (error, data) => {

      // error message if put request is wrong
      if (error) {
        console.log('Services Retrieval: Update => Failed')
        console.log(error);

        // Data for successful put request
      } else {
        res.send('Applicant Information has been updated');
        console.log('Services Retrieval: Update => Success', data)
      }
    })
})


//DELETE REQ BODY
// Created enpoint that will delete an applicant information document
router.delete('/applicant_information/delete', (req, res, next) => {
    //mongoose will use applicant id of document to find and delete the inputted applicant
  // finds the applicant id within the body of the applicant information table that you search for
  Applicant_Information.find({ApplicantId: req.body.ApplicantId}, (error, data) => {

    // error message if applicant does not exist
    if (error){ 
         res.status(409).send('Applicant Does Not Exist: '+req.body.ApplicantId)
         console.log('Applicant Retrieval: Delete => Failed')
         console.log(error);
       } else {
        // finds and deletes the searched for name within the body of the external resource table
        Applicant_Information.findOneAndDelete({ApplicantId: req.body.ApplicantId})
        .then((result) => {
          console.log('Applicant Retrieval: Delete => Success', data)
          res.status(200).send('Applicant Deleted')
         })
        }
      })
  });

// imports/exports the route file
module.exports = router
