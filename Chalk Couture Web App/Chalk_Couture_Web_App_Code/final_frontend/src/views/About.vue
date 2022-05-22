<template>
  <div class="about">
    <br>
    <u><center><h1>Creations Galore Technical Manual</h1></center></u>
            <p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
         
           <!--<button class = "toTop" @click="moveUp()">Scroll Up</button>-->
    <br>
    <h3><b> ITEMS </b></h3>
    <p> 1. Add retail chalk items from the Chalk Couture online store or any custom made items planned to sell. </p>
    <p> 2. Keep the inventory of each particular item up to date. </p>
    <p> 3. *** Item Name must always be unique! ***</p>

<br>

    <h3><b> CUSTOMERS </b></h3>
    <p> 1. Add any existing or potential future customers within the business. </p>
    <p> 2. Keep the general information of each particular customer up to date. </p>
    <p> 3. *** Customer Email must always be unique! ***</p>

<br>

    <h3><b> EVENTS </b></h3>
    <p> 1. Add any existing or upcoming events for Chalk Couture functions. </p>
    <p> 2. Keep the general information of each particular event up to date. </p>
    <p> 3. *** Event Name must always be unique! ***</p>

<br>

    <h3><b> INVOICES </b></h3>
    <p> 1. Add all item sales of customers and/or events through its' specific order line. </p>
    <p> 2. Keep the general information of each particular invoice (customer and event) up to date. </p>

    <h5> <b>• Customer Invoices </b></h5> 
    <p>   ‣  Item Name & Customer Email MUST be exact for propper linkage! </p>

    <h5> <b>• Event Invoices </b></h5> 
    <p>   ‣  Item Name & Event Name MUST be exact for propper linkage! </p>






<br>
<br>
<br>
  </div>
</template>



<style scoped>
.btn{
position: -webkit-static;
    position: static;
    margin-right: 0px;

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
 
/* 
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
*/
</style>
