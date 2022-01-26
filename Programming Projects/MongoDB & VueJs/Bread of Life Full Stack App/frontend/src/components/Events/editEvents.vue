<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!--here is the crud form for updating. we decided that only the date should be updated, otherwise it sounded like a new event should be added and the old deleted-->
            <h3 class="text-center">Update Event Date</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" class="form-control" v-model="event.Date" required>
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="Location" class="form-control" v-model="Location.Name" required>
                </div>
                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            event: {},
            Location: [{"Name": ""}],
        }
    },
    created() {
        let apiURL = `http://localhost:8000/api/events/findone/${this.$route.params.EventID}`;
        axios.get(apiURL).then((res) => {
            this.event = res.data;
        })
    },
    methods: {
        //here the dates need formatting again
        formatDate(date) {
                let protoDate = new Date(date)
                //return moment(date).format("MMMM DD YYYY")
                return protoDate.toDateString()
            },
            //here is the function to send the data on click of update
        handleUpdateForm() {

                let Location = {Name: this.Location.Name}
                this.event.Location[0] = Location
                let apiURL = `http://localhost:8000/api/events/update/${this.$route.params.EventID}`;

                axios.put(apiURL, this.event).then((res) => {
                console.log(res)
                this.$router.push('/Events')
            }).catch(error => {
                console.log(error)
            })
    }
    }
}
</script>