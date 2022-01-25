// History collections model

// const uuid = require('uuid');
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const Applicant_Information = require('./Applicant_Information')
const Events = require('./Events')

// creating new schema for History collection using mongoose
let HistorySchema = new Schema({

    // Primary Key for History Table
    History_ID: {
      type:'ObjectID',
      required:true,
      index:true,
      unique:true,
      sparse:true
    },

    // Foreign Key of Applicant ID(PK) from Applicant Info Table
    Applicant_ID: {
      type: Number,
      required: true,
      ref: Applicant_Information
    },

    // Foreign Key of Event ID(PK) from Events Table
    Event_ID: {
        type: Number,
        required: true,
        ref: Events
      },
    },

    // Reference Link: https://masteringjs.io/tutorials/mongoose/timestamps
    // Enabled timestamp option via mongoose
    // createdBy
    // updatedBy
    { timestamps: true },
{
    // collection name
    collection: 'History'
});


// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
autoIncrement.initialize(mongoose.connection);
HistorySchema.plugin(autoIncrement.plugin, {
  model: "History", // collection or table name in which you want to apply auto increment
  field: "History_ID", // field of model which you want to auto increment
  startAt: 100000, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});


// Exports History schema into custom routes
module.exports = mongoose.model('History', HistorySchema)

//versionKey: false 