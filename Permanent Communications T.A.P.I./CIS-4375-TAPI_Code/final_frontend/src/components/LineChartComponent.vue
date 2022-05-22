<template>
  <canvas ref="myChart"></canvas>

</template>

<script>
//href the CHart export the props which are based 
//on the lables which are the startDate
//in the export is also the chartData that is based on data that 
//is the timespent that is shown on the line graph
import Chart from "chart.js";

export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  async mounted() {
   
    console.log(this.chartData);
    await new Chart(this.$refs.myChart, {
      type: "line",
      data: {
        labels: this.label,
        datasets: [
          {
            label:"Time Spent in Hours",
            backgroundColor: 'rgba(255, 0, 0, 0.8)',
            data: this.chartData,
            fill: false,
            borderColor: 'rgba(0, 34, 255, 0.8)',
            tension:0.1,
            pointRadius:10,      
            pointBorderWidth: 3,
            borderWidth: 5,
            
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: 25,
              },
            },
          ],
          xAxes:[
            {
                ticks: {
                beginAtZero: true,
                fontSize: 25
              },
            },
          ],
        },
      },
    });
  },
};
</script>