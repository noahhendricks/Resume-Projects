<!-- External_Resources.vue -->

<!-- This Page is for all of the additional support services that bread of life provides -->
<!-- Links and Phone numbers are hardcoded for user interaction -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <b-alert show>Additional Support Services</b-alert>
    
<!--
    <p>
There are a total of NINE additional resources regarding Bread of Life.
    </p>
-->

    <h3>Houston Food Bank</h3>
    <ul>
      <li><a href="https://www.houstonfoodbank.org" target="_blank" rel="noopener">www.houstonfoodbank.org</a></li>
      <li><p> Phone Number: 713-223-3700 </p></li><br>
    </ul>

    <h3>Harris County Housing Authority</h3>
    <ul>
      <li><a href="https://www.hchatexas.org" target="_blank" rel="noopener">www.hchatexas.org</a></li>
      <li><p> Phone Number: 713-578-2100 </p></li><br>
    </ul>

    <h3>Harris Health System</h3>
    <ul>
      <li><a href="https://www.harrishealth.org" target="_blank" rel="noopener">www.harrishealth.org</a></li>
      <li><p> Phone Number: 713-566-6509 </p></li><br>
    </ul>

    <h3>Metro Lift (Transportation)</h3>
    <ul>
      <li><a href="https://www.ridemetro.org/pages/metrolift" target="_blank" rel="noopener">www.ridemetro.org/pages/metrolift</a></li>
      <li><p> Phone Number: 713-225-0119 </p></li><br>
    </ul>

    <h3>Lone Star Legal Aid</h3>
    <ul>
      <li><a href="https://www.lonestarlegal.blog" target="_blank" rel="noopener">www.lonestarlegal.blog</a></li>
      <li><p> Phone Number: 713-652-0077 </p></li><br>
    </ul>

    <h3>2-1-1 Texas</h3>
    <ul>
      <li><a href="https://www.211texas.org" target="_blank" rel="noopener">www.211texas.org</a></li><br>
    </ul>

    <h3>BakerRipley</h3>
    <ul>
      <li><a href="https://www.bakerripley.org" target="_blank" rel="noopener">www.bakerripley.org</a></li><br>
    </ul>

    <h3>Houston Responds</h3>
    <ul>
      <li><a href="https://www.resources.houstonresponds.org" target="_blank" rel="noopener">www.resources.houstonresponds.org</a></li><br>
    </ul>

    <h3>Houston Arts Alliance</h3>
    <ul>
      <li><a href="https://www.ready.haatx.com" target="_blank" rel="noopener">www.ready.haatx.com</a></li><br>
    </ul>

  </div>
</template>

<!--
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Reference Link: https://griddy.io/ -->
<style scoped>
 .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 40px;
    grid-row-gap: 45px;
    justify-items: start;
    align-items: start;
 }
</style>

