<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12">
            <br>
            <br> 
        <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold;">Assign Investor</u>
        </div>
            <strong style ="font-size:150%">Assign General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
              <div class="form-group row">
               <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorProjectNum">Project Num.</label>
                    
                    <input size="5" style="text-align:right"  type="text" class="form-control" id="inputInvestorProjectNum" minlength="5" placeholder="99999" pattern="[0-9]{5}" v-model="investor_assigned.project_number" required>
                    
                </div>
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    
                    <input size="25" type="text" class="form-control" placeholder="James" id="inputFName" minlength="2" maxlength="25" pattern="[A-Za-z\s]{2,25}" v-model="investor_assigned.investor_assign_firstname" required>

                </div>
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                   
                    <input size="36" type="text" class="form-control"  placeholder="Ford" id="inputLName" minlength="2" maxlength="35" pattern="[A-Za-z\s]{2,35}" v-model="investor_assigned.investor_assign_lastname" required>
                    
                </div>

                 <div  class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">Investor Email</label>
                   
                    <input  type="email" class="form-control" placeholder="yourname123@mail.com"  maxlength="45" size="47" v-model="investor_assigned.investor_email" required>
                    <br>
                </div>

                </div>

                <div class="form-group row">

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Investor Assigned Date</label>
                    
                    <input type="date" class="form-control" v-model="investor_assigned.investor_assigned_date" required>
                   
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestmentRate">Investment Amount</label>
                  
                    <input size="10" style="text-align:right" type="text" class="form-control" id="inputInvestmentRate" placeholder="$20,000.50"  minlength="9" maxlength="11" pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="investor_assigned.investor_assigned_cost" required>
                                   
                </div>

                <div style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Investor Paid</label>
                
                <br>
                <!--<div class="col-sm-10"> -->
          
                <div class="form-check-inline col-lg-0">
                     <label  style ="font-size:14pt" class="form-check-label" for="InvestorPaid1">
                     <input class="form-check-input" type="radio" id="InvestorPaid1" value="Yes"  v-model="investor_assigned.investor_assigned_paid"   required>Yes    
                     </label>
                </div>
             
                <div  class="form-check-inline col-lg-0">
                    <label  style ="font-size:14pt" class="form-check-label" for="InvestorPaid2">
                    <input class="form-check-input" type="radio"  id="InvestorPaid2" value="No"  v-model="investor_assigned.investor_assigned_paid" required>No
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
                investor_assigned: {
                   investor_assign_firstname: '',
                   investor_assign_lastname:'',
                   project_number: '',
                   investor_assigned_date: '',
                   investor_assigned_cost: '',
                   investor_assigned_paid: 'No',
                   investor_email:''
                   
                   
                   

                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.investor_assigned.project_number){

                    this.errors.push("Pass Numbers only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/investor_assigned';
                
                axios.post(apiURL, this.investor_assigned).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewInvestorAssigned')
                  this.investor_assigned = {
                   investor_assign_firstname: '',
                   investor_assign_lastname:'',
                   project_number: '',
                   investor_assigned_date: '',
                   investor_assigned_cost: '',
                   investor_assigned_paid: '',
                   investor_email:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>