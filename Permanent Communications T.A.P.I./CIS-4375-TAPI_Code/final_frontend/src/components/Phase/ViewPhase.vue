<template>
    <div class="row">
        <div class="col-lg-12">
            <br>
            <br>
            <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Phases:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchPhases" placeholder="Filter by Project Num." /> 
            <br>
            <br>

            <p><router-link class="btn createProject"  to="/viewProject">View Projects</router-link></p>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:0%"> 
                <col   style="width:9%"> 
                <col   style="width:9%"> 
                <col   style="width:9%"> 
                <col   style="width:1%"> 
                <col   style="width:9%"> 
                <col   style="width:9%"> 
                <col   style="width:1%"> 
                 
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num.</th>
                        <th>Phase</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Estimated Duration</th>
                        <th>% Finished</th>
                        <th>Start Date</th>
                        <th>Estimated End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="phase in filteredPhases" :key="phase.phase_id">
                        <td style="vertical-align:top">{{ phase.project_number }}</td>
                        <td style="vertical-align:top">{{ phase.phase_number }}</td>
                        <td style="vertical-align:top; text-align: right">{{ phase.phase_cost }}</td>
                        <td style="vertical-align:top">{{ phase.phase_status_type}}</td>
                         <td style="vertical-align:top; ">{{ phase.phase_estimated_duration}} week(s)</td>
                        <td style="vertical-align:top; text-align: right">{{ phase.phase_percent_complete}}</td>
                        <td style="vertical-align:top">{{ phase.phase_start_date }}</td>
                        <td style="vertical-align:top">{{ phase.phase_estimated_end_date}}</td>
                        <td>
                            <router-link :to="{name: 'editPhase', params: { id: phase.phase_id}}"  class="btn one">View / Edit
                            </router-link>
                           

                        <button @click.prevent="deletePhase(phase.phase_id)" class="btn two" >Delete</button>

                            
                            <router-link :to="{name: 'createStep', params: { id: phase.phase_number}}" class="btn three">Add Step
                            </router-link>

                            

                            <router-link :to="{name: 'viewStep', params: { id: phase.phase_number}}" class="btn four">View Steps
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
                phases: [],
                searchPhases:''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/phases';
            axios.get(apiURL).then(res => {
                this.phases = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredPhases: function(){


                return this.phases.filter((phase) =>{

                    return phase.project_number.toLowerCase().match(this.searchPhases.toLowerCase()) 
                           
                            
                           
                    
                })
            }    
        },
        methods: {
            deletePhase(id){
                console.log(id)
                let apiURL = `http://localhost:27017/phase/${id}`;
                let indexOfArrayItem = this.phases.findIndex(i => i.phase_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.phases.splice(indexOfArrayItem, 1);
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
  border-collapse: collapse;;
  font-size: 12pt;
  font-family: sans-serif;
  width: 100%;
  height: 270%;
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

.createProject{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1140px; 
    margin-top: -70px;

}

.one{
   border: 2px solid black;
   margin-top: -70px;
   margin-left:-15px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px

}

.two{
   border: 2px solid black;
   margin-top: -35px;
   margin-left:-15px; 
   color:white; 
   background-color:red; 
   padding: 1px 18px;
   font-size:16px

}

.three{
   border: 2px solid black;
   margin-top: 0px;
   margin-left:-15px; 
   color:white; 
   background-color:rgb(0, 195, 255); 
   padding: 1px 8px;
   font-size:16px
}

.four{
   border: 2px solid black;
   margin-top: 35px;
   margin-left:-15px; 
   color:white; 
   background-color:rgb(255, 6, 255); 
   padding: 1px 1px;
   font-size:16px


}

.five{
    border: 2px solid black;
   margin-top: -70px;
   margin-left:-10px; 
   color:black; 
   background-color:#FFD700; 
   padding: 42px 4px;
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
