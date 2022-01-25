<!-- viewApplicants.vue -->

<!--
<template>
        <div>
                <p>This is where the applicant table will go with the edit, delete, and history buttons will go.</p>
        </div>
</template>
-->

<!-- This is where we can see all applicants that have been created through the webpage -->
<!-- An applicant would fillout their required form and it would be viewable here -->
<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped" :key="componentKey">
                <thead class="thead-dark">
                    <tr>
                        <!-- Data displayed for user view -->
                        <th>Applicant ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone number</th>
                        <th>Zipcode</th>
                        <th>History</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <!-- All applicant info being called from backend -->
                    <tr v-for="applicant in Applicant_Information" :key="applicant.ApplicantId">
                        <td>{{ applicant.ApplicantId }}</td>
                        <td>{{ applicant.FirstName }}</td>
                        <td>{{ applicant.LastName }}</td>
                        <td>{{ applicant.PhoneNumber }}</td>
                        <td>{{ applicant.ZipCode }}</td>
                        <td> 
                            <!-- history, edit, and delete button functionality -->
                        <router-link :to="{name:'history', params:{ApplicantId: applicant.ApplicantId }}" class="btn btn-success ">History</router-link>
                        </td>
                        <td>
                                
                        <router-link :to="{name:'edit', params:{ApplicantId: applicant.ApplicantId }}" class="btn btn-warning ">Edit</router-link>
                        
                        <button @click.prevent="deleteApplicant(applicant.ApplicantId)" class="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<!-- axios -->
<script>
    import axios from "axios";

    // data export
    export default {
        data() {
            return {
                Applicant_Information: [],
                componentKey: 0
            }
        },
        // this is using created hook 

        // URLS used to gather all applicants and their info to display
        created() {
            let apiURL = 'http://localhost:8000/api/applicant_information/findall';
            axios.get(apiURL).then(res => {
                this.Applicant_Information = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
                forceRerender() {
                this.componentKey += 1
                },

            // delete URL for applicant info for a particular person
            deleteApplicant(id){
                console.log(id)
                let apiURL = `http://localhost:8000/api/applicant_information/delete`
                let indexOfArrayItem = this.Applicant_Information.findIndex(i => i.ApplicantId === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL,{headers: {},data:{ApplicantId: id}}).then(() => 
                    {
                            this.Applicant_Information.splice(indexOfArrayItem, 1);
                            //this.forceRerender()
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>