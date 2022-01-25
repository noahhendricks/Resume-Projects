<!-- addRegister.vue -->

<!-- Adding an applicant to an event takes place here -->
<!-- we register our applicants to each event through our history collection (backend) -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Register an Applicant to an Event</h3>
            <form @submit.prevent="handleSubmitForm">

                <!-- Applicant ID Input -->
                <div class="form-group">
                    <label>1. Applicant ID</label>
                    <input type="number" class="form-control" v-model="history.Applicant_ID" required>
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            Use the same Applicant ID you were assigned from the Applicant Creation.
                    </small><br>
                </div>
                <div class="form-group">

                    <!-- Event ID input -->
                    <br><label>2. Event ID</label>
                    <input type="number" class="form-control" v-model="history.Event_ID" required>
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            Use the exact Event ID you want to sign up for.
                    </small><br>
                </div>

                    <!-- error block -->
                 <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }} </li>
                    </ul>
                </p>
                <button class="btn btn-danger mt-3" >Create</button>
                
            </form>
        </div>
    </div>
</template>

<!-- axios call -->
<script>
    import axios from "axios";

    // data export of history collection
    export default {
        data() {
            return {
                errors: [],
                history: {
                   Applicant_ID: '',
                   Event_ID: '',

                },
                
            }
        },

// url used from backend to add an applicant to an event
 methods: {
            handleSubmitForm() {
                //first validation
                this.errors = [];
    
                let apiURL = 'http://localhost:8000/api/history/create';
                
                axios.post(apiURL, this.history).then(() => {
                    //changing the view to the list
                  this.$router.push('/Register')
                  this.History = {
                    Applicant_ID: '',
                    Event_ID: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in form submission. " + error.response.data);
                    
                });
            }
        }
           
    }
</script>


       