// Item Table

const uuid = require('uuid');
const mongoose = require('mongoose');
//const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;


let ItemSchema = new Schema({
    
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
    // SKU
    item_ID: {
      type: String,
      not: null,
      required: true,
      index:true,
      unique:true,
      sparse:true
    },

    // secondary key
    // must be UNIQUE
    item_name: {
        type: String,
        minlength:1,
        maxlength:55,
        not: null,
        required: true,
        unique: true
      },

    item_class: {
        type: String,
        not: null,
        required: true
      },

    item_category: {
        type: String,
      },

    item_style: {
        type: String,
      },

      item_size: {
        type: String,
      },

    item_color: {
        type: String,
      },

    item_use: {
        type: String,
      },

    item_accessory: {
        type: String,
      },
    
    // extra comments field
    item_comment: {
        type: String,
        minlength: 0,
        maxlength: 255,
       
    },

    item_price: {
        type: String,
        maxlength: 11,
        required: true,
        not:null    
      },

    item_count: {
        type: String,
        maxlength: 11  
      },

    item_total_value: {
        type: String,
        maxlength: 11  
      },

    item_date_entered: {
        type: String,
        maxlength: 11,
        not: null,
        required: true
    },    

    /*item_type: {
        type: String,
        required: true,
        not:null
      },*/

    item_status: { 
        type: String,
        minlength: 6,
        maxlength: 20,
        required:true
      },

    
  }, {
    collection: 'item'
});



// Ref Link: https://stackoverflow.com/questions/40979391/mongodb-and-nodejs-insert-id-with-auto-increment/40979547
// I opted to add in the auto increment funtion for my primary key in this table
/*autoIncrement.initialize(mongoose.connection);
ItemSchema.plugin(autoIncrement.plugin, {
  model: "item", // collection or table name in which you want to apply auto increment
  field: "item_ID", // field of model which you want to auto increment
  startAt: 100000, // start your auto increment value from 1
  incrementBy: 100, // incremented by 10
});*/



module.exports = mongoose.model('item', ItemSchema)