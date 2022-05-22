<template>
    <div class="row">
        
        <div class="col-lg-12">
        <br>
        <br>
        <strong style="margin-left:350px; font-size: 20pt; color:Black; "  >Search Assigned Employee:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="search" placeholder="Filter by Project Num. or Name" />
        <p><router-link class="btn createEmployeeAssign"  to="/createEmployeeAssigned">Create Employee Assignment</router-link></p>
         
           <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:20%"> 
                <col   style="width:30%"> 
                <col   style="width:40%"> 
                <col   style="width:30%"> 
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>Project Num.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee Email</th>
                        <th>Assigned Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee_assigned in filteredEmployeesAssigned" :key="employee_assigned.employee_assigned_id">
                        <td style="vertical-align:top">{{ employee_assigned.project_number }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_firstname }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_lastname }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_email }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_assigned_date}}</td>
                        <td>
                            <router-link :to="{name: 'editEmployeeAssigned', params: { id: employee_assigned.employee_assigned_id}}" class="btn one">View / Edit
                            </router-link>
                            <button @click.prevent="deleteemployeeAssigned(employee_assigned.employee_assigned_id)" class="btn two">Delete</button>

                            
                            
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
                employee_assigneds: [] ,
                search: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/employee_assigned';
            axios.get(apiURL).then(res => {
                this.employee_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredEmployeesAssigned: function(){


                return this.employee_assigneds.filter((employee_assigned) =>{

                    return employee_assigned.project_number.match(this.search) ||
                           employee_assigned.employee_lastname.toLowerCase().match(this.search.toLowerCase()) ||
                           employee_assigned.employee_firstname.toLowerCase().match(this.search.toLowerCase()) 
                    
                })
            }    
        },
        methods: {
            deleteemployeeAssigned(id){
                console.log(id)
                let apiURL = `http://localhost:27017/employee_assigned/${id}`;
                let indexOfArrayItem = this.employee_assigneds.findIndex(i => i.employee_assigned_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.employee_assigneds.splice(indexOfArrayItem, 1);
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
  font-size: 12pt;
  font-family: sans-serif;
  width: 100%;
  height:10%;
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
position: -webkit-static;
    position: static;
    margin-right: 0px;

}

.createEmployeeAssign{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    padding:6px 6px;
    margin-top: -75px;
    margin-left: 1004px;
   
}

.one{
   border: 2px solid black;
   margin-top: -10px;
   margin-left:0px; 
   color:white; 
   background-color:green; 
   padding: 0px 7px;
   font-size:16px

}

.two{
   border: 2px solid black;
   margin-top: 10px;
   margin-left:0px; 
   color:white; 
   background-color:red; 
   padding: 0px 22px;
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
