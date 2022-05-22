<template>


    <div class="row">
    <!--<pagination
      :totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"/>-->

        <div class="col-lg-12">
            <br>
            <br>

            <strong style="margin-left:360px; font-size: 20pt; color:Black; ">Search Events:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="42" type="text" v-model="searchEvents" placeholder="Filter by Name, City, Date, Status, or Registered" />  

            <p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
            <p><router-link class="btn addProject"  to="/createEvent">Add Chalk Event</router-link></p>
            <br>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="table styled-table">
                <col   style="width:0%"> 
                <col   style="width:14%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%">
                <col   style="width:0%">
                <col   style="width:10%">
                <col   style="width:0%">
                <thead class="thead-dark">
                    <tr>
                        <th style="position:sticky">Event ID</th>
                        <th style="position:sticky">Event Name</th>
                        <th style="position:sticky">City</th>
                        <th style="position:sticky">Start Date</th>
                        <th style="position:sticky">End Date</th>
                        <th style="position:sticky; text-align: right">Event Fee</th>
                        <th style="position:sticky">Registered</th> <!-- not needed-->
                        <th style="position:sticky">Status</th>


                        <th style="position:sticky">Actions</th>
                        <th style="position:sticky">Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in filteredEvents" :key="event._id">
                        <td style="position: relative;">{{ event.event_ID }}</td>
                        <td style="position: relative;">{{ event.event_name }}</td>
                        <td style="position: relative;">{{ event.event_city}}</td>
                        <td style="position: relative;">{{ event.event_start_date }}</td>
                        <td style="position: relative;">{{ event.event_end_date}}</td>
                        <td style="position: relative; text-align: right">{{ event.event_fee}}</td>
                        <td style="position: relative;">{{ event.event_register}}</td>                        
                        <!--<td style="position: relative;">{{ item.item_style }}</td>-->
                        <!--<td style="position: relative; text-align: right">{{ item.item_use }}</td>
                        <td style="position: relative;">{{ item.item_accessory }}</td>
                        <td style="position: relative;">{{ item. item_comment}}</td>-->
                        <td style="position: relative;">{{ event.event_status}}</td>


                        

                       
                        <td style="position: relative;">

                            <router-link :to="{name: 'editEvent', params: { id: event.event_ID}}"  class="btn one">View / Edit
                            </router-link>
                            

                           <button  @click.prevent="deleteEvent(event.event_ID)"  class="btn two">Delete</button>

                            
                            <router-link :to="{name: 'createEvent_Invoice', params: { id: event.event_name}}"  class="btn three">Item<br>Order
                            </router-link>

                            
                            
                            <!--<router-link :to="{name: 'viewPhase', params: { id: item.item_ID}}"   class="btn four">Item Sells
                            </router-link>-->

                            
                        
                        </td>
                        
                        <td style="position: relative;" >
                        <router-link :to="{name: 'event_invoice_report', params: { id: event.event_name}}"  class="btn five">Item <br/> Sales<br/>
                            </router-link>




                            
                            <br>
                            <br>
                           
                            <!--<router-link :to="{name: 'project_investor_report', params: { id:project.project_number}}"   class="btn six">Assigned <br/> Investors<br/> 
                            </router-link>

                            <br>
                            <br>

                            <router-link :to="{name: 'project_employee_report', params: { id:project.project_number}}"  class="btn seven">Assigned <br/> Employees<br/> 
                            </router-link>-->

                            
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</template>

<script>


    import axios from "axios";
    //import Pagination from './components/Pagination.vue';
    export default {

  name: 'ViewEvent', 
  components: {
    //Pagination
  },

        data() {
            return {
                //currentPage: 1,
                events: [],
                searchEvents: ''

            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/events';
            axios.get(apiURL).then(res => {
                this.events = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredEvents: function(){


                return this.events.filter((event) =>{

                    return  event.event_name.toLowerCase().match(this.searchEvents.toLowerCase()) ||
                            //item.item_ID.toLowerCase().match(this.searchItems.toLowerCase())||
                            event.event_start_date.toLowerCase().match(this.searchEvents.toLowerCase())||
                            event.event_end_date.toLowerCase().match(this.searchEvents.toLowerCase())||
                            event.event_status.toLowerCase().match(this.searchEvents.toLowerCase()) ||
                            event.event_register.toLowerCase().match(this.searchEvents.toLowerCase()) ||
                            event.event_city.toLowerCase().match(this.searchEvents.toLowerCase()) 
                           
                    
                })
            }    
        },
        methods: {

      /*onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }, */   

            deleteEvent(id){
                console.log(id)
                let apiURL = `http://localhost:27017/event/${id}`;
                let indexOfArrayEvent = this.events.findIndex(i => i.event_ID === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.events.splice(indexOfArrayEvent, 1);
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
  box-shadow: 0 0 20px rgba(245, 184, 15, 0.15);   /*rgba(245, 184, 15, 0.15);*/
  text-align: left;
  color: black;
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

.addProject{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #00d2da;  /*#267bfa;*/
    font-weight:bold; 
    margin-left:1153px; 
    margin-top: -45px;
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

.one{
   border: 2px solid black;
   margin-top: -2px;
   margin-left:0px; 
   color:white; 
   background-color:rgb(57, 155, 44); 
   padding: 0px 5px;
   font-size:16px

}

.two{
   border: 2px solid black;
   margin-top: 45px;
   margin-left:0px; 
   color:white; 
   background-color:red; 
   padding: 0px 20px;
   font-size:16px
    
}

.three{
   border: 2px solid black;
   margin-top: 91px;
   margin-left:0px; 
   color:white; 
   background-color:rgb(0, 4, 255);       /*rgb(101, 119, 116)*/ 
   padding: 0px 4px;
   font-size:16px;
   width:90px;
   height:52px
    
}

.four{
   border: 2px solid black;
   margin-top: 140px;
   margin-left: -28px;
   margin-right:-20px;  
   color:white; 
   background-color:rgb(255, 6, 255); 
   padding: 1px 0px;
   font-size:16px


}

.five{
   position: sticky;
   border: 2px solid black;
   margin-top: -2.5px;
   margin-left: 0px; 
   color:black; 
   background-color:#fbff00;  /*#fbff00;*/
   padding: 45px 7px;
   font-size:16px;
   width:90px;
   height:145px
}

.six{
   border: 2px solid black;
   margin-top: 10px;
   margin-left:-4px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 5px;
   font-size:16px
}

.seven{
   border: 2px solid black;
   margin-top: 20px;
   margin-left:-8px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 0px;
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
  background-color: rgba(255, 250, 246, 0.322);   /*rgba(255, 251, 246, 0.541);*/
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
}
</style>
