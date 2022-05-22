<template>
    <div class="row">

      <br>
      <br>
         
         
        <div class="col-lg-12">

          <div class="reportName" > <u>Project Jobs Report</u> </div>
          
          <br>

          <h2 class="stepReport">
          Subcontractor Status: {{subcontractors.subcontractor_status}}
         <br/>
          Subcontractor Title: {{subcontractors.subcontractor_type}}
         <br/> 
          Business Name: {{subcontractors.subcontractor_business_name}} 
         <br/>  
         First Name: {{subcontractors.subcontractor_fname}} 
         <br/>
         Last Name: {{subcontractors.subcontractor_lname}}
         <br/>
         Email: {{subcontractors.subcontractor_email}}
         </h2>
          <button id = "toTop" @click="moveUp()">Scroll Up</button>
          <router-link class="btn viewSubcontractor"  to="/viewSubcontractor">View Subcontractors</router-link>
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Project Number</th>
                        <th>Phase</th>
                        <th>Step</th>
                        <th>Assigned Date</th>
                        <th>Subcontractor <br/> Fee</th>
                        <th>Subcontractor Paid</th>
                        <th>Step Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in steps" :key="step.step_id">
                        <td>{{ step.project_number}}</td>
                        <td>{{ step.phase_number}}</td>
                        <td>{{ step.step_number}}</td>
                        <td>{{ step.subcontractor_assigned_date}}</td>
                        <td>{{ step.subcontractor_fee}}</td>
                        <td>{{ step.subcontractor_paid}}</td>
                        <td>{{ step.step_status_type}}</td>
                       
                        
                  
                    </tr>
                </tbody>
            </table>
        </div>


    </div>

    
    
  


</template>

<script>
    import axios from "axios";
    //pass data values from the cfcworker_client_activity
    export default {
        data() {
            return {
            //retrieving data from the Cfcworker_client_activities schema getting the data 
                steps: [], 
                subcontractors:{},
                step: {
    
                   subcontractor_email: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/subcontractor_step_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.steps = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
           let apiURL1 = `http://localhost:27017/subcontractor_num/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.subcontractors = res.data;
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
.btn-success {
        margin-right: 10px;
}




.stepReport{
  margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: left;
  font-size: 25px;
}

.reportName{
 margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: center;
  font-size: 35px;
  ;
}
.viewSubcontractor{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1073px; 
    margin-top: -110px;

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