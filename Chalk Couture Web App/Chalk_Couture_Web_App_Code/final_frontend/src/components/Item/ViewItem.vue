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

            <strong style="margin-left:360px; font-size: 20pt; color:Black; ">Search Inventory:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="37" type="text" v-model="searchItems" placeholder="Filter by Name, Type, Status, or Date" />  

            <p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
            <p><router-link class="btn addProject"  to="/createItem">Add Chalk Item</router-link></p>
            <br>
            <button id = "toTop" @click="moveUp()">Scroll Up</button>
            <table class="table styled-table">
                <col   style="width:0%"> 
                <col   style="width:14%"> 
                <col   style="width:4%"> 
                <col   style="width:8%"> 
                <col   style="width:0%"> 
                <col   style="width:9%"> 
                <col   style="width:0%"> 
                <col   style="width:0%">
                <col   style="width:0%">
                <col   style="width:10%">
                <col   style="width:0%">
                <thead class="thead-dark">
                    <tr>
                        <th style="position:sticky">SKU.</th>
                        <th style="position:sticky">Name</th>
                        <th style="position:sticky">Type</th>
                        <th style="position:sticky; text-align: right">Price</th>
                        <th style="position:sticky; text-align: center">Amount</th>
                        <th style="position:sticky; text-align: center">Total <br>Retail Value</th>
                        <th style="position:sticky">Status</th>
                        <th style="position:sticky">Date Updated</th>
                        <th style="position:sticky">Actions</th>
                        <th style="position:sticky">Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in filteredItems" :key="item._id">
                        <td style="position: relative;">{{ item.item_ID }}</td>
                        <td style="position: relative;">{{ item.item_name }}</td>
                        <td style="position: relative;">{{ item.item_class }}</td>
                        <td style="position: relative; text-align: right">{{ item.item_price}}</td>
                        <td style="position: relative; text-align: center">{{ item.item_count}}</td>
                        <td style="position: relative; text-align: right">{{ item.item_total_value}}</td>                        
                        <!--<td style="position: relative;">{{ item.item_style }}</td>-->
                        <!--<td style="position: relative; text-align: right">{{ item.item_use }}</td>
                        <td style="position: relative;">{{ item.item_accessory }}</td>
                        <td style="position: relative;">{{ item. item_comment}}</td>-->
                        <td style="position: relative;">{{ item.item_status}}</td>
                        <td style="position: relative;">{{ item.item_date_entered}}</td>

                        

                       
                        <td style="position: relative;">

                            <router-link :to="{name: 'editItem', params: { id: item.item_ID}}"  class="btn one">View / Edit
                            </router-link>
                            

                           <button  @click.prevent="deleteItem(item.item_ID)"  class="btn two">Delete</button>

                            
                            <router-link :to="{name: 'createCust_Invoice', params: { id: item.item_name}}"  class="btn three">Cust. Order
                            </router-link>

                            
                            
                            <router-link :to="{name: 'createEvent_Invoice', params: { id: item.item_ID}}"   class="btn four">Event Order
                            </router-link>

                            
                        
                        </td>
                        
                        <td style="position: relative;" >
                        <router-link :to="{name: 'item_order_line_report', params: { id: item.item_name}}"  class="btn five">Cust.<br>Sales
                            </router-link>




                            
                
                           

                        <router-link :to="{name: 'item_event_sale_report', params: { id: item.item_name}}"  class="btn six">Event<br>Sales
                            </router-link>
<br>
<br>

                          <!--
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

  name: 'ViewItem', 
  components: {
    //Pagination
  },

        data() {
            return {
                //currentPage: 1,
                items: [],
                searchItems: ''

            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/items';
            axios.get(apiURL).then(res => {
                this.items = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredItems: function(){


                return this.items.filter((item) =>{

                    return  item.item_name.toLowerCase().match(this.searchItems.toLowerCase()) ||
                            //item.item_ID.toLowerCase().match(this.searchItems.toLowerCase())||
                            item.item_class.toLowerCase().match(this.searchItems.toLowerCase())||
                            item.item_date_entered.toLowerCase().match(this.searchItems.toLowerCase())||
                            item.item_status.toLowerCase().match(this.searchItems.toLowerCase())  
                            
                           
                    
                })
            }    
        },
        methods: {

      /*onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }, */   

            deleteItem(id){
                console.log(id)
                let apiURL = `http://localhost:27017/item/${id}`;
                let indexOfArrayItem = this.items.findIndex(i => i.item_ID === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.items.splice(indexOfArrayItem, 1);
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
    margin-left:1157px; 
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
   font-size:16px;
   width: 95px;

}

.two{
   border: 2px solid black;
   margin-top: 45px;
   margin-left:0px; 
   color:white; 
   background-color:red; 
   padding: 0px 20px;
   font-size:16px;
   width: 95px;
    
}

.three{
   border: 2px solid black;
   margin-top: 91px;
   margin-left:0px; 
   color:white; 
   background-color:rgb(0, 4, 255); 
   padding: 0px 4px;
   font-size:16px;
   width:95px;
   /*height:52px*/
    
}

.four{
   border: 2px solid black;
   margin-top: 139px;
   margin-left: 0px;
   /*margin-right:-20px;  */
   color:white; 
   background-color:rgb(0, 4, 255);        /*rgb(255, 6, 255)*/
   padding: 1px 0px;
   font-size:16px;
   width: 95px;


}

.five{
   position: sticky;
   border: 2px solid black;
   margin-top: -2.5px;
   margin-left: 0px; 
   text-align: center;
   color:black; 
   background-color:#fbff00;  /*#fbff00;*/
   padding: 12px 5px;
   font-size:16px;
   width:90px;
   height:77px    /*171px*/
}

.six{
   position: sticky;
   border: 2px solid black;
   margin-top: 16px;
   margin-left:0px; 
   text-align: center;
   color:black; 
   background-color:#fbff00; 
   padding: 12px 5px;
   font-size:16px;
   width:90px;
   height:78px 
}
/*
.seven{
   border: 2px solid black;
   margin-top: 20px;
   margin-left:-8px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 0px;
   font-size:16px
    
}
*/
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
