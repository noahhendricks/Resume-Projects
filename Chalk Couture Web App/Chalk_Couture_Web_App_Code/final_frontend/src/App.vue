<template >
  <!-- <fixed-header> -->

  <div id="Appinfo">
    <b-nav id="navi">
      <div class="container">
      <a href="http://localhost:8080/"><img src="./assets/creations_galore_logo.png" id="image2" /></a>
      <a href="http://localhost:8080/about"><img src="./assets/info.png" id="imageInfo" /></a>

<!--HOME button-->
<!--
        <a
          class="btn btn-primary"
          style="font-size: 20px; color: white; font-weight: bold" 
          href="/"
          role="button"
          id="home"
          >Home</a>
-->

        <!-- Nav Bar -->

        <div class="btn-group col-md-2" id="chalk_items">
          <button
            type="button"
            class="btn btn-warning dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Inventory
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createItem"
                >Add Item</router-link
              >
            </li>

            <li><hr class="dropdown-divider" /></li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewItem"
                >View Items</router-link
              >
            </li>
          </ul>
        </div>

        <div class="btn-group col-md-2" id="customers">
          <button
            type="button"
            class="btn btn-warning dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Customers
          </button>
          <ul class="dropdown-menu">

            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createCustomer"
                >Add Customer</router-link
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewCustomer"
                >View Customers</router-link
              >
            </li>
          </ul>
        </div>



        <div class="btn-group col-md-2" id="events">
          <button
            type="button"
            class="btn btn-warning dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Events
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createEvent"
                >Add Event</router-link
              >
            </li>

            <li><hr class="dropdown-divider" /></li>

            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewEvent"
                >View Events</router-link
              >
            </li>
          </ul>
        </div>


        
        <div class="btn-group col-md-2" id="invoices">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Invoices
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createCust_Invoice"
                >Create Cust. Order</router-link
              >
            </li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createEvent_Invoice"
                >Create Event Order</router-link
              >
            </li>


            <li><hr class="dropdown-divider" /></li>

            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewCust_Invoice"
                >View Cust. Invoices</router-link
              >
            </li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewEvent_Invoice"
                >View Event Invoices</router-link
              >
            </li>

          </ul>
        </div>



  <div id="Appinfo">

      <div class="container">
      <a style="width: 30px;" href="https://www.chalkcouture.com/eileenhendricks"><img src="./assets/chalk_logo1.jpeg" id="imageC" /></a>
      </div>

      </div>
      


 
       <!-- <img src="./assets/chalk_logo.jpeg" id="image" />-->



        


        <!-- Example single danger button -->

        <!-- <div class="btn-group col-md-2">
  
  <button type="button" class="btn btn-primary dropdown-toggle" style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Reports
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/project_phase_report/">Phase Report</router-link>
    </li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

-->
        <!-- <div class="btn-group col-md-2">
  
  <button type="button" class="btn btn-primary dropdown-toggle"  style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Charts
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
 -->
 
      </div>
    </b-nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
  <!-- </fixed-header> -->
</template>


<script>
// import FixedHeader from "vue-fixed-header";

export default {
  name: "App",
  components: {
    // FixedHeader,
  },
};
</script>


<style>
/* .btn {
  display: inline-block;
} */





#home {
  margin-right: -10px;
}

#chalk_items {
  margin-top: 7.5px;
  margin-left: 40px;
  margin-right: 30px;
  width: 170px;
}
#customers {
  margin-top: 7.5px;
  margin-left: 5px;
  margin-right: 27px;
  width: 215px;
}

#events {
  margin-top: 7.5px;
  margin-left: 5px;
  margin-right: 27px;
  width: 177px;
}

#invoices {
  margin-top: 7.5px;
  margin-left: 5px;
  margin-right: 27px;
  width: 245px;
}

/*chalk logo style*/
#imageC {
  height: 51px;
  max-width: 14.28%;
  display: inline-block;
  margin-left: 1140px;
  margin-right: 100px;
  margin-top: -74px;
}

#image {
  max-height: 50px;
  max-width: 14.28%;
  display: inline-block;
  margin-right: 10px;
  border-radius: 80%;
}

#image2 {
  max-height: 150px;
  max-width: 14.28%;
  display: inline-block;
  margin-left: -32px;
  margin-right: -10px;
  margin-top: 4px;
}


#imageInfo {
  max-height: 45px;
  max-width: 14.28%;
  display: inline-block;
  margin-left: 45px;
  margin-right: -10px;
  margin-top: 5px;
}

#Appinfo {
  max-height: 71.8px;
}



#image3 {
  max-height: 50px;
  max-width: 14.28%;
  display: inline-block;
  margin-right: 10px;
  border-radius: 80%;
}
#navi {
  background-color: rgba(0, 0, 0, 0.795);
  position: fixed;
  height: 8.5%;
  width: 100%;
  top: 0px;
  z-index: 5;
}


</style>
