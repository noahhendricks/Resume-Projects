const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let InvestorAssignedSchema = new Schema({
    
    investor_assigned_id: { type: String, default: uuid.v1 },

   investor_assign_firstname: {
      type: String,
      minlength: 2,
      maxlength: 25,
      not: null,
      required: true
   },
   investor_assign_lastname: {
    type: String,
    minlength: 2,
    maxlength: 35,
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
    investor_assigned_date: {
      type: String,
      required:true,
      not:null
     
  },
     
  investor_assigned_cost: {
        type: String,
        minlength: 9,
        maxlength: 11,
        required:true,
        not:null,
        
    },

    investor_assigned_paid: {
      type: String,
      minlength:2,
      maxlength:3,
      required:true,
      not:null
      
  },
    
  investor_email: {
    type: String,
    maxlength: 45,
    required: true,
    not: null
  
  
}, 
    
   
    
    
    

  }, {
    collection: 'investor_assigned'
});

module.exports = mongoose.model('investor_assigned', InvestorAssignedSchema)