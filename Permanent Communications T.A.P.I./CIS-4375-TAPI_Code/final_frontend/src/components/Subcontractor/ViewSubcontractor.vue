<template>
    <div class="row">
        <div class="col-lg-12">
            <br>
            <br>
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Subcontractors:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchSubcontractors" placeholder="Filter by Name, Type, or Status" /> 
        <p><router-link class="btn createSub"  to="/createSubcontractor">Add Subcontractor</router-link></p>
           <br>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:11%"> 
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:0%">
                <col   style="width:0%">
               
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Business Name</th>
                        <th>Rate/hr</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor in filteredSubcontractors" :key="subcontractor.subcontractor_id">
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_fname }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_lname }}</td>
                        
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_business_name }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_rate }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_email }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_phone}}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_type }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_status }}</td>
                        <td>
                            
                            <router-link :to="{name: 'editSubcontractor', params: { id: subcontractor.subcontractor_id}}" class="btn one"> View / Edit
                            </router-link>

                                
                            <button  @click.prevent="deleteSubcontractor(subcontractor.subcontractor_id)"  class="btn two">Delete</button>
                        

                            
                        
                        </td>

                        <td>
                            
                         <router-link :to="{name: 'subcontractor_step_report', params: { id:subcontractor.subcontractor_email}}"  class="btn four">Assigned<br /> Steps
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
                subcontractors: [],
                searchSubcontractors: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/subcontractors';
            axios.get(apiURL).then(res => {
                this.subcontractors = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredSubcontractors: function(){


                return this.subcontractors.filter((subcontractor) =>{

                    return subcontractor.subcontractor_fname.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_lname.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_type.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_status.toLowerCase().match(this.searchSubcontractors.toLowerCase()) 
                           
                    
                })
            }    
        },
        methods: {
            deleteSubcontractor(id){
                console.log(id)
                let apiURL = `http://localhost:27017/subcontractor/${id}`;
                let indexOfArrayItem = this.subcontractors.findIndex(i => i.subcontractor_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.subcontractors.splice(indexOfArrayItem, 1);
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
  height: 200%;
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

.createSub{
border: 2px solid black;
font-size:20px; 
color: White; 
background-color: #267bfa;
font-weight:bold; 
margin-left:1090px; 
margin-top: -45px;
}

.one {
   border: 2px solid black;
   margin-top: -50px;
   margin-left:-10px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
    
    
}

.two {
   border: 2px solid black;
   margin-top: -10px;
   margin-left:-10px; 
   color:white; 
   background-color:red; 
   padding: 1px 18px;
   font-size:16px
   
    
}

.three{
   border: 2px solid black;
   margin-top: 5px;
   margin-left:-15px; 
   color:white; 
   background-color:gray; 
   padding: 1px 2px;
   font-size:16px
   
    
}

.four{
   border: 2px solid black;
   margin-top: -50px;
   margin-left:-5px; 
   color:black; 
   background-color:#FFD700; 
   padding: 9px 5px;
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

