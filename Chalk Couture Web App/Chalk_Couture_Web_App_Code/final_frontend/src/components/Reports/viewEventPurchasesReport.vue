<template>
    <div class="row">
        
        <br>
        <br>
         
        <div class="col-lg-12"><br>
          <u style="margin-left:475px;" class="employeeTitle">Event Purchases Report</u>
          <br>



          <br>
           <h2  class="employeeReport" > <i>ID: #</i>{{events.event_ID}} <br/><mark><i>Event Name:</i></mark> {{events.event_name}}  <br/> <i>Location: </i>{{events.event_city}}  <br/> <i>Start Date: </i>{{events.event_start_date}} <br/> <i>End Date:</i> {{events.event_end_date}} <br/> <i>Fee:</i> {{events.event_fee}}</h2>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <router-link class="btn viewEmployee"  to="/viewEvent">View All Events</router-link>

<br><br>
            <table class="styled-table">


                <col   style="width:8%"> 
                <col   style="width:0%"> 
                <col   style="width:17%"> 
                <col   style="width:22%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
               
                
                <thead class="thead-dark">
                    <tr>
                       
                        <th style="position: sticky;" >Invoice Num.</th>
                        <th style="position: sticky;" >SKU.</th>
                        <th style="position: sticky;" ><mark>Item Name</mark></th>
                        <th style="position: sticky; text-align:center" >Item Qty</th>
                        <th style="position: sticky; text-align:right" >Order Cost</th>
                        <th style="position: sticky;">Customer Name</th>
                        <th style="position: sticky;" >Purchase Date</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                  
                    <tr v-for="event_invoice in event_invoices" :key="event_invoice.event_invoice_number">
                        
                        <td style="position: relative; text-align:left" >{{event_invoice.event_invoice_number}}</td>
                        <td style="position: relative; text-align:left" >{{event_invoice.item_ID}}</td>
                        <td style="position: relative; text-align:left" >{{event_invoice.item_name}} </td>
                        <td style="position: relative; text-align:center" >{{event_invoice.item_quantity}}</td>
                        <td style="position: relative; text-align:right" >{{event_invoice.order_cost}}</td>
                        <td style="position: relative; text-align:left" >{{event_invoice.customer_name}}</td>
                        <td style="position: relative; text-align:left" >{{event_invoice.purchase_date}}</td>

                       
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>


    </div>

    
    
  


</template>

<script>
    import axios from "axios";
    //pass data values from the event invoices and events
    export default {
        data() {
            return {
            //retrieving data from the events and event invoices schema getting the data 
                event_invoices: [], 
                
                
                events: {},
                
                event_invoice: {

                  
                   
                   event_name: this.$route.params.id
                   
                },
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/event_invoice_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.event_invoices = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/event_name/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.events = res.data;
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
  width: 103%;
  height: 10%;
  box-shadow: 0 0 20px rgba(255, 217, 0, 0.15);
  text-align: left;
  color: black;
}
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  height: 70px;
  top: 50px;
  z-index: 2;
  background-color: #fffb00;
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
    background-color: #00d2da;
    font-weight:bold; 
    margin-left:1115px; 
    margin-top: -110px;
    width: 220px;

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
  border-bottom: 2px solid #fffb00;
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
mark {
  background-color: red;
  color: rgb(255, 255, 255);
}
mark2 {
  background-color: red;
  color: white;
}

</style>