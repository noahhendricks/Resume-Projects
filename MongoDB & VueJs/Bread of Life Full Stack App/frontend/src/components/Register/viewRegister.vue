<!-- viewRegister.vue -->

<!-- Viewing and deleting an applicant at an event takes place here -->
<!-- This is where you can see our applicants will register for events! -->
<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped" :key="componentKey">
                <thead class="thead-dark">

                    <!-- Displayed values -->
                    <tr>
                        <th>Applicant ID</th>
                        <th>Event ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Allows for viewable data from the backend history collection to be seen -->
                    <tr v-for="history in History" :key="history.History_ID">
                        <!--<td>{{ history.History_ID }}</td>-->
                        <td>{{ history.Applicant_ID }}</td>
                        <td>{{ history.Event_ID }}</td>
                        <td> 

                        <!-- Edit and delete buttons with full functionality -->     
                        <router-link :to="{name:'editH', params:{History_ID: history.History_ID }}" class="btn btn-warning ">Edit</router-link>
                        
                        <button @click.prevent="deleteHistory(history.History_ID)" class="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<!-- Axios import -->
<script>
    import axios from "axios";

    // History collection data
    export default {
        data() {
            return {
                History: [],
                componentKey: 0
            }
        },
        // this is using created hook 
        // URL to view all applicants who have registered for an event
        created() {
            let apiURL = 'http://localhost:8000/api/history/findall';
            axios.get(apiURL).then(res => {
                this.History = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        // page data rendered
        methods: {
                forceRerender() {
                this.componentKey += 1
                },
            
            // delete function and URL for full functionality
            deleteHistory(id){
                console.log(id)
                let apiURL = `http://localhost:8000/api/history/delete`
                let indexOfArrayItem = this.History.findIndex(i => i.History_ID === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL,{headers: {},data:{History_ID: id}}).then(() => 
                    {
                            this.History.splice(indexOfArrayItem, 1);
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