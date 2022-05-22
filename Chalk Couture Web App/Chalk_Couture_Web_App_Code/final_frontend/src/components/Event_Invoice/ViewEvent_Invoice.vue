<template>
    <div class="row">
        
        <div class="col-lg-12">
        <br>
        <br>
        <strong style="margin-left:305px; font-size: 20pt; color:Black; "  >Search Event Invoices:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="48" type="text" v-model="search" placeholder="Filter by Item Name, Event Name, Cust. Name, or Date" />

        <p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
        <p><router-link class="btn createEmployeeAssign"  to="/createEvent_Invoice">Add Event Order</router-link></p>
         
           <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="table styled-table">

                <col   style="width:5%"> 
                <col   style="width:0%"> 
                <col   style="width:12%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%">  
                <col   style="width:12%">
                <col   style="width:15%">
                <col   style="width:0%">
                <col   style="width:10%">
                <thead class="thead-dark">

                    <tr>
                        <th style="position:sticky">Invoice Num.</th>
                        <th style="position:sticky">SKU.</th>
                        <th style="position:sticky">Item Name</th>
                        <th style="position:sticky; text-align: center">Item Qty</th>
                        <th style="position:sticky; text-align: right">Order Cost</th>
                        <th style="position:sticky">Event ID</th>
                        <th style="position:sticky">Event Name</th>
                        <th style="position:sticky">Customer<br>Name</th>
                        <th style="position:sticky">Transaction Date</th>
                        <th style="position:sticky">Actions</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event_invoice in filteredEvent_Invoices" :key="event_invoice._id">
                        <td style="position: relative;">{{ event_invoice.event_invoice_number }}</td>
                        <td style="position: relative;">{{ event_invoice.item_ID }}</td>
                        <td style="position: relative;">{{ event_invoice.item_name }}</td>
                        <td style="position: relative; text-align: center">{{ event_invoice.item_quantity}}</td>
                        <td style="position: relative; text-align: right">{{ event_invoice.order_cost}}</td>
                        <td style="position: relative;">{{ event_invoice.event_ID}}</td>                        
                        <td style="position: relative;">{{ event_invoice.event_name}}</td>
                        <td style="position: relative;">{{ event_invoice.customer_name}}</td>
                        <td style="position: relative;">{{ event_invoice.purchase_date}}</td>

                        <td style="position: relative;">
                            <router-link :to="{name: 'editEvent_Invoice', params: { id: event_invoice.event_invoice_number}}" class="btn one">View / Edit
                            </router-link>
                            <button @click.prevent="deleteEvent_Invoice(event_invoice.event_invoice_number)" class="btn two">Delete</button>

                            
                            
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
                event_invoices: [] ,
                search: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/event_invoices';
            axios.get(apiURL).then(res => {
                this.event_invoices = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredEvent_Invoices: function(){


                return this.event_invoices.filter((event_invoice) =>{

                            //order_line.order_line_number.match(this.search) ||
                    return event_invoice.item_name.toLowerCase().match(this.search.toLowerCase()) ||
                           event_invoice.event_name.toLowerCase().match(this.search.toLowerCase()) ||
                           //event_invoice.event_ID.toLowerCase().match(this.search.toLowerCase()) ||
                           event_invoice.customer_name.toLowerCase().match(this.search.toLowerCase()) ||
                           event_invoice.purchase_date.match(this.search)
                    
                })
            }    
        },
        methods: {
            deleteEvent_Invoice(id){
                console.log(id)
                let apiURL = `http://localhost:27017/event_invoice/${id}`;
                let indexOfArrayItem = this.event_invoices.findIndex(i => i.event_invoice_number === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.event_invoices.splice(indexOfArrayItem, 1);
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
  height:10%;
  margin-top: -35px;
  box-shadow: 0 0 20px rgba(73, 146, 255, 0.15);
  text-align: left;
}
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  z-index: 2;
  background-color: #5683ff;
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
position: -webkit-static;
    position: static;
    margin-right: 0px;

}

.createEmployeeAssign{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #00d2da;
    font-weight:bold; 
    padding:6px 6px;
    margin-top: -115px;
    margin-left: 1160px;
    width: 175px;
   
}

.goback{
    font-size:20px; 
    border: 2px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0); 
    background-color: #000000d2;
    font-weight:bold; 
    margin-left:0px; 
    margin-top: -35px;
}


.one{
   border: 2px solid black;
   margin-top: -10px;
   margin-left:0px; 
   color:white; 
   background-color:rgb(57, 155, 44);
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

.styled-table tbody tr:nth-of-type(odd) {
  background-color:rgb(255, 255, 255);
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #5683ff;
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
}
</style>
