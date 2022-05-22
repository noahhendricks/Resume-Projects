<template>
    <div class="row">
        <div class="col-lg-12">
            <br>
            <br>
             <strong style="margin-left:400px; font-size: 20pt; color:Black; ">Search Steps:</strong>
            <input style="margin-left:5px;  font-size: 12pt;"  size="30" type="text" v-model="searchSteps" placeholder="Filter by Project Num." /> 
           <br>
           <br>
            <p><router-link class="btn createPhases"  to="/viewPhase">View Phases</router-link></p>
             <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:12%"> 
                <col   style="width:20%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:1%">
                 
              
                
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num.</th>
                        <th>Phase</th>
                        <th>Step</th>
                        <th>Subcontractor<br/> Assigned</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>% Finished</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in filteredSteps" :key="step.step_id">
                        <td style="vertical-align:top">{{ step.project_number }}</td>
                        <td style="vertical-align:top">{{ step.phase_number }}</td>
                        <td style="vertical-align:top">{{ step.step_number }}</td>
                        <td style="vertical-align:top">{{ step.subcontractor_assign }}</td>
                        <td style="vertical-align:top">{{ step.step_cost }}</td>
                        <td style="vertical-align:top">{{ step.step_status_type}}</td>
                        <td style="vertical-align:top; text-align: right">{{ step.step_percent_complete}}</td>
                        <td style="vertical-align:top">{{ step.step_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editStep', params: { id: step.step_id}}"  class="btn one">View / Edit
                            </router-link>

                        <button @click.prevent="deleteStep(step.step_id)" class="btn two">Delete</button>
                            
                            <router-link :to="{name: 'createTask', params: { id: step.step_number}}"  class="btn three">Add Task
                            </router-link>

                             <router-link :to="{name: 'viewTask', params: { id: step.step_number}}"   class="btn four">View Tasks
                            </router-link>      
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
                steps: [],
                searchSteps: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/steps';
            axios.get(apiURL).then(res => {
                this.steps = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredSteps: function(){


                return this.steps.filter((step) =>{

                    return step.project_number.toLowerCase().match(this.searchSteps.toLowerCase()) 
                          
                    
                })
            }    
        },
        methods: {
            deleteStep(id){
                console.log(id)
                let apiURL = `http://localhost:27017/step/${id}`;
                let indexOfArrayItem = this.steps.findIndex(i => i.step_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.steps.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
             moveUp(){
           window.scrollTo(0,0);
      }
        }
    }
</script>



<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  height: 340%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
}
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  z-index: 2;
  background-color: #267bfa;
  color: #ffffff;
}

.styled-table th::after{
    content: '';
    width:100%;
    height:2px;
    position:absolute;
    bottom: 0;
    left: 0;
    background: black;

}

.btn{
    position: -webkit-absolute;
    position: absolute;
    margin-right: 0px;

}

.createPhases{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1153px; 
    margin-top: -65px;

}

.one{
border: 2px solid black;
   margin-top: -75px;
   margin-left:-22px; 
   color:white; 
   background-color:green; 
   padding: 1px 2px;
   font-size:16px
}

.two{
border: 2px solid black;
   margin-top: -40px;
   margin-left:-22px; 
   color:white; 
   background-color:red; 
   padding: 1px 17px;
   font-size:16px
}

.three{
 border: 2px solid black;
   margin-top: -5px;
   margin-left:-22px; 
   color:white; 
   background-color:rgb(0, 195, 255); 
   padding: 1px 7px;
   font-size:16px
}
.four{
border: 2px solid black;
   margin-top: 30px;
   margin-left:-22px; 
   color:white; 
   background-color:rgb(255, 6, 255); 
   padding: 1px 0px;
   font-size:16px
}
.five{
   border: 2px solid black;
   margin-top: -75px;
   margin-left:-29px; 
   color:black; 
   background-color:#FFD700; 
   padding: 42px 21px;
   font-size:16px

}


.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #267bfa;
}
.ic {
  width: 64px;
  height: 64px;
}
.ic2 {
  width: 64px;
  height: 64px;
}
.ic3 {
  width: 64px;
  height: 64px;
}
#toTop {
  position: fixed;
  border-radius: 20%;
  background-color: #267bfa;  
  width: 5%;
  height: 8%;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: 18px;
}
</style>