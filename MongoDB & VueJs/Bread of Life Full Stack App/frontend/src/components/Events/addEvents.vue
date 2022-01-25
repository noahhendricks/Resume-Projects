<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- here is the create crud ability. it is present in a html form-->
            <h3 class="text-center">Create Event</h3>
            <form @submit.prevent="handleSubmitForm" >
                <div class="form-group">
                    <label>Event Type</label>
                    <input type="text" class="form-control" v-model="Event_Types.Event_Type_Desc" required>
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="Location" class="form-control" v-model="Location.Name" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="Date" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$" v-model="events.Date"  
                    placeholder="mm/dd/yyyy" aria-describedby="phoneHelpBlock" required>
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            10 digit standard date should be entered with slashes
                    </small>
                </div>
                <button class="btn btn-danger mt-3">Create</button>

            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import mongoose from "mongoose"
    export default {
        data() {
            return {
                errors: [],
                //mongoose object ids were needed as mongoose would not parse a number to an id
                Event_Types: [{"Event_TypeID": mongoose.Types.ObjectId('56cb91bdc3464f14678934ca'),
                                "Event_Type_Desc": ""}],
                Location: [{"Name": ""}],
                events: {
                    EventID: '',
                    //Type: [{Event_TypeID: mongoose.Types.ObjectId('56cb91bdc3464f14678934ca') , Event_Type_Desc: ""},],
                    Type: [Object],
                    Location: [],
                    Date: Date
                },
            }
        },

        methods: {
            handleSubmitForm() {
                //here is where I had to create objects to insert the data into and then insert that object in the array that was then sent
                //to the backend via api.
                this.errors = [];
                let Event_Types = {Event_TypeID: mongoose.Types.ObjectId('56cb91bdc3464f14678934ca'),
                                   Event_Type_Desc: this.Event_Types.Event_Type_Desc}
                this.events.Type[0] = Event_Types
                let Location = {Name: this.Location.Name}
                this.events.Location[0] = Location
                let apiURL = 'http://localhost:8000/api/events/create';
                axios.post(apiURL, this.events).then(() => {
                    //changing the view to the list
                  this.$router.push('/Events')
                  }
                ).catch((error) => {
                    this.errors.push("Error in form submission. " + error);
                    
                });
            }
        }
           
    }
</script>

