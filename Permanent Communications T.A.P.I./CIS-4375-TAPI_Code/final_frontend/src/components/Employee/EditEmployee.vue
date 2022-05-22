<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <br>
            <br>
        <div style="margin-left:525px; margin-top: -50px">
          <u class="text-center" style="font-size:200%; font-weight:bold">Update Employee</u>
        </div>
           <strong style ="font-size:150%">General Information</strong>
           <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                 
       
                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="24" placeholder="Joey" type="text" class="form-control" id="inputFName" minlength="2" maxlength="25" pattern="[A-Za-z\s]{2,25}" v-model="employee.employee_first_name" required>
                
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="35" placeholder="Reynolds"  type="text" class="form-control" id="inputLName" minlength="2"  maxlength="35" pattern="[A-Za-z\s]{2,35}" v-model="employee.employee_last_name" required>
                    
                </div>

                <div style="margin-left:20px"  class="form-group col-lg-1">
                <label style ="font-size:14pt" class="col-form-label pt-0">Gender</label>
                
                <br>
                
          
                <div class="form-check-inline col-lg-2">
                     <label  style ="font-size:14pt" class="form-check-label" for="Gender1">
                     <input class="form-check-input" type="radio" id="Gender1" value="Male"  v-model="employee.employee_gender"   >Male    
                     </label>
                </div>
             
                <div style="margin-left:25px;" class="form-check-inline col-lg-2">
                    <label  style ="font-size:14pt" class="form-check-label" for="Gender2">
                    <input class="form-check-input" type="radio"  id="Gender2" value="Female"  v-model="employee.employee_gender" >Female
                    </label>
                </div>

                <br>
                <br>

                </div>

                <div style="margin-left:25px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Title</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="width:120px" v-model="employee.employee_title_description" required> 
                     <option  v-for="employee_title_description in employee_title_descriptions" v-bind:key="employee_title_description">{{employee_title_description}}</option>
                    </select>
                    
                </div>

                <div style="margin-left:-70px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Type</label>
                   <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                   <br>
                    <select style="width:110px" v-model="employee.employee_status_type" required> 
                     <option   v-for="employee_status_type in employee_status_types" v-bind:key="employee_status_type">{{employee_status_type}}</option>
                    </select> 
                </div>

                <div style="margin-left:-80px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Salary</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="8" style="text-align: right" type="text" class="form-control" placeholder="$65,000.50" minlength="9"  maxlength="11" pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}" v-model="employee.employee_salary" required>  
                </div>

                </div>

                <div class="form-group row">

                  <div  class="form-group col-lg-auto">
                    
                    <label  style ="font-size:14pt">Email</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  type="email" class="form-control" placeholder="yourname123@mail.com" size="46" maxlength="45" v-model="employee.employee_email" required>
                    
                </div>

                <div style="margin-left:10px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Phone</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="11" type="tel" class="form-control"  placeholder="XXX-XXX-XXXX" maxlength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="employee.employee_phone" required>
                </div>

               

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="57" type="text" class="form-control" placeholder="Street Address, Apt # 123" minlength="5" maxlength="55" pattern="[a-zA-Z\d\s\-\,\#\.\+]{5,55}"   v-model="employee.employee_street" required>
                    <br>
                    
                </div>

                
                </div>

                 <div class="form-group row"> 

                     <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  size="36" type="text" class="form-control"  placeholder="Dallas" minlength="5" maxlength="35" pattern="[A-Za-z\s]{3,35}" v-model="employee.employee_city" required>
                    
                    
                </div>

                <div style="margin-left:30px" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <select  v-model="employee.employee_state" required> 
                     <option v-for="employee_state in employee_states" v-bind:key="employee_state" :view="employee_state" >{{employee_state}}</option>
                    </select>
                    
                    
                </div>
                    
                <div style="margin-left:-5px" class="form-group col-lg-1">
                    <label style ="font-size:14pt">Zip Code</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right" type="zip" placeholder="XXXXX" class="form-control" minlength="5" maxlength="5"  pattern="[0-9]{5}" v-model="employee.employee_zipcode" required>
                     
                </div>

                 <div style="margin-left:20px" class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="width:130px"  v-model="employee.employee_country" required> 
                     <option v-for="employee_country in employee_countries" v-bind:key="employee_country" :value="employee_country">{{employee_country}}</option>
                    </select>
                    
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
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Update</button>
                <br>
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
            errors: [],
            employee: { 



            },//drop down lists found from createcomponent, unchanged of course
             //static data for dropdown lists
                employee_states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                employee_countries:['United States'],
                employee_status_types: ['Employee', 'Contractor', 'In-Active'],
                employee_title_descriptions:['Owner','Supervisor','Manager','Coordinator','Other'],
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/employee/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.employee = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.employee.employee_first_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/employee/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.employee).then((res) => {
                console.log(res)
                this.$router.push('/viewEmployee')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>