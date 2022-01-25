// Applicant Information collections model

// const uuid = require('uuid');
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const Additional_Support_Services = require('./Additional_Support_Services')

// creating new schema for Applicant Information collection using mongoose

// Applicant Information Table
let Applicant_Information= new Schema({

        // Primary Key for each applicant ID field
        ApplicantId:{
                type:'ObjectID',
                required:true,
                index:true,
                unique:true,
                sparse:true
        },

        // Applicant's First Name
        FirstName:{
                type:String,
                required: true
        },

        // Applicant's Last Name
        LastName: {
                type:String,
                required: true
        },

        // 10 digit phonenumber ex: 777-777-7777
        PhoneNumber: {
                type: String,
                required: true
        },

        // How did you hear about our distribution?  [Twitter, Instagram, Facebook, etc.]
        DistributionReference: {
                type: Array,
                required: true
        },

        // 5 digit number regarding your zip
        ZipCode: {
                type:Number,
                required: true
        },

        // T/F Would you like the COVID vaccine on during the distribution?
        CovidVaccacineOnDistribution: {
                type:Boolean,
                required: false
        },

        // T/F Which COVID vaccine would you prefer to receive? (Moderna or Pfizer)
        VaccinePreference: {
                type:Boolean,
                required: false
        },

        // T/F have you received the covid vaccination?
        VaccacineReceived: {
                type:Boolean,
                required: true
        },

        // T/F do you require additional support services?
        RequireAdditionalSupportiveService: {
                type:Boolean,
                required: true,

                // FK
                ref: Additional_Support_Services
        },

        // how many children do you support in your house?
        NumberOfChildrenInHousehold: {
                type:Number,
                required: true
        },

        // T/F do you live with anyone over 65 years old in your housing?
        AnyMemberOver65: {
                type:Boolean,
                required: true
        },

        // T/F are you a veteran?
        Veteran: {
                type:Boolean,
                required: true
        },

        // write a few words about yourself
        DescribesYourself: {
                type:String,
                required: true
        },

        // T/F are you currently employed?
        CurrentlyEmployed: {
                type:Boolean,
                required: false
        },

        //Add +1 with front end as history collection will be purged periodically
        HistoryTotal: {
                type:Number,
                required: false
        },
},
    // Reference Link: https://masteringjs.io/tutorials/mongoose/timestamps
    // Enabled timestamp option via mongoose
    // createdBy
    // updatedBy
    { timestamps: true },
{
        // collection name
        collection: 'Applicant_Information'
});



// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
autoIncrement.initialize(mongoose.connection);
Applicant_Information.plugin(autoIncrement.plugin, {
  model: "Applicant_Information", // collection or table name in which you want to apply auto increment
  field: "ApplicantId", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});


// Exports Applicant Information schema into custom routes
module.exports = mongoose.model('Applicant_Information', Applicant_Information)
