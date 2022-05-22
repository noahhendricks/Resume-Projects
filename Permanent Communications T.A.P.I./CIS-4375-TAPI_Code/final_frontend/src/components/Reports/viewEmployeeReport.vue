<template>
    <div class="row">
         <br>
        <br>
         
        <div class="col-lg-12">
          <u class="employeeTitle" >Administered  Projects' Report</u>
          <br>
          <br>
          <h2 class="employeeReport">
          Employee Type: {{employees.employee_status_type}}
         <br/>
          Employee Title: {{employees.employee_title_description}}
         <br/> 
         First Name: {{employees.employee_first_name}} 
         <br/>  
         Last Name: {{employees.employee_last_name}} 
         <br/>
          Employee Email: {{employees.employee_email}}
         </h2>
          <button id = "toTop" @click="moveUp()">Scroll Up</button>
          <router-link class="btn viewEmployee"  to="/viewEmployee">View Employees</router-link>
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Project Number</th>
                       
                        <th>Assigned Date</th>
                        
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee_assigned in employee_assigneds" :key="employee_assigned.employee_assigned_id">
                        <td>{{ employee_assigned.project_number}}</td>
                        
                        <td>{{ employee_assigned.employee_assigned_date}}</td>
                        
                        
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
                employee_assigneds: [], 
                employees:{},
                employee_assigned: {
    
                   employee_email: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/employee_project_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.employee_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
           let apiURL1 = `http://localhost:27017/employee_project/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.employees = res.data;
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

.employeeTitle{
  margin-left:450px;
  margin-top:-40px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  font-size: 35px;

}

.employeeReport{
  margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: left;
  font-size: 25px;

}

.viewEmployee{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1115px; 
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