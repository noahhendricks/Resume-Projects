<template>
    <div class="row">
        <div class="col-md-12">
            <!--this is our events table with selected parts of the document. We decided we shouldnt show everything but left key details. -->
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Event Type</th>
                        <!--these are our actions to do crud-->
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in Events" :key="event.EventID">
                        <td>{{event.EventID}}</td>
                        <td>{{formatDate(event.Date)}}</td>
                        <!--here i used v-for to loop through the object and then again in its nested object -->
                        <td>
                            <p v-for="item in event.Location" :key="item.Name">
                                {{item.Name}} {{item.Zipcode}}
                            </p>
                        </td>
                        <td>
                            <ul> 
                                <li v-for="type in event.Type" :key="type._id">
                                    {{type.Event_Type_Desc}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <router-link :to="{name: 'EditEvents', params: {EventID: event.EventID}}" class="btn btn-warning ">Edit
                            </router-link>
                        <button @click.prevent="deleteEvent(event.EventID)" class="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Events: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:8000/api/events/findall';
            axios.get(apiURL).then(res => {
                this.Events = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            //date formatting is needed to make readable
            formatDate(date) {
                let protoDate = new Date(date)
                //return moment(date).format("MMMM DD YYYY")
                return protoDate.toDateString()
            },
           //here is our crud delete function
            deleteEvent(id){
                console.log(id)
                let apiURL = `http://localhost:8000/api/events/delete`
                let indexOfArrayItem = this.Events.findIndex(i => i.EventID === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL,{headers: {},data:{EventID: id}}).then(() => {
                        this.Events.splice(indexOfArrayItem, 1);
                           // this.forceRerender()
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
