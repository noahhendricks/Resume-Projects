<template>
    <div class="row">
        
        <div class="col-lg-12">
        <br>
        <br>
            <strong style="margin-left:335px; font-size: 20pt; color:Black;"  >Search Customers:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="43" type="text" v-model="searchCustomers" placeholder="Filter by Name, Email, Event, or Club Member" /> 

            <p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
            <p><router-link class="btn createCustomer"  to="/createCustomer">Add Customer</router-link></p>
            <br>
             <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:11%"> 
                <col   style="width:9%"> 
                <col   style="width:10%"> 
                <col   style="width:13%"> 
                <col   style="width:10%"> 
                <col   style="width:10%"> 
                <col   style="width:10%">
                <col   style="width:10%">
                <col   style="width:9%">
                <thead class="thead-dark">
                    <tr>
                      
                        <th style="position:sticky">Customer<br>ID</th>
                        <th style="position:sticky">First Name</th>
                        <th style="position:sticky">Last Name</th>
                        <th style="position:sticky">Email Address</th>
                        <th style="position:sticky">Phone #</th>  
                        <th style="position:sticky">Club Member</th>                      
                        <th style="position:sticky">Event Met</th>
                        <th style="position:sticky">Date Joined<br> </th>
                        <!--<th style="position:sticky">Status</th>-->
                        <th style="position:sticky">Actions</th>
                        <th style="position:sticky">Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in filteredCustomers" :key="customer.customer_number">
                        <td style="vertical-align:top">{{ customer.customer_number}}</td>
                        <td style="vertical-align:top">{{ customer.customer_first_name }}</td>
                        <td style="vertical-align:top">{{ customer.customer_last_name }}</td>
                        <td style="vertical-align:top">{{ customer.customer_email}}</td>
                        <td style="vertical-align:top">{{ customer.customer_phone}}</td>
                        <td style="vertical-align:top">{{ customer.customer_member_type}}</td>
                        <td style="vertical-align:top">{{ customer.customer_event_met}}</td>
                        <td style="vertical-align:top">{{ customer.customer_join_date}}</td>
                        <!--<td style="vertical-align:top">{{ customer.customer_status}}</td>-->
                        <td style="position:sticky">
                            <router-link :to="{name: 'editCustomer', params: { id: customer.customer_number}}"  class="btn one">View / Edit

                            </router-link>

                            <br>

                        
                        <button @click.prevent="deleteCustomer(customer.customer_number)"  class="btn two">Delete</button>
                        
                        <br>
                        <br>
                         <router-link :to="{name: 'createCust_Invoice', params: { id: customer.customer_email}}"  class="btn three">Item<br>Order
                            </router-link>

                        </td>

                        <td style="position:sticky">
                        <router-link :to="{name: 'customer_order_line_report', params: { id: customer.customer_email}}"  class="btn four">Customer<br> Purchases
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
                customers: [],
                searchCustomers:''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/customers';
            axios.get(apiURL).then(res => {
                this.customers = res.data;
            }).catch(error => { 
                console.log(error)
            });
        },
       computed: {
            filteredCustomers: function(){


                return this.customers.filter((customer) =>{

                    //return customer.customer_first_name/*.toLowerCase().match(this.searchCustomers.toLowerCase())*/ ||
                          //customer.customer_last_name/*.toLowerCase().match(this.searchCustomers.toLowerCase())*/ ||
                           //customer.customer_member_type/*.toLowerCase().match(this.searchCustomers.toLowerCase())*/ 

                    // all attributes in backend must be string fields for search engine to operate 
                    return customer.customer_first_name.toLowerCase().match(this.searchCustomers.toLowerCase()) ||
                           customer.customer_last_name.toLowerCase().match(this.searchCustomers.toLowerCase()) ||
                           customer.customer_email.toLowerCase().match(this.searchCustomers.toLowerCase()) ||
                           customer.customer_member_type.toLowerCase().match(this.searchCustomers.toLowerCase()) ||
                           customer.customer_event_met.toLowerCase().match(this.searchCustomers.toLowerCase()) 
                })
            }    
        },
        methods: {
            deleteCustomer(id){
                console.log(id)
                let apiURL = `http://localhost:27017/customer/${id}`;
                let indexOfArrayItem = this.customers.findIndex(i => i.customer_number === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.customers.splice(indexOfArrayItem, 1);
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
  border: 1px solid;
  /*border-collapse: collapse;*/
  font-size: 12pt;
  font-family: sans-serif;
  width: 103%;
  height: 50%;
  box-shadow: 0 0 20px rgba(245, 184, 15, 0.15);
  text-align: left;
}
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  z-index: 2;
  background-color: #ffc400;
  color: #000000;
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

.createCustomer{
border: 2px solid black;
font-size:20px; 
color: White; 
background-color: #00d2da;
font-weight:bold; 
margin-left:1170px; 
margin-top: -45px;
width: 165px;
}

.goback{
    font-size:20px; 
    border: 2px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0); 
    background-color: #000000d2;
    font-weight:bold; 
    margin-left:0px; 
    margin-top: -30px;
}


.one {
   /*position: sticky;*/
   border: 2px solid black;
   margin-top: -32px;
   margin-left:-5px; 
   color:white; 
   background-color:rgb(57, 155, 44); 
   padding: 1px 5px;
   font-size:16px;
   width:90px;

    
}

.two {
   /*position: sticky;*/
   border: 2px solid black;
   margin-top: -15px;
   margin-left:-5px; 
   color:white; 
   background-color:red; 
   padding: 1px 20px;
   font-size:16px
   
    
}

.three{
   /*position: sticky;*/
   border: 2px solid black;
   margin-top: -23px;
   margin-left:-5px; 
   color:white; 
   background-color:rgb(0, 4, 255); 
   padding: 1px 8px;
   font-size:16px;
   width:90px;
   height: 52px;
   
    
}

.four{
   position: sticky;
   border: 2px solid black;
   margin-top: -3px;
   margin-left:-4px; 
   text-align: center;
   color:black; 
   background-color:#fbff14; 
   padding: 40px 7px;
   width: 92px;
   height: 135px;
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
  background-color: (255, 250, 246, 0.322);
}

.styled-table tbody tr:nth-of-type(odd) {
  background-color:rgb(255, 255, 255);
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #ffc400;
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
  background-color: #fc16e9;  
  width: 3.8%;
  height: 8%;
  bottom: 10px;
  right: 8px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
</style>
