<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">
    <h1>{{ title }}</h1>
    <Ninja></Ninja>
    <hr>
    <Ninja2></Ninja2>
  </div>
</template>

<script>


import Ninja from '@/components/Ninja';
import Ninja2 from '@/components/Ninja-2';


export default {
  name: 'App',

  components: {
    Ninja,
    Ninja2
  },
  data(){
    return {
      title: 'Data from Parent'
    }
  },
  methods: {

    }
  
}
</script>

<style>

</style>
