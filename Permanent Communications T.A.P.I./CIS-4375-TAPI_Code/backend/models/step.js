const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let StepSchema = new Schema({
    
    step_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minlength:5,
      not: null,
      required: true,
      unique: false
    },
    phase_number: {
      type: String,
      minlength:1,
      not: null,
      required: true,
      unique: false
        
    },
    step_number: {
      type: String,
      minlength:1,
      not: null,
      required: true,
      unique: false
       
    },
     
    
    step_description: {
        type: String,
        minlength: 0,
        maxlength: 255,
       
        
    },
    
    step_cost: {
      type: String,
      
      maxlength: 11,
      
     
        
      },
     
      
      step_duration: {
        type: String,
        minlength: 0,
        maxlength: 2,
        
      },
      
      
      step_percent_complete:{
        type: String,
        minlength:2,
        maxlength:4,
        require:true
        

    },
      
      step_start_date: {
        type: String,
        required: true,
        not: null

    },
      step_end_date: {
        type: String,
       

      },
     
      step_status_type: {
        type: String,
        minlength: 6,
        maxlength: 25,
        required: true,
        not: null
      },
      subcontractor_email:{
        type: String,
        maxlength: 45,
        
      

      },
      subcontractor_assigned_date:{
        type: String,
        
        
      },
      subcontractor_fee:{
        type: String,
        minlength:0,
        maxlength:11,
        
        
      },
      subcontractor_paid:{
      type: String,
      minlength:0,
      maxlength:3,
      

      },
      subcontractor_fname:{
        type: String,
        minlength: 0,
        maxlength: 25,
        

      },
      subcontractor_lname:{
        type: String,
        minlength: 0,
        maxlength: 35,
       

      },
      subcontractor_assign:{
        type: String,
        minlength:2,
        maxlength:3,
        required:true
        
  
        },
    
  }, {
    collection: 'step'
});

module.exports = mongoose.model('step', StepSchema)