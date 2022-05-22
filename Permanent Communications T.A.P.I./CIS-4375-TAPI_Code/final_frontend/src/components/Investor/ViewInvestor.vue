<template>
    <div class="row">
        
        <div class="col-lg-12">
    
        <br>
        <br>

        <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Investors:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="search" placeholder="Filter by Name, Type, or Status" />

<p><router-link class="btn createInvestor"  to="/createInvestor">Add Investor</router-link></p>
          
          <br>
           <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:1%">
                <col   style="width:7%">
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Business Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investor in filteredInvestors" :key="investor.investor_iD">
                        <td style="vertical-align:top">{{ investor.investor_fname }}</td>
                        <td style="vertical-align:top">{{ investor.investor_lname }}</td>
                        <td style="vertical-align:top">{{ investor.investor_detail }}</td>
                        <td style="vertical-align:top">{{ investor.investor_email }}</td>
                        <td style="vertical-align:top">{{ investor.investor_phone }}</td>
                        <td style="vertical-align:top">{{ investor.investor_type }}</td>
                        <td style="vertical-align:top">{{ investor.investor_status}}</td>
                        <td>
                            <router-link :to="{name: 'editInvestor', params: { id: investor.investor_iD}}" class="btn one">View / Edit
                            </router-link>


                            <button @click.prevent="deleteInvestor(investor.investor_iD)" class="btn two">Delete</button>

                        
                             <router-link :to="{name: 'createInvestorAssigned', params: { id: investor.investor_email}}"  class="btn three">Assign<br/> Investor
                            </router-link>

                         
                            
                        </td>
                        <td>
                             <router-link :to="{name: 'investor_project_report', params: { id: investor.investor_email}}"  class="btn four">Assigned<br />Projects
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
                investors: [] ,
                search: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/investors';
            axios.get(apiURL).then(res => {
                this.investors = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredInvestors: function(){


                return this.investors.filter((investor) =>{

                    return investor.investor_lname.toLowerCase().match(this.search.toLowerCase()) ||
                           investor.investor_fname.toLowerCase().match(this.search.toLowerCase()) ||
                           investor.investor_status.toLowerCase().match(this.search.toLowerCase())||
                           investor.investor_type.toLowerCase().match(this.search.toLowerCase())  ||
                           investor.investor_detail.toLowerCase().match(this.search.toLowerCase())
                    
                })
            }    
        },
        methods: {
            deleteInvestor(id){
                console.log(id)
                let apiURL = `http://localhost:27017/investor/${id}`;
                let indexOfArrayItem = this.investors.findIndex(i => i.investor_iD === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.investors.splice(indexOfArrayItem, 1);
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
.createInvestor{
border: 2px solid black;
font-size:20px; 
color: White; 
background-color: #267bfa;
font-weight:bold; 
margin-left:1147px; 
margin-top: -45px;
}

.one {
   border: 2px solid black;
   margin-top: -70px;
   margin-left:-15px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
    
    
}

.two {
   border: 2px solid black;
   margin-top: -30px;
   margin-left:-15px; 
   color:white; 
   background-color:red; 
   padding: 1px 18px;
   font-size:16px
   
    
}

.three{
   border: 2px solid black;
   margin-top: 10px;
   margin-left:-15px; 
   color:white; 
   background-color:rgb(0, 195, 255); 
   padding: 1px 12px;
   font-size:16px
   
    
}

.four{
   border: 2px solid black;
   margin-top: -70px;
   margin-left:-5px; 
   color:black; 
   background-color:#FFD700; 
   padding: 41px 5px;
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
