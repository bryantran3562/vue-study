<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">
    <!-- BT - Nested component:
              Step3: Add your nested component here.
              This is your nested component called - HelloWorld.vue  -->
    <HelloWorld />
  </div>
</template>

<script>
// BT - Nested component:
//Step1: import your nested component here including the path.
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //BT - Nested component:
  //Step2: Include your nested component here.
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
