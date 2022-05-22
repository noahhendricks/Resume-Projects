const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let ProjectSchema = new Schema({
    
    project_id: { type: String, default: uuid.v1 },
    
    project_number: {
      type: String,
      minlength:5,
      not: null,
      required: true,
      unique: true
    },
     
    project_name: {
        type: String,
        minlength: 5,
        maxlength: 30,
        not: null,
        required: true
        
    },
    
    project_information: {
        type: String,
        minlength: 0,
        maxlength: 255,
       
    },
    
    
    project_budget: {
       type: String,
       minlength: 9,
       maxlength: 11,
       not: null,
       required: true
        
      },
      
      project_estimated_cost: {
      type: String,
       minlength: 9,
       maxlength: 11,
       not: null,
       required:true
       
        
      },
      project_actual_cost: {
      type: String,
       minlength: 0,
       maxlength: 11,
       not: null,
    
        
      },
      
      project_estimated_duration: {
        type: String,
        minlength: 0,
        maxlength: 7,
        required:true
        
      },
      
      project_actual_duration: {
        type: String,
        minlength: 0,
        maxlength: 7,
        
  
      },
      
      project_percent_complete:{
        type: String,
        minlength:2,
        maxlength:4,
        require:true

      },
      
      project_start_date: {
        type: String,
        required: true,
        not: null

    },
      project_estimated_end_date: {
        type: String,
        required:true
       

      },
      project_actual_end_date: {
        type: String,
        

      },
      project_status_type: {
        type: String,
        minlength: 6,
        maxlength: 25,
        required:true,
        not:null

      },
      project_type_description: {
        type: String,
        minlength: 5,
        maxlength: 35,
        required:true,
        not:null

      },

      project_location_street: {
        type: String,
        minlength: 5,
        maxlength: 55,
        required: true,
        not: null
      },
      project_location_city: {
        type: String,
        minlength: 3,
        maxlength: 35,
        required: true,
        not: null
      },
      project_location_zipcode: {
        type: String,
        minlength: 5,
        maxlength:5,
        required: true,
        not: null

      },
      project_location_state: {
        type: String,
        maxlength: 2,
        required: true,
        not: null

      },
      project_location_country: {
        type: String,
        maxlength: 13,
        required: true,
        not: null

      },
      project_location_status_type: {
        type: String,
        minlength: 5,
        maxlength: 15,
        required: true,
        not: null
      },
      
    
  }, {
    collection: 'project'
});

module.exports = mongoose.model('project', ProjectSchema)