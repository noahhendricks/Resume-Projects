<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12">
        <br><br><p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>

        <div style="margin-left:500px; margin-top: -50px">
            <u class="text-center" style="font-size:200%; font-weight:bold;">Create Cust. Order Line</u>
        </div><br>
            <strong style ="font-size:150%">Customer Order Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">ALL Fields Required</p>
            <form @submit.prevent="handleSubmitForm">

              <div class="form-group row">
               <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestorProjectNum">SKU.</label>
                    
                    <input size="6" style="text-align:right"  type="text" class="form-control" id="inputInvestorProjectNum" minlength="6" maxlength="6" placeholder="C223R4" pattern="[0-9,A-Z]{6}" v-model="customer_invoice.item_ID" required>
                    
                </div>
                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <b><label style ="font-size:14pt; text-align:left;" for="inputFName">Item Name</label></b>
                    
                    <input size="35" type="text" class="form-control" placeholder="Girl Boss" id="inputFName" minlength="2" maxlength="35" pattern="{2,25}" v-model="customer_invoice.item_name" required>

                </div>
                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Item Qty</label>
                   
                    <input style="text-align:right" type="number" placeholder="11" class="form-control" size="4" id="inputStepDuration" minlength="0" maxlength="3" pattern="[0-9]{0,2}" v-model="customer_invoice.item_quantity" required>
                    
                </div>

                 <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Order Cost</label>
                     <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$100.00" minlength="0" maxlength="11" size="8"  v-model="customer_invoice.order_cost" required>
                    <br>
                </div>

                </div>

                <div style= "margin-top: 65px" class="form-group row">
                <div style= "margin-left: 0px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Customer First Name</label>
                    
                    <input size="24" placeholder="Joey" type="text" class="form-control" id="inputFName" minlength="2" maxlength="25" pattern="[A-Za-z\s]{2,25}" v-model="customer_invoice.customer_firstname" required>
                   
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputInvestmentRate">Customer Last Name</label>
                    <input size="35" placeholder="Reynolds"  type="text" class="form-control" id="inputLName" minlength="2"  maxlength="35" pattern="[A-Za-z\s]{2,35}" v-model="customer_invoice.customer_lastname" required>                  
                </div>

                <div style="margin-left:35px; margin-top: -5px" class="form-group col-lg-auto">
                <b><label style ="font-size:14pt" class="col-form-label pt-0">Customer Email Address</label></b>
                <input  size="46" type="text" class="form-control" placeholder="yourname123@mail.com" maxlength="45" v-model="customer_invoice.customer_email" required>                               
                <br>        
                </div>
                </div>

                <div style= "margin-top: 65px" class="form-group row">
                <div style= "margin-left: 0px; text-align:left; margin-top: 0px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Date of Transaction</label>
                    <datepicker :value="new Date()"></datepicker>
                     <input type="date"  class="form-control" v-model="customer_invoice.purchase_date" required>
                </div>

                </div>

                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>
                    
                    
                     <button class="btn btn-danger mt-3" style ="font-size:14pt; margin-left:0px;">Create</button>
               
                <br>
                <br>



               
            </form>
        </div> 
    </div> 
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                //retrieving data from the customer invoice schema getting the data 
                errors: [],
                customer_invoice: {
                   item_ID: '',
                   item_name:'',
                   item_quantity: '',
                   order_cost: '',
                   customer_firstname: '',
                   customer_lastname: '',
                   customer_email:'',
                   purchase_date:''
                   
                   
                   

                },
                //static data for dropdown lists
               
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.customer_invoice.item_ID){
                    this.errors.push("Pass Numbers only.");
                }

                if(!this.customer_invoice.customer_firstname){
                    this.errors.push("Pass Letters only.");
                }
                if(!this.customer_invoice.customer_lastname){
                    this.errors.push("Pass Letters only.");



            }
                //posing data that has been created to route passing the customer invoice schema data
                let apiURL = 'http://localhost:27017/customer_invoice';
                
                axios.post(apiURL, this.customer_invoice).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewCust_Invoice')
                  this.customer_invoice = {
                      
                   order_line_number: '',
                   item_ID: '',
                   item_name:'',
                   item_quantity: '1',
                   order_cost: '',
                   customer_firstname: '',
                   customer_lastname: '',
                   customer_email:'',
                   purchase_date:''

                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>




<style scoped>
.goback{
    font-size:20px; 
    border: 2px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0); 
    background-color: #000000d2;
    font-weight:bold; 
    margin-left:0px; 
    margin-top: -35px;
}
</style>