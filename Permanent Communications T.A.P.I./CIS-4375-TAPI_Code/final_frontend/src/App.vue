<template >
  <!-- <fixed-header> -->

  <div id="Appinfo">
    <b-nav id="navi">
      <div class="container">
      <a href="http://www.mypipingint.com/"><img src="./assets/logo2.png" id="image2" /></a>

        <a
          class="btn btn-primary"
          style="font-size: 20px; color: white; font-weight: bold"
          href="/"
          role="button"
          id="dashboard"
          >Home</a
        >

        <!-- Example single danger button -->
        <div class="btn-group col-md-2" id="projectinfo">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Project Information
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createProject"
                >Create Project</router-link
              >
            </li>

            <li><hr class="dropdown-divider" /></li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewProject"
                >View Projects</router-link
              >
            </li>
          </ul>
        </div>

        <div class="btn-group col-md-2" id="personnel">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Personnel Information
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="
                  font-size: 20px;
                  color: black;
                  font-weight: bold;
                  text-align: left;
                "
                to="/createInvestor"
                >Create Investor</router-link
              >
            </li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createSubcontractor"
                >Create Subcontractor</router-link
              >
            </li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createEmployee"
                >Create Employee</router-link
              >
            </li>

            <li><hr class="dropdown-divider" /></li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewInvestor"
                >View Investors</router-link
              >
            </li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewSubcontractor"
                >View Subcontractors</router-link
              >
            </li>
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewEmployee"
                >View Employees</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Example single danger button -->
        <div class="btn-group col-md-2" id="resource">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            style="font-size: 20px; color: white; font-weight: bold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resource Assignments
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createInvestorAssigned"
                >Create Investor Assignment</router-link
              >
            </li>
           

            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/createEmployeeAssigned"
                >Create Employee Assignment</router-link
              >
            </li>

            <li><hr class="dropdown-divider" /></li>

            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewInvestorAssigned"
                >View Assigned Investors</router-link
              >
            </li>

          

            <li class="dropdown-item">
              <router-link
                class="nav-link"
                style="font-size: 20px; color: black; font-weight: bold"
                to="/viewEmployeeAssigned"
                >View Assigned Employees</router-link
              >
            </li>
          </ul>
        </div>


        <img src="./assets/logo1.jpeg" id="image" />

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

#dashboard {
  margin-right: -10px;
}

#projectinfo {
  margin-left: 20px;
  margin-right: 27px;
}
#personnel {
  margin-right: 55px;
}
#resource {
  margin-right: 60px;
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
  margin-left: 120px;
  margin-right: 15px;
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
  background-color: black;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 5;
}
</style>