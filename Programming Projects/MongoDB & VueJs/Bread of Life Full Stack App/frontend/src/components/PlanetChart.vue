<!-- PlanetChart.vue -->

<!-- Professor Lindner's class example code showing how to use a chart -->
<!-- This was the planet-chart demo from class -->

<template>
  <div>
    <!-- canvas element for chart -->
    <canvas id="planet-chart"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js'
import planetChartData from '../planet-data.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  //establish Chart object after mounting the component
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>
