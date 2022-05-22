const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let PhaseSchema = new Schema({
    
    phase_id: { type: String, default: uuid.v1 },
    
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
      maxlength:35,
      not: null,
      required: true,
      unique: false
        
    },
     
    
    phase_description: {
        type: String,
        minlength: 0,
        maxlength: 255,
       
    },
    
    
      phase_cost: {
        type: String,
        maxlength: 11,

        
      },
     
      
      phase_estimated_duration: {
        type: String,
        minlength: 1,
        maxlength: 2,
        
      },
      
      phase_actual_duration: {
        type: String,
        minlength: 0,
        maxlength: 2,
        
  
      },
      
      phase_percent_complete:{
        type: String,
        minlength:1,
        maxlength:4,
        required:true,
        
        

      },
      
      phase_start_date: {
        type: String,
        required: true,
        not: null

    },
    phase_estimated_end_date: {
        type: String,
        required: true,
        not: null

      },
      phase_actual_end_date: {
        type: String,
        

      },
      phase_status_type: {
        type: String,
        minlength: 6,
        maxlength: 20,
        required:true

      },
      
    
  }, {
    collection: 'phase'
});

module.exports = mongoose.model('phase', PhaseSchema)