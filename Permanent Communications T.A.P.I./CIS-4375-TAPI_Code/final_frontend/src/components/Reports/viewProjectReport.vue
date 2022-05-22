<template>
    <div class="row">
      
      <br>
      <br>
         
        <div class="col-lg-12">
           <u class="projectReport">Assignment of Investors Report</u>
      <br>
      <br>
          <h2  class="reportInvestor" > Project #{{projects.project_number}}:  {{projects.project_name}} <br/>  Project Duration: {{projects.project_estimated_duration}} Months  <br/> Budget: {{projects.project_budget}} </h2>
          <router-link class="btn viewProjects" to="/viewProject">View Projects</router-link>
           <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">

                <col    style="width:20%"> 
                <col   style="width:22%"> 
                <col   style="width:0%"> 
                <col    style="width:0%"> 
                <col   style="width:1%"> 
                <col   style="width:9%"> 
               
                
                <thead class="thead-dark">
                    <tr>
                      
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th style="text-align:right" >Investment Amount</th>
                        <th>Investor Paid</th>
                        <th>Investor Assigned Date</th>
                       
                       
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investor_assigned in investor_assigneds" :key="investor_assigned.investor_assigned_id">
                      
                        <td style="position: relative; text-align:left" >{{ investor_assigned.investor_assign_firstname }}</td>
                        <td style="position: relative; text-align:left" >{{ investor_assigned.investor_assign_lastname }}</td>
                        <td style="position: relative; text-align:left" >{{ investor_assigned.investor_email }}</td>
                        <td style="position: relative; text-align:right" >{{ investor_assigned.investor_assigned_cost }}</td>
                        <td style="position: relative; text-align:left " >{{ investor_assigned.investor_assigned_paid}}</td>
                        <td style="position: relative; text-align:left" >{{ investor_assigned.investor_assigned_date }}</td>
                  
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
                investor_assigneds: [], 
                projects:{},
                investor_assigned: {
    
                   project_number: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_investor_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.investor_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
    
    
            // this is using created hook 
           let apiURL1 = `http://localhost:27017/project_num/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
               this.projects = res.data;
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

.projectReport{
 margin-left:450px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: center;
  font-size: 35px;

}

.reportInvestor{
  margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: left;
  font-size: 25px;
}

.viewProjects{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1140px; 
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