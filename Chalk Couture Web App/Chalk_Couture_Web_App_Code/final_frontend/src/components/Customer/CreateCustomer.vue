<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12">
        <br><br><p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
        <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold">Create Customer </u>
        </div><br>
            <strong style ="font-size:150%">Customer General Information</strong>
             <p style="color:red; font-size:125%; font-weight:bold">Required Fields *</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="24" placeholder="Joey" type="text" class="form-control" id="inputFName" minlength="2" maxlength="25" pattern="[A-Za-z\s]{2,25}" v-model="customer.customer_first_name" required>
                
                </div>

                <div style= "margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="35" placeholder="Reynolds"  type="text" class="form-control" id="inputLName" minlength="2"  maxlength="35" pattern="[A-Za-z\s]{2,35}" v-model="customer.customer_last_name" required>
                    
                </div>

                <div style="margin-left:35px"  class="form-group col-lg-1">
                <label style ="font-size:14pt" class="col-form-label pt-0">Gender</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                
                <br>
                
          
                <div class="form-check-inline col-lg-2">
                     <label  style ="font-size:14pt" class="form-check-label" for="Gender1">
                     <input class="form-check-input" type="radio" id="Gender1" value="Male"  v-model="customer.customer_gender"   >Male    
                     </label>
                </div>
             
                <div style="margin-left:25px;" class="form-check-inline col-lg-2">
                    <label  style ="font-size:14pt" class="form-check-label" for="Gender2">
                    <input class="form-check-input" type="radio"  id="Gender2" value="Female"  v-model="customer.customer_gender" >Female
                    </label>
                </div>

                <br>
                <br>

                </div>


                <div style="margin-left:60px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Status</label>
                   <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                   <br>
                    <select style="width:95px; height: 35px" v-model="customer.customer_status" required> 
                     <option   v-for="customer_status in customer_statuss" v-bind:key="customer_status">{{customer_status}}</option>
                    </select> 
                </div>


                <div style="margin-left:-50px"  class="form-group col-lg-1">
                <label style ="width:109px; font-size:14pt" class="col-form-label pt-0">Club Couture</label>
                <label style =" font-size:14pt" class="col-form-label pt-0">Member</label>
                <label style = "font-size:14pt; color:red; font-weight:bold"> * </label>
                
                <br>
                
          
                <div class="form-check-inline col-lg-2">
                     <label  style ="font-size:14pt" class="form-check-label" for="Gender1">
                     <input class="form-check-input" type="radio" id="option1" value="Yes"  v-model="customer.customer_member_type"   >Yes    
                     </label>
                </div>
             
                <div style="margin-left:25px;" class="form-check-inline col-lg-2">
                    <label  style ="font-size:14pt" class="form-check-label" for="Gender2">
                    <input class="form-check-input" type="radio"  id="option2" value="No"  v-model="customer.customer_member_type" >No
                    </label>
                </div>

                <br>
                <br>

                </div>


                </div>

                <div style= "margin-top: 5px" class="form-group row">

                <div style="text-align:left; margin-top: 20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Date Entered</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <datepicker :value="new Date()"></datepicker>
                     <input type="date"  class="form-control" v-model="customer.customer_join_date" required>
                </div>  




                  <div style= "margin-left:35px; margin-top: 20px" class="form-group col-lg-auto">
                    
                    <label  style ="font-size:14pt">Email Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="email" class="form-control" placeholder="yourname123@mail.com" size="46" maxlength="45" v-model="customer.customer_email" required>
                    
                </div>

                <div style= "margin-left:35px; margin-top: 20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Phone #</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"></label>
                    <input size="11" type="tel" class="form-control"  placeholder="XXX-XXX-XXXX" maxlength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="customer.customer_phone">
                </div>

                <div style="margin-left:35px; margin-top: 20px" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Independent Designer</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select class="form" style="width:215px; height: 35px" v-model="customer.customer_independent_designer" required> 
                     <option  v-for="customer_independent_designer in customer_independent_designers" v-bind:key="customer_independent_designer">{{customer_independent_designer}}</option>
                    </select>
                    
                </div>
                
                </div>
                <br>
                <br>
                
                <div class="form-group row"> 

                <div style="text-align:left;" class="form-group col-lg-5">
                    <label style ="font-size:14pt" for="inputPhaseNotes">Comments</label>
                    <textarea cols="89" type="text" class="form-control" placeholder="Additional Notes" id="inputPhaseNotes" minlength="0" maxlength="255"   rows="5" v-model="customer.customer_comment" ></textarea>
                    <br>
                </div>
                     
                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">Event Met</label>
                    <input size="36" placeholder="Chalk Con" type="text" class="form-control" id="inputFName" minlength="2" maxlength="35" pattern="[A-Za-z\s]{2,35}" v-model="customer.customer_event_met" >
                
                </div>

                 </div>

                

            
                    
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>


                
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Create</button>
<br><br>



               
            </form>
        </div> 
    </div> 
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                //retrieving data from the customer schema getting the data 
                errors: [],
                customer: {
                   customer_first_name: '',
                   customer_last_name: '',
                   customer_gender: '',
                   customer_email: '',
                   customer_phone: '',
                   customer_join_date: '',
                   customer_independent_designer: 'Eileen Guerrero-Hendricks',
                   customer_comment: '',
                   customer_event_met: '',
                   customer_member_type: 'No',
                   customer_status: 'Active',
                   //employee_status_type: '',
                   //employee_title_description: '',
                  
                   
                },
                //static data for dropdown lists
                //customer_member_types:['Full-Time', 'Monthly', 'None'],
                customer_statuss:['Active', 'Inactive', 'N/A'],
                customer_independent_designers: ['Eileen Guerrero-Hendricks', 'Other', 'TBD'],
                //employee_title_descriptions:['Owner','Supervisor','Manager','Coordinator','Other'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.customer.customer_first_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the customer schema data
                let apiURL = 'http://localhost:27017/customer';
                
                axios.post(apiURL, this.customer).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewCustomer')
                  this.customer = {
                   customer_number: '',
                   customer_first_name: '',
                   customer_last_name: '',
                   customer_gender: '',
                   customer_email: '',
                   customer_phone: '',
                   customer_join_date: '',
                   customer_independent_designer: '',
                   customer_comment: '',
                   customer_event_met: '',
                   customer_member_type: '',
                   customer_status: ''
                  }

                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>


<style scoped>
.goback{
    font-size:20px; 
    border: 2px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0); 
    background-color: #000000d2;
    font-weight:bold; 
    margin-left:0px; 
    margin-top: -35px;
}
</style>