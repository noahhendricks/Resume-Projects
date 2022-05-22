<template>
    <div class="row">

      <br>
      <br>
        <div class="col-lg-12">
          <u class="subcontractorReport" >Assignment of Subcontractors Report</u>
          <br>
          <br>
          <h2 class="stepReport">
         Project #{{steps.project_number}}
         <br/>
          Phase Name: #{{steps.phase_number}}
         <br/> Step Name: #{{steps.step_number}} 
         <br/>  
         Step Duration: {{steps.step_duration}} day(s)
         <br/>
         Step Cost: {{steps.step_cost}}
         </h2>
          <button id = "toTop" @click="moveUp()">Scroll Up</button>
          <router-link class="btn viewSteps"  to="/viewStep">View Steps</router-link>
            <table class="styled-table">

                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:1%"> 
                <col   style="width:1%"> 

                <thead class="thead-dark">
                    <tr>
                        <th>Subcontractor <br/> Type</th>
                        <th>Subcontractor <br/> First Name</th>
                        <th>Subcontractor <br/>Last Name</th>
                        <th>Subcontractor <br/> Email</th>
                        <th style="text-align: right" >Subcontractor<br/> Fee</th>
                        <th>Subcontractor <br/>  Assigned Date</th>
                        <th>Subcontractor <br/>Paid</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor in subcontractors" :key="subcontractor.subcontractor_email">
                        <td>{{ subcontractor.subcontractor_type}}</td>
                        <td>{{ subcontractor.subcontractor_fname}}</td>
                        <td>{{ subcontractor.subcontractor_lname}}</td>
                        <td>{{ subcontractor.subcontractor_email}}</td>
                        <td style="text-align: right" >{{ steps.subcontractor_fee}}</td>
                        <td>{{ steps.subcontractor_assigned_date}}</td>
                        <td>{{ steps.subcontractor_paid}}</td>
                        
                        
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
                subcontractors: [], 
                steps:{},
                subcontractor: {
    
                   subcontractor_email: this.$route.params.id
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/step_subcontractor_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.subcontractors = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
           let apiURL1 = `http://localhost:27017/step_num/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.steps = res.data;
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
.viewSteps{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1186px; 
    margin-top: -110px;
    padding: 9px 1px;

}


.subcontractorReport{

margin-left:450px;
  margin-top:-40px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  
  font-size: 35px;

}

.stepReport{
 margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: left;
  font-size: 25px;

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