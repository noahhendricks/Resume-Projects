/<!-- App.vue -->

<!-- Bread Of Life Web Application Project -->

<!-- Group 16 -->
<!-- Thomas Peters, Noah Hendricks, Muhib Maknojiya -->
<!-- CIS 4339 Professor Lindner -->

<!-- SOurce Page for the entire production of the vue app -->
<template>
  <div>
    <header-temp/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<!-- Brings all header components in the nav bar together and calls them -->
<script>
import headerTemp from './components/header'

//Allows for the ability for the app to be exported
export default {
  name: 'App',
  components: {
    'header-temp': headerTemp
  }
}
</script>
