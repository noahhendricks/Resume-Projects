<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <br>
            <br>
        <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold;">Create Investor </u>
       </div>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="24"  type="text" class="form-control" id="inputFName" placeholder="Mark" minlength="2" maxlength="25"  pattern="[A-Za-z\s]{2,25}" v-model="investor.investor_fname" required>

                </div>
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="33"  type="text" class="form-control" id="inputLName"  placeholder="Richards" pattern="[A-Za-z\s]{2,35}" v-model="investor.investor_lname" required>
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" for="inputShortNotes">Business Name</label>
                    <textarea cols="44" type="text" class="form-control" placeholder="Garcia's Construction Co." id="inputShortNotes" minlength="0" maxlength="55"   rows="1" v-model="investor.investor_detail" ></textarea>
                    <br>
                </div>

               

                <div class="form-group col-lg-auto">
                    
                   
                    <label style ="font-size:14pt">Type</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="width:130px"  v-model="investor.investor_type" required> 
                     <option v-for="investor_type in investor_types" v-bind:key="investor_type">{{investor_type}}</option>
                    </select>
                    
                </div>

                 <div class="form-group col-lg-auto">
        
                    <label style ="font-size:14pt">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="investor.investor_status" required> 
                     <option v-for="investor_status in investor_statuses" v-bind:key="investor_status">{{investor_status}} </option>
                    </select>
                    
                </div>

                
                 </div>

                <div class="form-group row">

                <div class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">Email</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" size="46" maxlength="45" v-model="investor.investor_email" required>
                    
                </div>

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Phone</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="11" type="tel" class="form-control" placeholder="XXX-XXX-XXXX" maxlength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="investor.investor_phone" required>
                    
                </div>

                 <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >Address</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="text" size="58" class="form-control" placeholder="Street Address, Apt # 123" minlength="5" maxlength="55" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,55}"   v-model="investor.investor_address" required>
                    <br>
                </div>

                 </div>

                <div class="form-group row">

                     <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >City</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="36" type="text" class="form-control" placeholder="Dallas" minlength="5" maxlength="35" pattern="[A-Za-z\s]{3,35}" v-model="investor.investor_city" required>
                    
                </div> 

                <div class="form-group col-lg-auto">
                
                </div>

                <div class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">State</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  v-model="investor.investor_state" required> 
                     <option v-for="investor_state in investor_states" v-bind:key="investor_state" :value="investor_state">{{investor_state}}</option>
                    </select>
                   
                </div>

                
                <div class="form-group col-lg-auto">
                
                </div>

                <div class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Zip Code</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right" type="zip" placeholder="XXXXX" class="form-control" minlength="5" maxlength="5" pattern="[0-9]{5}" v-model="investor.investor_zipcode" required>
                      
                </div>
 
                <div class="form-group col-lg-auto">
                
                </div>

                 <div class="form-group col-lg-2">
                    
                    <label style ="font-size:14pt">Country</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="width:130px"  v-model="investor.investor_country" required> 
                     <option v-for="country in countries" v-bind:key="country" :value="country" >{{country}}</option>
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
                investor: {
                   investor_fname: '',
                   investor_lname: '',
                   investor_detail: '',
                   investor_phone: '',
                   investor_email: '',
                   investor_address: '',
                   investor_city: '',
                   investor_zipcode: '',
                   investor_state: 'TX',
                   investor_country:'United States',
                   investor_status: '',
                   investor_type: '',     
                   
                   

                },
                //static data for dropdown lists
                investor_states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                countries:['United States'],
                investor_statuses: ['Active', 'In-Active'],
                investor_types:['Bank','Organization','Individual','Other'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.investor.investor_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/investor';
                
                axios.post(apiURL, this.investor).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewInvestor')
                  this.investor = {
                   investor_fname: '',
                   investor_lname: '',
                   investor_detail: '',
                   investor_phone: '',
                   investor_email: '',
                   investor_address: '',
                   investor_city: '',
                   investor_zipcode: '',
                   investor_state: '',
                   investor_country:'',
                   investor_status: '',
                   investor_type: '',
                   

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>