<!-- Noah Hendricks -->
<!-- CIS 4339 - 14075 Homework 2, Fall 2021 -->
<!-- Part 3 SFC Render -->

<!-- Calls the Vue Counter -->
<template>
<div>
  <Counter/>
</div>
</template>

<!-- import the single file component from the Counter.vue file -->
<script>
import Counter from './components/Counter.vue'
export default {
  components: {
    Counter
  }
}
</script>


