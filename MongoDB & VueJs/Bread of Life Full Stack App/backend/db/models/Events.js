// Events collections model

// const uuid = require('uuid');
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;

// creating new schema for Events collection using mongoose

// Events Table

// Event Types schema for an embedded document under Type
let Event_Types = new Schema({

  // PK
  Event_TypeID:{
          type: 'ObjectId'
  },

  // Description
  Event_Type_Desc:{
          type: String,
          required: false
  }
})
// creating new schema for Events collection using mongoose
let EventsSchema = new Schema({

    // Primary Key ID of each event to easily keept track of all events
    EventID: {
      type:'ObjectID',
      required:true,
      index:true,
      unique:true,
      sparse:true
    },

    // Type of event that will be held... embedded document under event types schema
    Type: {
      type: [Event_Types],
      required: true
    },

    // Location of the event (Address)
    Location: {
      type: Array,

      // Array input
      /*
        Name: String,
        Street: String,
        City: String,
        State: String,
        Zipcode: Number
        */
      required: true
    },

    // Date the event will take place
    // in case of failure come back
    Date: {
      type: Date,
      default: Date.now
    }
  }, {

    // collection name
    collection: 'Events'
});


// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
autoIncrement.initialize(mongoose.connection);
EventsSchema.plugin(autoIncrement.plugin, {
  model: "Events", // collection or table name in which you want to apply auto increment
  field: "EventID", // field of model which you want to auto increment
  startAt: 1000, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});


//Exports Events schema into custom routes
module.exports = mongoose.model('Events', EventsSchema)

//versionKey: false 
