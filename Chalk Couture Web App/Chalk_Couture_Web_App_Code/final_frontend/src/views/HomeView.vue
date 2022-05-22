<template>
  <!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div id="home"  > <!-- :style="{'background-image':'url(https://hips.hearstapps.com/pop.h-cdn.co/assets/15/22/1600x2179/gallery-1432675837-1-choose.jpg?resize=980:*)'}"-->

  <b><HelloWorld  style="text-align: center; color:black; font-family:Algerian;  margin-top: 70px" msg="Welcome to Creations Galore  😊" /></b>

  <!--<p><button class="goback" @click="$router.go(-1)">Go Back!</button></p>-->
  <img class="slide-image" :src="getImgUrl(images[0])" />
  <Slider />
  
    <br><br><p>COPYRIGHT:  © Noah Hendricks</p>

  </div>
</template>



<script>
// @ is an alias to /src
//Calling the component HelloWorld create vue instance
import HelloWorld from "@/components/HelloWorld.vue";
// import Slider from "./SliderComponent.vue";

export default {
  name: "myHome",
  data(){
    return{
        images:["chalk_hm_image1.png","chalk_hm_image2.png","chalk_hm_image3.png","chalk_hm_image4.png","chalk_hm_image7.png","chalk_hm_image6.png"],
    };
  },
  components: {
    HelloWorld,
    // Slider,
  },
  watch: {

    getImgUrl() {},

  },

  mounted() {

    window.setInterval(() => {

      this.slide();

    }, 5000);

  },
  methods:{
getImgUrl(im) {

      return require("../assets/" + im);

    },

    slide() {

      let first = this.images.shift();

      this.images = this.images.concat(first);

    },
  }
  
};

</script>



<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.container {
  max-width: 1320px;
  max-height: 71.8px;
}

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0000; /*#2c3e50*/
  
}
/*
.goback{
    font-size:20px; 
    border: 2px solid black;
    color: rgb(255, 0, 0); 
    background-color: #f8f8f8;
    font-weight:bold; 
    margin-left:-1175px; 
    margin-top: -1000px;
}*/
#image {
  max-width: 52.39px;/* 70*/
  max-height: 50px;/* 50*/
}

#image3 {
  max-width: 48.75px;/* 70*/
  max-height: 50px;/* 50*/
}

#image2 {
  max-width: 150px;
  max-height: 50px;
}
.slide-image {

  height:525px;

  width:70%

}
</style>
