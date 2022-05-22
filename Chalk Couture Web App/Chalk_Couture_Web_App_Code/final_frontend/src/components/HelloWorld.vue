<template>
<!--In the template area will be used to add html tags as well as text  -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
  </div>
</template>

<script>
//inside the script in the export
//passing a named and props msg from the Home.vue to have a link 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
  

}
ul {
  list-style-type: none;
  padding: 0;
 
}
li {
  display: inline-block;
  margin: 0 10px;
  
}
a {
  color: #42b983;
  
}

</style>
