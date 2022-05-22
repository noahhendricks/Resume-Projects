const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let SubcontractorAssignedSchema = new Schema({
    
  subcontractor_assigned_id: { type: String, default: uuid.v1 },

   subcontractor_firstname: {
      type: String,
      minlength: 2,
      maxlength: 30,
      not: null,
      required: true
   },
   subcontractor_lastname: {
    type: String,
    minlength: 2,
    maxlength: 30,
    not: null,
    required: true
   },
    
    project_number: {
      type: String,
      minlength:5,
      not: null,
      required: true,
      unique: false
    },
    subcontractor_assigned_date: {
      type: String,
      required:true,
      not:null
     
  },
     
  subcontractor_assigned_cost: {
    type: String,
    minlength:1 ,
    maxlength: 15,
    required:true,
    not:null
          
        
    },

    subcontractor_assigned_paid: {
      type: String,
      minlength:2,
      maxlength:3,
      required:true
      
  },
    
  subcontractor_email: {
    type: String,
    maxlength: 55,
    required: true,
    unique:true,
    not: null
    
  },
    
   
    
    

  }, {
    collection: 'subcontractor_assigned'
});

module.exports = mongoose.model('subcontractor_assigned', SubcontractorAssignedSchema)