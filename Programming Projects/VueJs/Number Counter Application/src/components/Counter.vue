<!-- Noah Hendricks -->
<!-- CIS 4339 - 14075 Homework 2, Fall 2021 -->
<!-- Part 3 SFC -->

<!-- Title of webpage in the tab -->
<!-- Links website together -->
<!-- Template for vue app instance -->
<template>
  <div>
    <title>Homework 2: Counter</title>
    <h1>Counter Exercise</h1>
    <div id = "c">
      <article class="counter">
        <h2>{{odd_even}}</h2>
        <p class="count">{{counter}}</p>
        <!-- Counter incrementation and decrementation -->
        <!-- Buttons are created for the functionality of increment, decrement, and reset -->
        <button v-on:click="increment(); even_or_odd()">Increment by 1</button>
        <button v-on:click="decrement(); even_or_odd()">Decrement by 1</button>
        <button v-on:click="reset(); even_or_odd()">Reset counter</button>
        <div class="input-group">
          <label for="amount">Amount</label>
          <input type="number" v-model="counter" v-on:input="even_or_odd()" name="amount">
        </div>
      </article>
    </div>
 </div>

</template>

<!-- Vue create app instance is made and called -->
<!-- This is where all the functionality lies for the increment, decrement, and reset buttons -->
<!-- Also this is where the user receives feedback from webpage -->
<script>
export default {
        data() { 
            return{
              counter: 0,
              odd_even: "The count is even!",
            } 
        },
        methods: {
          increment: function () {
            this.counter = this.counter + 1
          },
          decrement: function () {
            this.counter = this.counter - 1
          },
          reset(){
            this.counter = 0
          },
          even_or_odd(){
            var remainder = this.counter % 2
            if (remainder == 0){
              this.odd_even = "The count is even!"
            }
            else{
              this.odd_even = "The count is odd!"
            }
          }
        }
      }

</script>

<!-- Counter HW2 vue app CSS code -->
<style>
.counter {
    border: 3px solid #222;
    border-radius: 8px;
    margin: 30px;
    padding: 30px;
    text-align: center;
    background: #eee;
    box-sizing: border-box;
  }
  
  .count {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 15px;
  }
  
  .input-group {
    display: block;
    margin-top: 30px;
  }
  
  button {
    font-size: 1rem;
    padding: 10px;
  }
  
  h1 {
    text-align: center;
  }
  
  h2 {
    margin-top: 0;
  }


</style>
