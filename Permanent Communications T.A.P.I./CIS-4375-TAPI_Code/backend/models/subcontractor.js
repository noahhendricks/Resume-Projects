const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let SubcontractorSchema = new Schema({
    
    subcontractor_id: { type: String, default: uuid.v1 },
    
    subcontractor_fname: {
        type: String,
        minlength: 2,
        maxlength: 25,
        not: null,
        required: true
    },
    subcontractor_lname: {
      type: String,
      minlength: 2,
      maxlength: 35,
      not: null,
      required: true
  },
  subcontractor_detail: {
    type: String,
    minlength: 0,
    maxlength: 55,
    

  },
  
    subcontractor_business_name: {
        type: String,
        minlength: 5,
        maxlength: 55,
        required:true,
        not:null
       
        
    },
   subcontractor_rate: {
        type: String,
        minlength: 2,
        maxlength: 7,
        required: true,
        not: null
    },
    
    subcontractor_phone: {
        type: String,
        maxlength: 12,
        required: true,
        not: null
      
      
    }, 
    
    subcontractor_email: {
        type: String,
        maxlength: 45,
        required: true,
        unique:true,
        not: null
        
      },
      
      subcontractor_address: {
          type: String,
          minlength: 5, 
          maxlength: 55,
          required: true,
          not: null
        
      },
      
     subcontractor_city: {
        type: String,
        minlength: 2,
        maxlength: 35,
        required: true,
        not: null
      },
      subcontractor_state: {
        type: String,
        maxlength: 2,
        required: true,
        not: null
      },
      
      subcontractor_zipcode: {
        type: String,
        required: true,
        maxlength: 5,
        not: null
  
  
      },
      
      subcontractor_country: {
        type: String,
        maxlength: 13,
        required: true,
        not: null

      },
      
    subcontractor_status: {
        type: String,
        minlength: 5,
        maxlength: 16,
        required: true,
        not: null
        

    },
      subcontractor_type: {
        type: String,
        minlength: 3,
        maxlength: 16,
        required: true,
        not: null

      },
    
   
    

  }, {
    collection: 'subcontractor'
});

module.exports = mongoose.model('subcontractor', SubcontractorSchema)