<template>
  <section class="container">
    <h1 style="text-align:center">Activities Summary</h1>
    <p style="text-align:center; font-size:20px" >*This is a usage metric that will allow to track client spent time and which date they start using service</p>
    
    <div class="columns">
      <div class="column">
        
        
      </div>
      <div class="column">
        
        <div>
          <div>
          <!--Inside calling the Client bar that is to hold values 
          labels and chart data that equal a value initiated inside data -->
            <ClientActivityChart
              v-if="!loading && !error"
              :label="labels"
              :chart-data="timespent"
            ></ClientActivityChart>

            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading">
              <p
                class="
                  text-6xl
                  font-bold
                  text-center text-gray-500
                  animate-pulse
                "
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import ClientActivityChart from "@/components/LineChartComponent";

//the export passes name than a components name that is used to import from component BarCharComponent
export default {
    name:"VueChartJS",
    components: {
        ClientActivityChart
    },
    //within the data are the fields that are being used to pass array data from backend
  data() {
    return {
      labels: [],
      timespent: [],
      loading: false,
      error: null,
    };
  },
  //inside the methods are located the calling of enpoint to get data from backend
  methods: {
    async fetchData() {
      try {
        this.error = null;
        this.loading = true;
        const url = `http://localhost:27017/cfcworker_client_activitys/`;
        const response = await axios.get(url);
        //"re-organizing" - mapping json from the response
        this.labels = response.data.map((item) => item.startDate);
        this.timespent = response.data.map((item) => item.timeSpent);
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
    

  },
  mounted() {
    this.fetchData();
  },
};
</script>