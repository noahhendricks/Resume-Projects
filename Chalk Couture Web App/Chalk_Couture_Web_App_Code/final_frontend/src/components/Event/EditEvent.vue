<template>
    <div class="row justify-content-center"> 
        <div style="" class="col-lg-12">
        <br><br><p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
            <div style="margin-left:475px; margin-top: -50px" >
                <u class="text-center" style="font-size:200%; font-weight:bold; ">View / Update Chalk Event</u>
            </div><br>
            
            
            <strong style ="font-size:150%;">Chalk Event Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Required Fields *</p>
            <form @submit.prevent="handleUpdateForm">
            
                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <input size="31"  type="text"  class="form-control" id="inputProjectNotes" minlength="2" maxlength="55"  placeholder="Chalk Con"  rows="1" v-model="event.event_name" required>
                    
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Status</label>
                   <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                   <br>
                    <select style="width:142px; height: 35px" v-model="event.event_status" required> 
                     <option   v-for="event_status in event_statuss" v-bind:key="event_status">{{event_status}}</option>
                    </select> 
                </div>



                <div style="margin-left-10px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Type</label>
                   <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                   <br>
                    <select style="width:142px; height: 35px" v-model="event.event_type" required> 
                     <option   v-for="event_type in event_types" v-bind:key="event_type">{{event_type}}</option>
                    </select> 
                </div>

                <div style="margin-left:-10px; width:120px;"  class="form-group col-lg-1">
                <label style ="font-size:14pt" class="col-form-label pt-0">Registered</label>
                <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                
                <br>
                
          
                <div class="form-check-inline col-lg-2">
                     <label  style ="font-size:14pt" class="form-check-label" for="Gender1">
                     <input class="form-check-input" type="radio" id="Gender1" value="Yes"  v-model="event.event_register"   >Yes    
                     </label>
                </div>
             
                <div style="margin-left:30px;" class="form-check-inline col-lg-2">
                    <label  style ="font-size:14pt" class="form-check-label" for="Gender2">
                    <input class="form-check-input" type="radio"  id="Gender2" value="No"  v-model="event.event_register" >No
                    </label>
                </div>

                <br>
                <br>

                </div>

                <div style="margin-left:40px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Duration</label>
                   <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                   <br>
                    <select style="width:85px; height: 35px" v-model="event.event_duration" required> 
                     <option   v-for="event_duration in event_durations" v-bind:key="event_duration">{{event_duration}}</option>
                    </select> 
                </div>



                <div style="margin-left:-65px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <datepicker :value="new Date()"></datepicker>
                     <input type="date"  class="form-control" v-model="event.event_start_date" required>
                </div>  
                </div>


                <div style= "margin-top: 45px" class="form-group row">
                <div style="margin-left: 0px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">End Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <datepicker :value="new Date()"></datepicker>
                     <input type="date"  class="form-control" v-model="event.event_end_date" required>
                </div> 

                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Fee</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$500.00" minlength="0" maxlength="11" size="6"  v-model="event.event_fee" required> 
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Total Earnings</label>
                    <br>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$1,500.00" minlength="0" maxlength="11" size="9"  v-model="event.event_total_earnings"> 
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Net Profit</label>
                    <br>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$1,000.00" minlength="0" maxlength="11" size="6"  v-model="event.event_net_profit"> 
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt" for="inputPhaseNotes">Comments</label>
                    <textarea cols="65" type="text" class="form-control" placeholder="Additional Notes" id="inputPhaseNotes" minlength="0" maxlength="255"   rows="5" v-model="event.event_comment" ></textarea>
                    <br>
                </div>



            <strong style ="font-size:150%;">Chalk Event Location Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">All Fields Required</p>
            <div style= "margin-top: 0px" class="form-group row">

            <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >Street Address</label>
                    <input type="text" size="46" class="form-control" placeholder="3004 Pilgrims Point Ln" minlength="5" maxlength="45"    v-model="event.event_street" required> <!--pattern="[a-zA-Z\d\s\-\,\#\.\+]{5,55}"-->
            </div>
                </div>

                <div style="margin-left: -825px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt" >City</label>
                    <input type="text" size="26" class="form-control" placeholder="Fresno" minlength="3" maxlength="25"  pattern="[A-Za-z\s]{3,35}" v-model="event.event_city" required>
                    
                </div>

                 <div  style="margin-left: 35px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">State</label>  
                    <select style="width:55px; height: 35px" v-model="event.event_state" required>  
                     <option v-for="event_state in event_states" v-bind:key="event_state" :value="event_state" >{{event_state}}</option>
                    </select> 
                </div>

                <div style="margin-left: 15px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Zip Code</label>
                    <input style="text-align:right;" type="zip" class="form-control" placeholder="XXXXX" minlength="5" maxlength="5" pattern="[0-9]{5}" v-model="event.event_zipcode" required>     
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-1">
                    
                    <label style ="font-size:14pt">Country</label>
                    <select style="width:135px; height: 35px" v-model="event.event_country" required>  
                     <option v-for="event_country in event_countrys" v-bind:key="event_country" :value="event_country">{{event_country}}</option>
                    </select>
                </div>
                </div>

                <br>
                
                  <div >
                         <button class="btn btn-success mt-3" style ="font-size:14pt; margin-bottom: 0px;">Update</button>
                  </div>

            


                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>



               
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
                event: {

                event_ID: this.$route.params.id

            },//drop down lists found from createcomponent, unchanged of course
                              //static data for dropdown lists
                event_types: ['Indoor', 'Outdoor', 'Indoor/Outdoor'],
                event_statuss: ['Not-Started', 'In-Progress', 'Completed', 'Canceled'],
                event_durations: ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days', '8 Days', '9 Days', '10 Days',], 
                event_states: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                event_countrys: ['United States'],
            }
        },


    created() {//Edits based on the event ID already entered
        let apiURL = `http://localhost:27017/event/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.event = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.event.event_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/event/${this.$route.params.id}`;
            //pulls from back end of event ID to get all data pertaining to client
            axios.put(apiURL, this.event).then((res) => {
                console.log(res)
                this.$router.push('/viewEvent')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
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