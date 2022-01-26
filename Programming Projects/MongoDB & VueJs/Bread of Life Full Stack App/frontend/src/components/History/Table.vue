<!-- Table.vue -->

<!-- This page allows for the histories of each applicant to be counted on how many times they use this app
    and calculates and displays it through a table format on the webpage
    -->
<template>
<div class="row">
        <div class="col-md-12">
            <table class="table table-striped" :key="componentKey">
                <thead class="thead-dark">
                    <tr>
                        <!-- 3 columns shown on webpage -->
                        <th>History ID</th>
                        <th>Applicant ID</th>
                        <th>Event ID</th>
                    </tr>
                </thead>
                <tbody>

                    <!-- Allows history collection to display it's data from backend to frontend through the applicant id -->
                    <tr v-for="history in History" :key="history.Applicant_ID">
                        <td>{{ history.History_ID }}</td>
                        <td>{{ history.Applicant_ID }}</td>
                        <td>{{ history.Event_ID }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

</div>

</template>

<!-- axios import -->
<script>
    import axios from "axios";

    // exports data
    export default {
        data() {
            return {
                History: [],
                componentKey: 0
            }
        },
        // this is using created hook 

        // url used from backend to find the target applicant id and display their history totals
        created() {
            let apiURL = `http://localhost:8000/api/history/find/${this.$route.params.ApplicantId}`;
            axios.get(apiURL).then(res => {
                this.History = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        // renders the page
        methods: {
                forceRerender() {
                this.componentKey += 1
                },

                
            
        }
    }
</script>


<!-- success button element -->
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>