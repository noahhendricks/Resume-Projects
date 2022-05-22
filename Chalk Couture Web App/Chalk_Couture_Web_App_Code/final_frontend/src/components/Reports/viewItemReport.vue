<template>
    <div class="row">
        
        <br>
        <br>
         
        <div class="col-lg-12"><br>
          <u style="margin-left:475px;" class="projectReport">Customer Sales Report</u>
          <br>



          <br>
           <h2  class="reportPhase" > <i>SKU: </i>{{items.item_ID}} <br/> <mark><i>Item Name:</i></mark> {{items.item_name}} <br/>  <i>Type:</i> {{items.item_class}}  <br/> <i>Price:</i> {{items.item_price}} <br/> <i>Status:</i> {{items.item_status}}</h2>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <router-link class="btn viewProjects"  to="/viewItem">View All Items</router-link>

<br><br>
            <table class="styled-table">

                <col   style="width:8%"> 
                <col   style="width:0%"> 
                <col   style="width:15%"> 
                <col   style="width:22%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
               
                
                <thead class="thead-dark">
                    <tr>
                        <th style="position: sticky;">Invoice Num.</th>
                        <th style="position: sticky;">First Name</th>
                        <th style="position: sticky;" >Last Name</th>
                        <th style="position: sticky;"><mark>Email Address</mark></th>
                        <th style="position: sticky; text-align:center">Item Qty</th>
                        <th style="position: sticky; text-align:right">Order Cost</th>
                        <th style="position: sticky;">Purchase Date</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                  
                    <tr v-for="customer_invoice in customer_invoices" :key="customer_invoice.order_line_number">
                        
                        <td style="position: relative; text-align:left" >{{customer_invoice.order_line_number}}</td>
                        <td style="position: relative; text-align:left" >{{customer_invoice.customer_firstname}}</td>
                        <td style="position: relative; text-align:left" >{{customer_invoice.customer_lastname}} </td>
                        <td style="position: relative; text-align:left" >{{customer_invoice.customer_email}}</td>
                        <td style="position: relative; text-align:center" >{{customer_invoice.item_quantity}}</td>
                        <td style="position: relative; text-align:right" >{{customer_invoice.order_cost}}</td>
                        <td style="position: relative; text-align:left" >{{customer_invoice.purchase_date}}</td>

                       
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>


    </div>

    
    
  


</template>

<script>
    import axios from "axios";
    //pass data values from the customer invoices and items
    export default {
        data() {
            return {
            //retrieving data from the customer invoices and items schema getting the data 
                customer_invoices: [], 
                
                
                items: {},
                
                customer_invoice: {

                  
                   
                   item_name: this.$route.params.id
                   
                },
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/item_order_line_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.customer_invoices = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/item_name/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.items = res.data;
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

.projectReport{
  margin-left:450px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: center;
  font-size: 35px;
}

.viewProjects{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #00d2da;
    font-weight:bold; 
    margin-left:1115px; 
    margin-top: -115px;
    width: 220px;
}

.reportPhase{
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