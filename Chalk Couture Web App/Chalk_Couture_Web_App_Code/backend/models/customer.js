// Cutomer Table

const uuid = require('uuid');
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;


let CustomerSchema = new Schema({
    
    // Primary Key ID of each customer to easily keept track of all customers
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
    customer_number: {
        type: String,
        not: null,
        required: true,
        index:true,
        unique:true,
        sparse:true
    },

    
    
    customer_first_name: {
        type: String,
        minlength: 2,
        maxlength: 35,
        not: null,
        required: true
    },

    customer_last_name: {
        type: String,
        minlength: 2,
        maxlength: 55,
        not: null,
        required: true
    },

    customer_gender: {
        type: String,
        maxlength: 6,
        not: null,
        required: true
    },

    // secondary key
    // must be UNIQUE
    customer_email: {
        type: String,
        maxlength: 75,
        unique:true,
        not: null,
        required: true
      },

    customer_phone: {
        type: String,
        minlength: 0,
        maxlength: 12,
      },

    customer_join_date: {
        type: String,
        maxlength: 11,

    },

    customer_independent_designer: {
      type: String,
      maxlength: 75,
      not: null,
      required: true
  },

    // extra comments field
    customer_comment: {
        type: String,
        minlength: 0,
        maxlength: 255,
    },    

    customer_event_met: {
      type: String
  },    


    customer_member_type: {
        type: String,
        required: true,
        not:null
      },
      
      customer_status: {
        type: String,
        minlength: 0,
        maxlength: 150,
        required: true,
        not:null
      },
    

  }, {
    collection: 'customer'
});


// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
autoIncrement.initialize(mongoose.connection);
CustomerSchema.plugin(autoIncrement.plugin, {
  model: "customer", // collection or table name in which you want to apply auto increment
  field: "customer_number", // field of model which you want to auto increment
  startAt: 1000, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});


module.exports = mongoose.model('customer', CustomerSchema)