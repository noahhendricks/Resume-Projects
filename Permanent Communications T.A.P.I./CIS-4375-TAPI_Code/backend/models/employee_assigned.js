const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Jose Zelaya

let EmployeeAssignedSchema = new Schema({
    
   employee_assigned_id: { type: String, default: uuid.v1 },

   employee_firstname: {
      type: String,
      minlength: 2,
      maxlength: 25,
      not: null,
      required: true
   },
   employee_lastname: {
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
    employee_assigned_date: {
      type: String,
      required:true,
      not:null
     
  },
     
  employee_email: {
    type: String,
    maxlength: 45,
    not: null,
    required: true

  },
    


  }, {
    collection: 'employee_assigned'
});

module.exports = mongoose.model('employee_assigned', EmployeeAssignedSchema)