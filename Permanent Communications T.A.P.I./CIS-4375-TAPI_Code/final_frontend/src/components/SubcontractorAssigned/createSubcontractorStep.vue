<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <br>
            <br>
            <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold ">Subcontractor Assigned</u>
            </div>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputFName" pattern="[A-Za-z\s]{0,40}" v-model="subcontractor_assigned.subcontractor_firstname" required>

                </div>
                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputLName" pattern="[A-Za-z\s]{0,40}" v-model="subcontractor_assigned.subcontractor_lastname" required>
                    
                </div>

                <div class="form-group col-lg-3">
                    
                    <label style ="font-size:14pt">Email</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" v-model="subcontractor_assigned.subcontractor_email" required>
                    <br>
                </div>

                 <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input   type="text" class="form-control" id="inputSubcontractorProjectNum" placeholder="99999" minlength="5" pattern="[0-9]{5}" v-model="subcontractor_assigned.project_number" required>
                    
                </div>


                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Subcontractor Assigned Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="subcontractor_assigned.subcontractor_assigned_date" required>
                    <br>
                </div>

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorRate">Step Cost</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="text" class="form-control" id="inputSubcontractorRate" placeholder="$10,000.50"   pattern="[$\0-9\.]{1,15}" v-model="subcontractor_assigned.subcontractor_assigned_cost" required>
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Subcontractor Paid</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                
               
          
                <div class="form-check-inline col-lg-0">
                     <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid1">
                     <input class="form-check-input" type="radio" id="SubcontractorPaid1" value="Yes"  v-model="subcontractor_assigned.subcontractor_assigned_paid"   required>Yes    
                     </label>
                </div>
             
                <div  class="form-check-inline col-lg-0">
                    <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid2">
                    <input class="form-check-input" type="radio"  id="SubcontractorPaid2" value="No"  v-model="subcontractor_assigned.subcontractor_assigned_paid" required>No
                    </label>

                </div>
                
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
                subcontractor_assigned: {
                   subcontractor_firstname: '',
                   subcontractor_lastname:'',
                   project_number: '',
                   subcontractor_assigned_date: '',
                   subcontractor_assigned_cost: '',
                   subcontractor_assigned_paid: '',
                   subcontractor_email:''
                   
                   
                   

                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.subcontractor_assigned.subcontractor_firstname){

                    this.errors.push("Pass Letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/subcontractor_assigned';
                
                axios.post(apiURL, this.subcontractor_assigned).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewSubcontractorAssigned')
                  this.subcontractor_assigned = {
                   subcontractor_firstname: '',
                   subcontractor_lastname:'',
                   project_number: '',
                   subcontractor_assigned_date: '',
                   subcontractor_assigned_cost: '',
                   subcontractor_assigned_paid: '',
                   subcontractor_email:''
                  

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>