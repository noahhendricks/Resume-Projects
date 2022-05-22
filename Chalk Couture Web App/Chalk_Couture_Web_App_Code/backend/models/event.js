// Item Table

const uuid = require('uuid');
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;


let EventSchema = new Schema({
    
    // Primary Key ID of each item to easily keept track of all items
    // Has a 4 digit validator dealing with max and min digit value
    // makes sure user types in at least 4 digits to display a valid id
    /*_id: {
        type: Number,
        min: [1, 'Must be between 1-4 digit(s) in length, got {VALUE}'],
        max: 9999,
    
        index:true,
        unique:true,
        sparse:true
      },*/

    // Primary key
    event_ID: {
      type: String,
      not: null,
      required: true,
      index:true,
      unique:true,
      sparse:true
    },

    // secondary key
    // must be UNIQUE
    event_name: {
        type: String,
        minlength:1,
        maxlength:35,
        not: null,
        required: true,
        unique: true
      },

    event_comment: {
        type: String,
        not: null,
        required: false
      },

    event_start_date: {
        type: String,
        not: null,
        required: true,
        unique: false
      },

    event_end_date: {
        type: String,
        not: null,
        required: true,
        unique: false
      },

      event_duration: {
        type: String,
        not: null,
        required: true,
        unique: false
      },

    event_fee: {
        type: String,
        not: null,
        required: true,
        unique: false
      },

    event_total_earnings: {
        type: String,
        not: null,
        required: false,
        unique: false
      },

    event_net_profit: {
        type: String,
        not: null,
        required: false,
        unique: false
      },

      event_register: {
        type: String,
        required: true,
        not:null    
      },

    event_type: {
        type: String,
        not: null,
        required: true
       
    },

    event_status: {
        type: String,
        required: true,
        not:null    
      },

    // Event Location
    event_street: {
        type: String,
        maxlength: 45 
      },

    event_city: {
        type: String,
        maxlength: 25,
        required: true,
        not:null  
      },

    event_state: {
        type: String,
        maxlength: 11,
        not: null,
        required: true
    },    

    event_zipcode: {
        type: String,
        required: true,
        not:null,
        minlength: 5,
        maxlength: 5,
      },

    event_country: { 
        type: String,
        minlength: 6,
        maxlength: 20,
        required:true
      },

    
  }, {
    collection: 'event'
});



// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
autoIncrement.initialize(mongoose.connection);
EventSchema.plugin(autoIncrement.plugin, {
  model: "event", // collection or table name in which you want to apply auto increment
  field: "event_ID", // field of model which you want to auto increment
  startAt: 100, // start your auto increment value from 1
  incrementBy: 5, // incremented by 5
});



module.exports = mongoose.model('event', EventSchema)