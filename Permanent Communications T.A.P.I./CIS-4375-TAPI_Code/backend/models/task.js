const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let TaskSchema = new Schema({
    
    task_id: { type: String, default: uuid.v1 },
    
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
    step_number: {
      type: String,
      minlength:1,
      maxlength:80,
      not: null,
      required: true,
      unique: false
       
    },
   
    task_name: {
        type: String,
        minlength: 5,
        maxlength: 55,
        not: null,
        required: true
        
    },
    task_description: {
        type: String,
        minlength: 0,
        maxlength: 255,
        
    },
    

    task_duration: {
        type: String,
        minlength: 0,
        maxlength: 3,
        
    },
      
    task_percent_complete:{
        type: String,
        minlength:2,
        maxlength:4,
        require:true
        
    },
      
    task_start_date: {
        type: String,
        required: true,
        not: null

    },
    task_end_date: {
        type: String,
       

    },

    task_material_aquired: {
        type: String,
        minlength:2,
        maxlength:3,
        require:true

    },
    task_status_type: {
        type: String,
        minlength: 6,
        maxlength: 25,
        required: true,
        not: null

      },
      
    
  }, {
    collection: 'task'
});

module.exports = mongoose.model('task', TaskSchema)