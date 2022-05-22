<template>
    <div class="row">
        <div class="col-lg-12">
            <br>
            <br>

            <strong style="margin-left:400px; font-size: 20pt; color:Black; ">Search Projects:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchProjects" placeholder="Filter by Num. or Name" />  

            <p><router-link class="btn addProject"  to="/createProject">Add Project</router-link></p>
            <br>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="table styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:9%"> 
                <col   style="width:6%"> 
                <col   style="width:10%"> 
                <col   style="width:9%"> 
                <col   style="width:1%"> 
                <col   style="width:9%">
                <col   style="width:9%">
                <col   style="width:0%">
                <col   style="width:0%">
                <thead class="thead-dark">
                    <tr>
                        <th>Num.</th>
                        <th>Name</th>
                        <th>Budget</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>City</th>
                        <th>% Finished</th>
                        <th>Start Date</th>
                        <th >Estimated End Date</th>
                        <th >Actions</th>
                        <th >Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in filteredProjects" :key="project.project_id">
                        <td style="position: relative;">{{ project.project_number }}</td>
                        <td style="position: relative;" >{{ project.project_name }}</td>
                        <td style="position: relative;">{{ project.project_budget }}</td>
                        <td style="position: relative;">{{ project.project_status_type }}</td>
                        <td style="position: relative;">{{ project.project_type_description}}</td>
                        <td style="position: relative;">{{ project.project_location_city }}</td>
                        <td style="position: relative; text-align: right">{{ project.project_percent_complete }}</td>
                        <td style="position: relative;">{{ project.project_start_date }}</td>
                        <td style="position: relative;">{{ project. project_estimated_end_date}}</td>
                       
                        <td style="position: relative;">

                            <router-link :to="{name: 'editProject', params: { id: project.project_id}}"  class="btn one">View / Edit
                            </router-link>
                            

                           <button  @click.prevent="deleteProject(project.project_id)"  class="btn two">Delete</button>

                            
                            <router-link :to="{name: 'createPhase', params: { id: project.project_number}}"  class="btn three">Add Phase
                            </router-link>

                            
                            
                            <router-link :to="{name: 'viewPhase', params: { id: project.project_number}}"   class="btn four">View Phases
                            </router-link>

                            
                        
                        </td>
                        <td style="position: relative;" >
                        <router-link :to="{name: 'project_phase_report', params: { id: project.project_number}}"  class="btn five">Assigned <br/> Phases<br/>
                            </router-link>
                            <br>
                            <br>
                           
                            <router-link :to="{name: 'project_investor_report', params: { id:project.project_number}}"   class="btn six">Assigned <br/> Investors<br/> 
                            </router-link>

                            <br>
                            <br>

                            <router-link :to="{name: 'project_employee_report', params: { id:project.project_number}}"  class="btn seven">Assigned <br/> Employees<br/> 
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
                projects: [],
                searchProjects: ''

            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/projects';
            axios.get(apiURL).then(res => {
                this.projects = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredProjects: function(){


                return this.projects.filter((project) =>{

                    return  project.project_number.toLowerCase().match(this.searchProjects.toLowerCase())||
                            project.project_name.toLowerCase().match(this.searchProjects.toLowerCase())  
                            
                           
                    
                })
            }    
        },
        methods: {
            deleteProject(id){
                console.log(id)
                let apiURL = `http://localhost:27017/project/${id}`;
                let indexOfArrayItem = this.projects.findIndex(i => i.project_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.projects.splice(indexOfArrayItem, 1);
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
  height: 150%;
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

.addProject{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1157px; 
    margin-top: -45px;
}

.one{
   border: 2px solid black;
   margin-top: -2px;
   margin-left:-20px; 
   color:white; 
   background-color:green; 
   padding: 0px 5px;
   font-size:16px

}

.two{
   border: 2px solid black;
   margin-top: 45px;
   margin-left:-20px; 
   color:white; 
   background-color:red; 
   padding: 0px 20px;
   font-size:16px
    
}

.three{
   border: 2px solid black;
   margin-top: 91px;
   margin-left:-20px; 
   color:white; 
   background-color:rgb(0, 195, 255); 
   padding: 0px 4px;
   font-size:16px
    
}

.four{
   border: 2px solid black;
   margin-top: 137px;
   margin-left: -23px;
   margin-right:-20px;  
   color:white; 
   background-color:rgb(255, 6, 255); 
   padding: 1px 0px;
   font-size:16px


}

.five{
   border: 2px solid black;
   margin-top: -2px;
   margin-left: -4px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 5px;
   font-size:16px
}

.six{
   border: 2px solid black;
   margin-top: 10px;
   margin-left:-4px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 5px;
   font-size:16px
}

.seven{
   border: 2px solid black;
   margin-top: 20px;
   margin-left:-8px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 0px;
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
