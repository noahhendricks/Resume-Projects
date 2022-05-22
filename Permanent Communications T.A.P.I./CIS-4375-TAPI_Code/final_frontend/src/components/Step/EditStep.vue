<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12"> 
            <br>
            <br>
        <div style="margin-left:525px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold; ">Update Step</u>
        </div>
            <strong style ="font-size:150%">General Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Fields with * are Required</p>
            <form @submit.prevent="handleUpdateForm">
                 
      <div class="form-group row">
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepProjectNum">Project Number</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input size="10" style="text-align:right"  type="text" class="form-control" id="inputStepProjectNum" placeholder="99999" minlength="5"  pattern="[0-9]{5}" v-model="step.project_number" required>
                    
                </div>

                <div style="margin-left:50px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt">Phase</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select style="width:290px" v-model="step.phase_number" required> 
                     <option v-for="phase_number in phase_numbers" v-bind:key="phase_number">{{phase_number}}</option>
                    </select>
                </div>

                <div style="margin-left:140px;" class="form-group col-lg-2">
                     <label style ="font-size:14pt">Step</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select  style="width:470px"  v-model="step.step_number" required> 
                     <option v-for="step_number in step_numbers" v-bind:key="step_number">{{step_number}}</option>
                    </select>
                    <br>
                    <br>
                </div>


                </div>
        
                <div class="form-group row">

                <div  style="margin-left:0px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt" for="inputStepNotes">Comments</label>
                    <textarea  cols="55" rows="1" type="text" class="form-control" id="inputStepNotes" placeholder="Additional Notes" minlength="0" maxlength="255"   v-model="step.step_description" ></textarea>
                    <br>
                </div>
                
               


                <div style=" margin-left:20px" class="form-group col-lg-3">
                    <label style ="font-size:14pt">Status</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select style="width:120px" v-model="step.step_status_type" required> 
                     <option v-for="step_status_type in step_status_type" v-bind:key="step_status_type">{{step_status_type}}</option>
                    </select>
            
                </div>

                <div style="margin-left:-180px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepBudget">Cost</label>
                    <input size="8" style="text-align:right" type="text" class="form-control" id="inputStepBudget" placeholder="$4,000.00"  maxlength="11"   v-model="step.step_cost" >
                    
                </div>

                 <div style=" margin-left:10px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepDuration">Duration (days)</label>
                    <input style="text-align:right" type="text" placeholder="3" class="form-control" size="10" id="inputStepDuration" minlength="0" maxlength="2" pattern="[0-9]{0,2}" v-model="step.step_duration" >
                    
                </div>

                <div  style=" margin-left:5px" class="form-group col-lg-2">
                    <label style ="font-size:14pt">% Finished</label>
                     <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <br>
                    <select style="width:95px"  v-model="step.step_percent_complete" required> 
                     <option style="text-align: right" v-for="step_percent_complete in step_percent_completes" v-bind:key="step_percent_complete" :value="step_percent_complete">{{step_percent_complete}}</option>
                    </select>
                    <br>
                    <br>
                    
                </div>

                </div>

                
                <div class="form-group row">
            
                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Start Date</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input type="date" class="form-control" v-model="step.step_start_date" required>
                    <br>
                </div>

                <div  style="margin-left:20px " class="form-group col-lg-auto">
                    <label style ="font-size:14pt">End Date</label>
                    <input type="date" class="form-control" v-model="step.step_end_date" >
                </div>

                <div  style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Subcontractor Assign</label>
                <label style ="font-size:14pt; color:red; font-weight:bold">* </label>
                
                
               
          
                <div style="margin-left: 10px;" class="form-check-inline col-lg-auto">
                     <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorAssign1">
                     <input style="margin-left:15px" class="form-check-input" type="radio" id="SubcontractorAssign1" value="Yes"  v-model="step.subcontractor_assign"   required>Yes    
                     </label>
                </div>
             
                <div  style="margin-left: 10px;" class="form-check-inline col-lg-auto">
                    <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorAssign2">
                    <input class="form-check-input" type="radio"  id="SubcontractorAssign2" value="No"  v-model="step.subcontractor_assign" required>No
                    </label>
                    
                </div>
                  
                </div>
                </div>

                

                <div  class="form-group row">
                    <strong style ="font-size:150%"> Subcontractor Assignment General Information</strong>
                    
                    
                    <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">First Name</label>
                    
                    <input size="26" type="text" class="form-control" id="inputFName" placeholder="Charles" minlength="0" maxlength="25" pattern="[A-Za-z\s]{0,25}" v-model="step.subcontractor_fname" >

                </div>
                <div style="margin-left: 15px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Last Name</label>
                    
                    <input size="36" type="text" class="form-control" id="inputLName" placeholder="Vaughn" minlength="0" maxlength="35"  pattern="[A-Za-z\s]{0,35}" v-model="step.subcontractor_lname" >
                    
                </div>
                    <div style="margin-left: 15px" class="form-group col-lg-auto">
                    
                    <label style ="font-size:14pt">Subcontractor Email</label>
                    
                    <input size="47" type="email" class="form-control" placeholder="yourname123@mail.com" maxlength="45" v-model="step.subcontractor_email" >
                    <br>
                </div>

                
                
                </div>

                 <div class="form-group row">

                <div  class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Assigned Date</label>
                    <input type="date" class="form-control" v-model="step.subcontractor_assigned_date" >
                    
                </div>

                <div style="margin-left: 20px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputSubcontractorRate">Subcontractor Fee</label>
                   
                     <input size="10" style="text-align:right" type="text" class="form-control" id="inputSubcontractorRate" placeholder="$2,500.50"  maxlength="11"    v-model="step.subcontractor_fee" >
                    
                </div>

                 <div  style="margin-left:20px" class="form-group col-lg-2">
                <label style ="font-size:14pt" class="col-form-label pt-0">Subcontractor Paid </label> 
                
               
          
                <div class="form-check-inline col-lg-0">
                     <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid1">
                     <input style="margin-left:15px" class="form-check-input" type="radio" id="SubcontractorPaid1" value="Yes"  v-model="step.subcontractor_paid"   >Yes    
                     </label>
                </div>
             
                <div  class="form-check-inline col-lg-0">
                    <label  style ="font-size:14pt" class="form-check-label" for="SubcontractorPaid2">
                    <input class="form-check-input" type="radio"  id="SubcontractorPaid2" value="No"  v-model="step.subcontractor_paid" >No
                    </label>

                </div>
                
                </div>

                 </div>

             <button class="btn btn-danger mt-3" style ="font-size:14pt">Update</button>

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
            errors: [],
            step: { 



            },//drop down lists found from createcomponent, unchanged of course
                //static data for dropdown lists
                step_status_type: ['Complete', 'In-Progress', 'On-Hold', 'Not-Started', 'Skipped'],
                phase_numbers:['1. Plans and Permitting','2. Site Work and Foundation','3. Framing and External Finishes','4. Utility Rough-Ins','5. Insulation, Drywall & Paint',
                '6. Interior Finishes and Flooring','7. Landscaping and Grounds Work','8. Final Inspection and Walkthrough'],
                step_numbers:['1. General Conditions','2. Apply for Permits','3. Site Work','4. Foundation','5. Framing','6. Roofing','7. Exterior Finishes','8. Rough-in plumbing','9. Rough-in electrical','10. Rough-in HVAC','11. Rough-in communication - phone, cable, computer, alarm',
                '12. Insulation','13. Drywall','14. Paint and Wallpaper','15. Cabinets','16. Finish Plumbing','17. Finish Electrical','18. Finish HVAC','19. Carpet, Tile and Appliances','20. Grounds Work','21. Landscaping ','22. Inspection','23. Walkthrough'],
                step_percent_completes:['0%','25%','50%','75%','100%']
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/step/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.step = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.step.step_name){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/step/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.step).then((res) => {
                console.log(res)
                this.$router.push('/viewStep')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>