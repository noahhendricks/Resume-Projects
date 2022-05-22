<template>
    <div class="row">
        <div class="col-lg-12">
            <br>
            <br>
        <strong style="margin-left:240px; font-size: 20pt; color:Black; "  >Search Subcontractors Assigned:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="search" placeholder="ex: SUBID or STEPID or Subcontractor Paid " />
         <p><router-link class="btn createSubcontractorAssign"  to="/createSubcontractorAssigned">Create Subcontractor Assignment</router-link></p>
           <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:12%"> 
                <col   style="width:0%"> 
                <col   style="width:5%"> 
                 
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>Project Number</th>
                        <th>Subcontractor Assigned Date</th>
                        <th>Subcontractor Cost</th>
                        <th>Subcontractor Paid</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor_assigned in filteredSubcontractorsAssigned" :key="subcontractor_assigned.subcontractor_assigned_id">
                        <td style="vertical-align:top">{{ subcontractor_assigned.project_number }}</td>
                        <td style="vertical-align:top">{{ subcontractor_assigned.subcontractor_assigned_date }}</td>
                        <td style="vertical-align:top">{{ subcontractor_assigned.subcontractor_assigned_cost }}</td>
                        <td style="vertical-align:top">{{ subcontractor_assigned.subcontractor_assigned_paid}}</td>
                        <td>
                            <router-link :to="{name: 'editSubcontractorAssigned', params: { id: subcontractor_assigned.subcontractor_assigned_id}}"  class="btn one">View / Edit
                            </router-link>
                            <br>
                            <br>
                            <button @click.prevent="deleteSubcontractorAssigned(subcontractor_assigned.subcontractor_assigned_id)"  class="btn two">Delete</button>

                            
                            
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
                subcontractor_assigneds: [] ,
                search: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/subcontractor_assigned';
            axios.get(apiURL).then(res => {
                this.subcontractor_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredSubcontractorsAssigned: function(){


                return this.subcontractor_assigneds.filter((subcontractor_assigned) =>{

                    return subcontractor_assigned.project_number.match(this.search) ||
                           subcontractor_assigned.subcontractor_assigned_paid.toLowerCase().match(this.search.toLowerCase()) 
                    
                })
            }    
        },
        methods: {
            deleteSubcontractorAssigned(id){
                console.log(id)
                let apiURL = `http://localhost:27017/subcontractor_assigned/${id}`;
                let indexOfArrayItem = this.subcontractor_assigneds.findIndex(i => i.subcontractor_assigned_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.subcontractor_assigneds.splice(indexOfArrayItem, 1);
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
  height: 90%;
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

.createSubcontractorAssign{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:950px; 
    margin-top: -40px;

}

.one{
border: 2px solid black;
   margin-top: -20px;
   margin-left:-18px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
}

.two{
border: 2px solid black;
   margin-top: -30px;
   margin-left:-18px; 
   color:white; 
   background-color:red; 
   padding: 1px 18px;
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