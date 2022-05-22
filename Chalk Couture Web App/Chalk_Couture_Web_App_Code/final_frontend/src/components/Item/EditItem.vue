<template>
    <div class="row justify-content-center"> 
        <div class="col-lg-12">
        <br><br><p><button class="btn goback" @click="$router.go(-1)">Go Back!</button></p>
            <div style="margin-left:500px; margin-top: -50px" >
            <u class="text-center" style="font-size:200%; font-weight:bold;">View / Update Chalk Item</u>
            </div><br>
            <strong style ="font-size:150%;">Chalk Item Information</strong>
            <p style="color:red; font-size:125%; font-weight:bold">Required Fields *</p>
            <form @submit.prevent="handleUpdateForm">
                
                <div class="form-group row">

                <div class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">SKU.</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <input size="13"  type="text"  class="form-control" id="inputProjectNotess" minlength="2" maxlength="12"  placeholder="C2224328"  rows="1" v-model="item.item_ID" required>
                </div>




                <div class="form-group col-lg-auto" style="margin-left: 30px;">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">Name</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                     <input size="31"  type="text"  class="form-control" id="inputProjectNotes" minlength="2" maxlength="55"  placeholder="I'm Outdoorsy!"  rows="1" v-model="item.item_name" required>
                    
                </div>

                
                <div style="margin-left:35px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Type</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <select class="form" style="width:105px; height: 35px" v-model="item.item_class" required> 
                     <option  v-for="item_class in item_classes" v-bind:key="item_class">{{item_class}}</option>
                    </select>
                </div>
                
                <div style="margin-left: -60px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Retail Price</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$100.00" minlength="0" maxlength="11" size="5"  v-model="item.item_price" required> <!-- pattern="[$][0-9]{1,3}[,][0-9]{3}[.][0-9]{2}"-->
                </div>

                 <div style=" margin-left:35px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputStepDuration">Amount</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <input style="text-align:right" type="number" placeholder="11" class="form-control" size="4" id="inputStepDuration" minlength="0" maxlength="3" pattern="[0-9]{0,2}" v-model="item.item_count" required >
                    
                </div>

                <div style="margin-left: 30px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectEstimate">Total Retail Value</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <br>
                    <input  style="text-align:right;" type="text" class="form-control" id="inputProjectEstimate" placeholder="$1,000.00" minlength="0" maxlength="8" size="8"   v-model="item.item_total_value" required>
                </div>

                </div>

                <div style= "margin-top: 65px" class="form-group row">
                <div style="margin-left: 0px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Category</label>
                    <br>
                    <select class="form" style="width:215px; height: 35px" v-model="item.item_category"> 
                     <option  v-for="item_category in item_categories" v-bind:key="item_category">{{item_category}}</option>
                    </select>
                </div>

                
                <div style="margin-left: 65px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Style</label>
                    <br>
                    <select class="form" style="width:135px; height: 35px" v-model="item.item_style"> 
                     <option  v-for="item_style in item_styles" v-bind:key="item_style">{{item_style}}</option>
                    </select>
                </div>

                <div style="margin-left: -25px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Size</label>
                    <br>
                    <select class="form" style="width:125px; height: 35px" v-model="item.item_size"> 
                     <option  v-for="item_size in item_sizes" v-bind:key="item_size">{{item_size}}</option>
                    </select>
                </div>

                <div style="margin-left: -35px;" class="form-group col-lg-auto">
                    <label style ="font-size:14pt; text-align:left;" for="inputProjectName">Color</label>
                     <input size="10"  type="text"  class="form-control" id="inputProjectNotes" minlength="2" maxlength="55"  placeholder="Purple"  rows="1" v-model="item.item_color">
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Use</label>
                    <br>
                    <select class="form" style="width:135px; height: 35px" v-model="item.item_use"> 
                     <option  v-for="item_use in item_uses" v-bind:key="item_use">{{item_use}}</option>
                    </select>
                </div>

                <div style="margin-left: -35px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Accessory</label>
                    <br>
                    <select class="form" style="width:135px; height: 35px" v-model="item.item_accesory"> 
                     <option  v-for="item_accesory in item_accesories" v-bind:key="item_accesory">{{item_accesory}}</option>
                    </select>
                </div>
                </div>



                <div style= "margin-top: 65px" class="form-group row">
                <div style="text-align:left" class="form-group col-lg-5">
                    <label style ="font-size:14pt" for="inputPhaseNotes">Comments</label>
                    <textarea cols="89" type="text" class="form-control" placeholder="Additional Notes" id="inputPhaseNotes" minlength="0" maxlength="255"   rows="5" v-model="item.item_comment" ></textarea>
                    <br>
                </div>

                <div style= "margin-left: 45px; text-align:left; margin-top: 0px" class="form-group col-lg-auto">
                    <label style ="font-size:14pt">Date Entered</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label>
                    <datepicker :value="new Date()"></datepicker>
                     <input type="date"  class="form-control" v-model="item.item_date_entered" required>
                </div>

                <div style="margin-left: 35px;" class="form-group col-lg-2">
                    <label style ="font-size:14pt ">Status</label>
                    <label style ="font-size:14pt; color:red; font-weight:bold"> * </label><br>
                    <select class="form" style="width:125px; height: 35px" v-model="item.item_status" required> 
                     <option  v-for="item_status in item_statuss" v-bind:key="item_status">{{item_status}}</option>
                    </select>
                </div>

                </div>





                  <div >
                         <button class="btn btn-success mt-3" style ="font-size:14pt">Update</button>
                  </div>


                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>
               
            </form>
        </div> 
    </div> 
</template>


<script>
import axios from "axios";

export default {
    data() {
        return {
            errors: [],
            item: { 

            item_ID: this.$route.params.id

            },//drop down lists found from createcomponent, unchanged of course
                //static data for dropdown lists
                item_classes: ['Transfer', 'Paste', 'Ink', 'Surfaces', 'Kits', 'Accessories', 'Catalog', 'Wood', 'Custom', 'Other'],
                item_categories: ['Family & Togetherness', 'Around The House', 'Occasions', 'Activities & Adventure', 'Words & Wit', 'Designs & Accents', 'Chalk Stories', 'Monogram', 'Watts of Love', 'Chalkboard', 'Wood', 'Metal', 'Textiles', 'Other'],
                item_styles: ['Framed', 'Unframed', 'Magnetic', 'Reclaimed', 'Farm House', 'Cutouts', 'Other'], 
                item_sizes: ['5x7', '8.5x11', '12x18', '18x18', '18x24', 'Jars', 'Palette Packs', 'Singles', 'Small', 'Medium', 'Large', 'Extra Large', 'Other' ], 
                item_uses: ['One and Done', 'Multi Layer', 'Cut Apart', 'Other'],
                item_accesories: ['Tools', 'Organization', 'Other'],
                item_types: ['Available', 'Unavailable'],
                item_statuss: ['In-Stock', 'Running Low', 'Out-of-Stock'],
            }

    },
    created() {//Edits based on the item ID already entered
        let apiURL = `http://localhost:27017/item/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.item = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.item.item_name){

                    this.errors.push("No Duplicated Item Name.");
                
                }

               

            
            let apiURL = `http://localhost:27017/item/${this.$route.params.id}`;
            //pulls from back end of item ID to get all data pertaining to client
            axios.put(apiURL, this.item).then((res) => {
                console.log(res)
                this.$router.push('/viewItem')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
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