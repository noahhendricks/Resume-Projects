<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <br>
            <br>
        <div style="margin-left:525px; margin-top: -50px">
        <u class="text-center" style="font-size:200%; font-weight:bold; ">Create Phase </u>
        </div> 
             <strong style ="font-size:150%">Phase General Information</strong>
             <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseProjectNum">Project Number</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="10" style="text-align:right"  type="text" class="form-control" id="inputPhaseProjectNum" placeholder="99999" minlength="5" pattern="[0-9]{5}" v-model="phase.project_number" required>
                    
                </div>

                <div style="margin-left:10px" class="form-group col-lg-2">

                    <label style ="font-size:14pt">Phase</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select  style="font-size:16px; width: 300px"  v-model="phase.phase_number" required> 
                     <option v-for="phase_number in phase_numbers" v-bind:key="phase_number">{{phase_number}}</option>
                    </select>
                   
                </div>


                

                <div style="margin-left:120px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt" for="inputPhaseNotes">Comments</label>
                    <textarea cols="54" type="text" class="form-control" placeholder="Additional Texts" id="inputPhaseNotes" minlength="0" maxlength="55"   rows="1" v-model="phase.phase_description" ></textarea>
                    <br>
                </div>
                
                

                </div>
                
                <div class="form-group row">

                <div class="form-group col-lg-2">
                    <label style ="font-size:14pt">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="width:120px"  v-model="phase.phase_status_type" required> 
                     <option v-for="phase_status_type in phase_status_type" v-bind:key="phase_status_type">{{phase_status_type}}</option>
                    </select>
                   
                    
                </div>

                <div style="margin-left:-50px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseBudget">Cost</label>
                  
                    <input size="8" style="text-align:right"  type="text" class="form-control" id="inputPhaseBudget" placeholder="$6,000.00"   maxlength="11"  v-model="phase.phase_cost" >
                    
                </div>

                 <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseActualDuration">Estimated Duration (weeks)</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input  style="text-align:right" size="2" type="text" class="form-control"  placeholder="6" id="inputPhaseActualDuration" minlength="1" maxlength="2" pattern="[0-9]{1,2}" v-model="phase.phase_estimated_duration" required>
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputPhaseActualDuration">Actual Duration (weeks)</label>
                    <input  style="text-align:right" size="10" type="text" class="form-control"  placeholder="12" id="inputPhaseActualDuration" minlength="0" maxlength="2" pattern="[0-9]{0,2}" v-model="phase.phase_actual_duration" >
                    
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">

                    <label style ="font-size:14pt">% Finished</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select style="width:95px"  v-model="phase.phase_percent_complete" required> 
                     <option  style="text-align:right" v-for="phase_percent_complete in phase_percent_completes" v-bind:key="phase_percent_complete" :view="phase_percent_complete" >{{phase_percent_complete}}</option>
                    </select>
                    <br>
                    <br>
                    <br>
                   
                </div>
                
                </div>

                <div class="form-group row">
                

                <div  class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="phase.phase_start_date" required>
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Estimated End Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="phase.phase_estimated_end_date" required>
                </div>

                <div style="margin-left:20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Actual End Date</label>
                    <input type="date" class="form-control" v-model="phase.phase_actual_end_date" >
                    
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
                <button class="btn btn-danger mt-3" style ="font-size:14pt">Create</button>
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
                //retrieving data from the client_form schema getting the data 
                errors: [],
                phase: {
                   project_number: '',
                   phase_number: 'A',
                   phase_name: '',
                   phase_description: '',
                   phase_cost: '',
                   phase_estimated_duration: '',   //deleted ask professor 
                   phase_actual_duration: '',
                   phase_percent_complete: '0%',
                   phase_start_date:'',
                   phase_estimated_end_date: '',
                   phase_actual_end_date: '',
                   phase_status_type: 'Not-Started',

                 
                 

                },
                
                //static data for dropdown lists
                phase_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started','Skipped'],
                phase_numbers:['1. Plans and Permitting','2. Site Work and Foundation','3. Framing and External Finishes','4. Utility Rough-Ins','5. Insulation, Drywall & Paint',
                '6. Interior Finishes and Flooring','7. Landscaping and Grounds Work','8. Final Inspection and Walkthrough'],
                phase_percent_completes:['0%','25%','50%','75%','100%'],
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.phase.phase_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/phase';
                
                axios.post(apiURL, this.phase).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewPhase')
                  this.phase = {
                   project_number: '',
                   phase_number: '',
                   phase_name: '',
                   phase_description: '',
                   phase_cost: '',
                   phase_estimated_duration: '',
                   phase_actual_duration: '',
                   phase_percent_complete: '',
                   phase_start_date:'',
                   phase_estimated_end_date: '',
                   phase_actual_end_date: '',
                   phase_status_type: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>