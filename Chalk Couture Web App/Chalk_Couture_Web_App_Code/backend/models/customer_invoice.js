// Order Line Table

const uuid = require('uuid');
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;

// custom routes imported/exported for file requirements
//const item = require('./item')
//const customer = require('./customer')

// assign specific items to specific customers

let Order_LineSchema = new Schema({
    
    /*_id: {
        type: Number,
        min: [1, 'Must be between 1-4 digit(s) in length, got {VALUE}'],
        max: 9999,
    
        index:true,
        unique:true,
        sparse:true
      },*/

      order_line_number: {
        type: 'ObjectID',
        not: null,
        required: true,
        index:true,
        unique:true,
        sparse:true
      },

    item_ID: {
        type: String,
        min: [100000, 'Must be between at least 6 digits in length, got {VALUE}'],
        //max: 99999,
        not: null,
        required: true,
        //ref: item
      },

    // foreign key
    // item table key
    item_name: {
        type: String,
        //minlength:1,
        maxlength:55,
        not: null,
        required: true
      },

    item_quantity: {
        type: String,
        not: null,
        required: true
      },

    order_cost: {
      type: String,
      maxlength: 11,
      required: true,
      not:null    
    },

    customer_firstname: {
       type: String,
       minlength: 2,
       maxlength: 25,
       not: null,
       required: true
      },

    customer_lastname: {
    type: String,
      minlength: 2,
      maxlength: 35,
      not: null,
      required: true
      },
    
    // foreign key
    // customer table key
    customer_email: {
      type: String,
      maxlength: 55,
      not: null,
      required: true,
      //ref: customer
    },

    purchase_date: {
      type: String,
      required:true,
      not:null
      },


  }, {
    collection: 'customer_invoice'
});



// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
autoIncrement.initialize(mongoose.connection);
Order_LineSchema.plugin(autoIncrement.plugin, {
  model: "customer_invoice", // collection or table name in which you want to apply auto increment
  field: "order_line_number", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});



module.exports = mongoose.model('customer_invoice', Order_LineSchema)