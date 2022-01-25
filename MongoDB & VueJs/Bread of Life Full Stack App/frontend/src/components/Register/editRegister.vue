<!-- editRegister.vue -->

<!-- Editing an applicant at an event takes place here -->
<!--  Managers can come in if there was a mistake or applicants can register for another event here  -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Registry</h3>
            <form @submit.prevent="handleUpdateForm">

                <!-- Applicant ID Input -->
                <div class="form-group">
                    <label>1. Applicant ID</label>
                    <input type="number" class="form-control" v-model="history.Applicant_ID" required><br>
                </div>

                <!-- Event ID input -->
                <div class="form-group">
                    <label>2. Event ID</label>
                    <input type="number" class="form-control" v-model="history.Event_ID" required><br>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

                <!-- <input type="button" onclick="alert('Hello World!')" value="Click Me!"> -->
            </form>
        </div>
    </div>
</template>

<!-- Axios call -->
<script>
import axios from "axios";

 // data export of history collection
export default {
    data() {
        return {
            history: { }
        }
    },
    // Url to find which applicant's history you are looking for 
    created() {
        let apiURL = `http://localhost:8000/api/history/findone/${this.$route.params.History_ID}`;

        axios.get(apiURL).then((res) => {
            this.history = res.data;
        })
    },

    // Url to update an applicant's history form
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/history/update/${this.$route.params.History_ID}`;

            axios.put(apiURL, this.history).then((res) => {
                console.log(res)
                this.$router.push('/Register')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
