<template>
  <!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div id="home"  > <!-- :style="{'background-image':'url(https://hips.hearstapps.com/pop.h-cdn.co/assets/15/22/1600x2179/gallery-1432675837-1-choose.jpg?resize=980:*)'}"-->
    <HelloWorld  style="text-align: center; color:black;  margin-top: 100px" msg="Welcome to Piping International" />
  
  <img class="slide-image" :src="getImgUrl(images[0])" />
  <Slider />

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
        images:["team.jpeg","const.jpeg","project.jpeg","project1.jpeg","project2.jpeg"],
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
  color: #2c3e50;
  
}

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

  height:600px;

  width:70%

}
</style>
