<template>
  <div class="container">
    <h1>Master Data Table</h1>

    <table class="styled-table">
      <thead>
        <tr>
          <th>Project Num</th>
          <th>Project Name</th>
          <th>Project Done</th>
          <th>Project Status</th>
          <th>Project Type</th>
          <th>Project Location</th>
          <th>City</th>
          <th>State</th>
          <th>Project Location Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="User in Users" :key="User.project_number">
          <td>{{ User.project_number }}</td>
          <td>{{ User.project_name }}</td>
          <td>{{ User.project_completed }}</td>
          <td>{{ User.project_status_type }}</td>
          <td>{{ User.project_type_description }}</td>
          <td>{{ User.project_location_name }}</td>
          <td>{{ User.project_location_city }}</td>
          <td>{{ User.project_location_state }}</td>
          <td>{{ User.project_location_status_type }}</td>

          <td>
            <button
              @click.prevent="deletesomething(User.project_number)" class="btn btn-danger">Delete</button>
            <br>
            <br>
            <!-- User.project_number -->
            <button @click.prevent="senddata()" class="btn btn-success">Post</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ActivitiesTable",
  data() {
    return {
      Users: [],
      Addexample: {
        project_number: "18",
        project_name: "three story house",
        project_completed: "No",
        project_status_type: "Started",
        project_type_description: "Build from Scratch",
        project_location_name: "Cinco Ranch",
        project_location_city: "Rosenber",
        project_location_state: "AZ",
        project_location_status_type: "not available",
      },
    };
  },
  created() {
    axios
      .get("https://data.mongodb-api.com/app/data-nhwaq/endpoint/getstuff") //http://localhost:3000/activity
      .then((resp) => {
        console.log(resp.data);
        this.Users = resp.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deletesomething(id) {
      console.log(id);
      let apiURL = `https://data.mongodb-api.com/app/data-nhwaq/endpoint/data/beta/action/deleteOne`; //http://localhost:27017/project/${id}
      //let indexOfArrayItem = this.Users.findIndex((i) => i.project_number === id);
      /*let something = {
      dataSource: "Cluster0",
      database: "Client",
      collection: "activity",
      filter: { project_number : '19' }
      };*/
      let headers = {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
      }; //, "Access-Control-Request-Headers": "*"

      if (window.confirm("Do you really want to delete?")) {
        axios.post(apiURL,
            {
              dataSource: "Cluster0",
              database: "Client",
              collection: "activity",
              filter: { project_number: id },
            },
            { headers }
          )
          .then((res) => {
            console.log(res);
            //this.$router.push("/activity");
          })
          .catch((error) => {
            this.errors.push(
              "Error in the form submission" + error.response.data
            );
          });
      }
    },
    senddata() 
    {
      // let headers = {
      //   "Content-Type": "application/json",
      //   "Access-Control-Request-Headers": "*",
      //   "Access-Control-Allow-Origin": "*",
      //   "dataSource": "Cluster0",
      //   "database": "Client",
      //   "collection": "activity"
      // };
      axios
        .post(
          "https://data.mongodb-api.com/app/data-nhwaq/endpoint/insertsysone",
          {
            dataSource: "Cluster0",
            database: "Client",
            collection: "activity",
            document: {
              project_number: "18",
              project_name: "three story house",
              project_completed: "No",
              project_status_type: "Started",
              project_type_description: "Build from Scratch",
              project_location_name: "Cinco Ranch",
              project_location_city: "Rosenber",
              project_location_state: "AZ",
              project_location_status_type: "not available",
            },
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then(() => {
          this.$router.push("/activity");
          this.Addexample = {
            project_number: "18",
            project_name: "three story house",
            project_completed: "No",
            project_status_type: "Started",
            project_type_description: "Build from Scratch",
            project_location_name: "Cinco Ranch",
            project_location_city: "Rosenber",
            project_location_state: "AZ",
            project_location_status_type: "not available",
          };
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
}
.styled-table thead tr {
  background-color: #267bfa;
  color: #ffffff;
}
.btn-success {
        margin-right: 10px;
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
</style>
