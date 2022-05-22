const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let InvestorSchema = new Schema({
    
    investor_iD: { type: String, default: uuid.v1 },
    
    investor_fname: {
        type: String,
        minlength: 2,
        maxlength: 25,
        not: null,
        required: true
    },
    investor_lname: {
      type: String,
      minlength: 2,
      maxlength: 35,
      not: null,
      required: true
  },
     
    investor_detail: {
        type: String,
        minlength: 0,
        maxlength: 255,
      
        
    },
    
    investor_phone: {
        type: String,
        minlength: 0,
        maxlength: 12,
        required: true,
        not: null
    },
    
    investor_email: {
        type: String,
        maxlength: 45,
        required: true,
        not: null
      
      
    }, 
    
    investor_address: {
        type: String,
        minlength: 5,
        maxlength: 55,
        required: true,
        not: null
        
      },
      
      investor_city: {
          type: String,
          minlength: 3, 
          maxlength: 35,
          required: true,
          not: null
        
      },
      
     investor_zipcode: {
        type: String,
        maxlength:5 ,
        required: true,
        not: null
      },
      
      investor_state: {
        type: String,
        maxlength: 2,
        required: true,
        not: null
  
  
      },
      
      investor_country:{
        type: String,
        maxlength: 13,
        required: true,
        not: null

      },
      
    investor_status: {
        type: String,  
        maxlength: 20,
        required: true,
        not:null
        

    },
      investor_type: {
        type: String,
        maxlength: 20,
        required: true,
        not:null

      },
    

  }, {
    collection: 'investor'
});

module.exports = mongoose.model('investor', InvestorSchema)