const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let EmployeeSchema = new Schema({
    
    employee_id: { type: String, default: uuid.v1 },
    
    employee_first_name: {
        type: String,
        minlength: 2,
        maxlength: 25,
        not: null,
        required: true
    },
    employee_last_name: {
        type: String,
        minlength: 2,
        maxlength: 35,
        not: null,
        required: true
       
    },
    employee_gender: {
        type: String,
        maxlength: 6,
        
       
    },
    employee_salary: {
        type: String,
        maxlength: 11,
        not: null,
        required: true

    },
    employee_phone: {
        type: String,
        minlength: 0,
        maxlength: 12,
        not: null,
        required: true

      },
    employee_email: {
        type: String,
        maxlength: 45,
        unique:true,
        not: null,
        required: true

      },
    employee_street: {
        type: String,
        minlength: 5,
        maxlength: 55,
        required: true,
        not: null

      },
    employee_city: {
        type: String,
        minlength: 3, 
        maxlength: 35,
        required: true,
        not: null

      },
    employee_zipcode: {
        type: String,
        maxlength:5,
        required: true,
        not: null

      },
    employee_state: {
        type: String,
        maxlength: 2,
        required: true,
        not: null

      },
    employee_country: {
        type: String,
        minlength: 4,
        maxlength: 13,
        required: true,
        not:null

      },
    employee_status_type: {
        type: String,
        minlength: 0,
        maxlength: 15,
        required: true,
        not:null

      },
    employee_title_description: {
        type: String,
        minlength: 0,
        maxlength: 15,
        required: true,
        not:null

      },
    
     
     

   
    

  }, {
    collection: 'employee'
});

module.exports = mongoose.model('employee', EmployeeSchema)