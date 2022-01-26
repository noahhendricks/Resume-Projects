<!-- header.vue -->

<!-- creation of the nav bar, style, image sourcing, colors, and linkage for all header components/values -->
<template>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/"><span class="navbar-brand"><img src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_auto/https://breadoflifeinc.org/wp-content/uploads/2020/07/cropped-Bread_Logo_Spon_3-1.png" 
            alt="logo" class="navbar-logo"></span></router-link></li>

        <!-- Home Page -->
        <li class="nav-item"><router-link class="nav-link" to ="/">Bread of Life</router-link></li>

        <!-- Applicants Page -->
        <li class="nav-item"><router-link class="nav-link" to ="/Applicants">Applicants</router-link></li>

        <!-- Events Page -->
        <li class="nav-item"><router-link class="nav-link" to ="/Events">Events</router-link></li>

        <!-- Register Page -->
        <li class="nav-item"><router-link class="nav-link" to ="/Register">Register</router-link></li>

        <!-- External Resources Page -->
        <li class="nav-item"><router-link class="nav-link" to ="/ExternalResources">External Resources</router-link></li>

        <!-- About Page -->
        <li class="nav-item"><router-link class="nav-link" to ="/About">About</router-link></li>
      </ul>
    </nav>
</template>
<script>

// exports the headerTemp to other files to connect them all
export default {
        name: 'headerTemp'
}
</script>