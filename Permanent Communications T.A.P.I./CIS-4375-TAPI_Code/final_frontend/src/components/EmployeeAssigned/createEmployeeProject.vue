<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <br>
            <br>
            <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold">Assign Employee</u>
            </div>
            
          <div style="margin-top:10px">
            <strong style ="font-size:150%;">Assign General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields are Required</p>
        </div>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
               <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeProjectNum">Project Num.</label>
                    
                    <input size="10" style="text-align:right"  type="text" class="form-control" id="inputEmployeeProjectNum" placeholder="99999" minlength="5" pattern="[0-9]{5}" v-model="employee_assigned.project_number" required>
                    
                </div>
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeFName">First Name</label>
                    
                    <input size="26" type="text" class="form-control" id="inputEmployeeFName" placeholder="Marco" minlength="2" maxlength="25" pattern="[A-Za-z\s]{2,25}" v-model="employee_assigned.employee_firstname" required>

                </div>
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputEmployeeLName">Last Name</label>
                    
                    <input  size="36" type="text" class="form-control" id="inputEmployeeLName" placeholder="Polo" minlength="2" maxlength="35" pattern="[A-Za-z\s]{2,35}" v-model="employee_assigned.employee_lastname" required>
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Employee Email</label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" size="47" maxlength="45" v-model="employee_assigned.employee_email" required>
                    <br>
                </div>

                </div>

                <div class="form-group row">
                  <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Employee Assigned Date</label>
                    
                    <input type="date" class="form-control" v-model="employee_assigned.employee_assigned_date" required>
                    
                </div>
                </div>



                

                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>
                    
                    <br>
                     <button class="btn btn-danger mt-3" style ="font-size:14pt; margin-left:0px;">Create</button>
               
                <br>
                <br>



               
            </form>
        </div> 
    </div> 
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                //retrieving data from the client_form schema getting the data 
                errors: [],
                employee_assigned: {
                   employee_firstname: '',
                   employee_lastname:'',
                   project_number: '',
                   employee_assigned_date: '',
                   employee_email:''
                  
                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.employee_assigned.employee_firstname){

                    this.errors.push("Pass Letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/employee_assigned';
                
                axios.post(apiURL, this.employee_assigned).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewEmployeeAssigned')
                  this.employee_assigned = {
                   employee_firstname: '',
                   employee_lastname:'',
                   project_number: '',
                   employee_assigned_date: '',
                   employee_email:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>