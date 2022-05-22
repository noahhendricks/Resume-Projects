<template>
    <div class="row">

      <br>
      <br>
      
        <div class="col-lg-12">
         <u class="phaseReport">Assignment of Steps Report</u>
        <br>
        <br>
       <button id = "toTop" @click="moveUp()">Scroll Up</button>
      <h2 class="reportSteps" >Project: #{{phases.project_number}} <br/> Phase: #{{phases.phase_number}} <br/> Phase Duration: {{phases.phase_estimated_duration}} week(s) 
      <br/> Phase Cost: {{phases.phase_cost}}
      </h2>
         <router-link class="btn viewPhases" to="/viewPhase">View Phases</router-link>
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:9%"> 
                <col   style="width:9%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
              
                
                <thead class="thead-dark">
                    <tr>

                        <th>Step Name</th>
                        <th>Step Status</th>
                        <th>% Finished</th>
                        <th style="text-align: left">Step Cost</th>
                        <th>Step Duration</th>
                        <th>Step Start Date</th>
                        <th>Step End Date</th>
                      
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in Steps" :key="step.step_id">
                        <td style="position: relative;" >{{ step.step_number}} </td>
                        <td style="position: relative;" >{{ step.step_status_type }}</td>
                        <td style="position: relative; text-align: right" >{{ step.step_percent_complete}}</td>               
                        <td style="position: relative; text-align: right" >{{ step.step_cost }}</td>
                        <td style="position: relative; " >{{ step.step_duration }} day(s)</td>
                        <td style="position: relative; " >{{ step.step_start_date }}</td>
                        <td style="position: relative; " >{{ step.step_end_date }}</td>
                        
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>
         
             <br>
             <br>
 
       
    </div>

  


</template>

<script>
    import axios from "axios";
    //pass data values from the cfcworker_client_activity
    export default {
        data() {
            return {
            //retrieving data from the Cfcworker_client_activities schema getting the data 
                Steps: [], 
                phases: {},
                step: {
                   
                   phase_number: this.$route.params.id 
                   
                },
                
                 
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_step_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.Steps = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/phase_report/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.phases = res.data;
            }).catch(error => {
                console.log(error)
            });

        },
        
        methods: {
            
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
  font-size: 12pt;
  font-family: sans-serif;
  width: 100%;
  height: 10%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  
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
.btn-success {
        margin-right: 10px;
}

.phaseReport{
 margin-left:450px;
  margin-top:-40px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  
  font-size: 35px;

}

.reportSteps{
  margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: left;
  font-size: 25px;

}
.viewPhases{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1174px; 
    margin-top: -110px;
    padding: 9px 1px;
   

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