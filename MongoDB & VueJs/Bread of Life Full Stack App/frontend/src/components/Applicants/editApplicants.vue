<!-- editApplicants.vue -->


<!-- Editing an applicant takes place here -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">

            <!-- creation of aa applicant and the form takes place here -->
            <h3 class="text-center">Update Applicant</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    
                    <!-- First Name -->
                    <label>1. First Name</label>
                    <input type="text" class="form-control" v-model="applicant.FirstName" required><br>
                </div>

                <!-- Last Name -->
                <div class="form-group">
                    <label>2. Last Name</label>
                    <input type="text" class="form-control" v-model="applicant.LastName" required><br>
                </div>

                <!-- Phone Number -->
                <div class="form-group">
                    <label>3. Phone Number</label>
                    <input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$" v-model="applicant.PhoneNumber" 
                    placeholder="XXX-XXX-XXXX" aria-describedby="phoneHelpBlock" required>
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            10 digit phone number should be entered with dashes
                    </small><br>
                </div>

                <!-- ZipCode -->
                <div class="form-group">
                    <br><label>4. Zipcode</label>
                    <input type="number" class="form-control" v-model="applicant.ZipCode" required><br>
                </div>

                <!-- DistributionReference -->  <!-- Reference Link: https://www.w3schools.com/html/html_form_input_types.asp -->
                <div class="form-group">
                    <label>5. How did you hear about our distribution?</label><br>
                    <input type="checkbox" id="Facebook" :true-value="[]" value="Facebook" v-model="applicant.DistributionReference">
                    <label for="Facebook"> Facebook</label><br>
                    <input type="checkbox" id="Instagram" :true-value="[]" value="Instagram" v-model="applicant.DistributionReference">
                    <label for="Instagram"> Instagram</label><br>
                    <input type="checkbox" id="Twitter" :true-value="[]" value="Twitter" v-model="applicant.DistributionReference">
                    <label for="Twitter"> Twitter</label><br>
                    <input type="checkbox" id="Word of Mouth" :true-value="[]" value="Word of Mouth" v-model="applicant.DistributionReference">
                    <label for="Word of Mouth"> Word of Mouth</label><br>
                    <input type="checkbox" id="KMAZ 102.5fm" :true-value="[]" value="KMAZ 102.5fm" v-model="applicant.DistributionReference">
                    <label for="KMAZ 102.5fm"> KMAZ 102.5fm</label><br>
                    <input type="checkbox" id="None of the Above" :true-value="[]" value="None of the Above" v-model="applicant.DistributionReference">
                    <label for="None of the Above"> None of the Above</label><br>
                    <span>Checked References: {{ applicant.DistributionReference }}</span>
                </div> 

                <!-- Reference Link: https://vuejs.org/v2/guide/forms.html -->

                <!-- VaccacineReceived -->
                <div class="form-group">
                    <br><label>6. Have you received the COVID vaccine?</label><br>
                    <input type="radio"  id:="Yes" :checked="0" value="1" class="button" v-model="applicant.VaccacineReceived" >  Yes<br>
                    <input type="radio"  id:="No" :checked="1" value="0" class="button" v-model="applicant.VaccacineReceived" >  No<br>
                </div>

                <!-- CovidVaccacineOnDistribution -->
                <div class="form-group">
                    <br><label>7. Would you like the COVID vaccine on during the distribution?</label><br>
                    <input type="radio"  id:="Yes" value="1" class="button" v-model="applicant.CovidVaccacineOnDistribution" required>  Yes<br>
                    <input type="radio"  id:="No" value="0" class="button" v-model="applicant.CovidVaccacineOnDistribution" required>  No<br>
                </div>

                <!-- VaccinePreference -->
                <div class="form-group">
                    <br><label>8. Which COVID vaccine would you prefer to receive?</label><br>
                    <input type="radio"  id:="Moderna" value="1" class="button" v-model="applicant.VaccinePreference" required>  Moderna<br>
                    <input type="radio"  id:="Pfizer" value="0" class="button" v-model="applicant.VaccinePreference" required>  Pfizer<br>
                </div>

                <!-- RequireAdditionalSupportiveService -->
                <div class="form-group">
                    <br><label>9. Are you in need of additional supportive services (e.g., utility assistance, rental assistance,housing, nutritional support, etc.)?</label><br>
                    <input type="radio"  id:="Yes" value="1" class="button" v-model="applicant.RequireAdditionalSupportiveService" required>  Yes<br>
                    <input type="radio"  id:="No" value="0" class="button" v-model="applicant.RequireAdditionalSupportiveService" required>  No<br>
                </div>

                <!-- NumberOfChildrenInHousehold -->
                <div class="form-group">
                    <br><label>10. Number of Children in Household</label>
                    <input type="number" class="form-control" v-model="applicant.NumberOfChildrenInHousehold" required>
                </div>

                <!-- AnyMemberOver65 -->
                <div class="form-group">
                    <br><label>11. Are you or anyone in your household 65+ in age?</label><br>
                    <input type="radio"  id:="Yes" value="1" class="button" v-model="applicant.AnyMemberOver65" required>  Yes<br>
                    <input type="radio"  id:="No" value="0" class="button" v-model="applicant.AnyMemberOver65" required>  No<br>
                </div>

                <!-- Veteran -->
                <div class="form-group">
                    <br><label>12. Are you a veteran?</label><br>
                    <input type="radio"  id:="Yes" value="1" class="button" v-model="applicant.Veteran" required>  Yes<br>
                    <input type="radio"  id:="No" value="0" class="button" v-model="applicant.Veteran" required>  No<br>
                </div>

                <!-- CurrentlyEmployed -->
                <div class="form-group">
                    <br><label>13. Are you currently employed?</label><br>
                    <input type="radio"  id:="Yes" value="1" class="button" v-model="applicant.CurrentlyEmployed" required>  Yes<br>
                    <input type="radio"  id:="No" value="0" class="button" v-model="applicant.CurrentlyEmployed" required>  No<br>
                </div>

                <!-- DescribesYourself -->
                <!-- <div class="form-group">
                <br><label>14. How would you best describe your ethnicity?</label><br>
                    <input type="text" class="form-control" v-model="applicant.DescribesYourself" required><br>
                </div> -->

                <div class="form-group">
                <br><label>14. How would you best describe your ethnicity?</label><br>
                    <input type="radio"  id:="Asian or Pacific Islander" value="Asian or Pacific Islander" class="button" v-model="applicant.DescribesYourself" required>  Asian or Pacific Islander<br>
                    <input type="radio"  id:="Black or African American" value="Black or African American" class="button" v-model="applicant.DescribesYourself" required>  Black or African American<br>
                    <input type="radio"  id:="Hispanic or Latino" value="Hispanic or Latino" class="button" v-model="applicant.DescribesYourself" required>  Hispanic or Latino<br>
                    <input type="radio"  id:="Native American or Alaskan Native" value="Native American or Alaskan Native" class="button" v-model="applicant.DescribesYourself" required>  Native American or Alaskan Native<br>
                    <input type="radio"  id:="White or Caucasian" value="White or Caucasian" class="button" v-model="applicant.DescribesYourself" required>  White or Caucasian<br>
                    <input type="radio"  id:="Multiracial or Biracial" value="Multiracial or Biracial" class="button" v-model="applicant.DescribesYourself" required>  Multiracial or Biracial<br>   
                    <input type="radio"  id:="A race/ethnicity not listed here" value="A race/ethnicity not listed here" class="button" v-model="applicant.DescribesYourself" required>  A race/ethnicity not listed here<br>                                      
                </div>


                <button class="btn btn-danger mt-3">Update</button>


                <!-- <input type="button" onclick="alert('Hello World!')" value="Click Me!"> -->
            </form>
        </div>
    </div>
</template>

<!-- axios -->
<script>
import axios from "axios";

// data export from applicant info
export default {
    data() {
        return {
            applicant: { }
        }
    },

    // URLS to find which applicant and update the correct one
    // Forms are also handled here too
    created() {
        let apiURL = `http://localhost:8000/api/applicant_information/findone/${this.$route.params.ApplicantId}`;

        axios.get(apiURL).then((res) => {
            this.applicant = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/applicant_information/update/${this.$route.params.ApplicantId}`;

            axios.put(apiURL, this.applicant).then((res) => {
                console.log(res)
                this.$router.push('/Applicants')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
