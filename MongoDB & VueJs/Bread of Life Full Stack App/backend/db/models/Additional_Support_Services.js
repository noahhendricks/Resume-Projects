// Additional Support Services collections model

// const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating new schema for Additional Support Services collection using mongoose

// Additional Support Services Table
let Additional_Support_ServicesSchema = new Schema({

    // Each additional support service is commented above each one
    // Total of 10

    // Primary Key for ID field
    Additional_Support_Service_ID: {
      type: Number,
      required: true,
      unique:true
    },

    // Additional Support Service Names

    // 1. Utility Assistance
    // 2. Rental Assistance
    // 3. Housing
    // 4. Nutritional Support
    // 5. Transportation
    // 6. Legal Aid
    // 7. Addiction Recovery
    // 8. Job Loss
    // 9. Support For Returning Citizens
    // 10. Internet Access
    Additional_Support_Service_Name: {
      type: String,
      required: true
    }
  }, {
      
    // collection name
    collection: 'Additional_Support_Services'
});

// Exports Additional_Support_Services schema into custom routes
module.exports = mongoose.model('Additional_Support_Services', Additional_Support_ServicesSchema)

//versionKey: false 
