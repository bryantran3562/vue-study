<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">

    <!-- <Ninja></Ninja>
    <Ninja2></Ninja2> -->

    <!-- BT - Step 1: Just need to use the component directive and bind it to the dynamic variable.
                      Remember, to make a dynamic variable, we must declared it in the data() section,
    -->
    <component v-bind:is="component"></component>

    <!-- BT - These are dynamicly to load a right components -->
    <button @click="component = 'Ninja'">
      change component 1
    </button>

    <button @click="component = 'Ninja2'">
      change component 2
    </button>

  </div>
</template>

<script>
//##############################################################################################
// BT - Dynamic Component: The idea is that - We want to dynamicly to display a different
//                         component based on user input.
//###############################################################################################

import Ninja from '@/components/Ninja';
import Ninja2 from '@/components/Ninja-2';

export default {
  name: 'App',

  components: {
    Ninja,
    Ninja2,
  },
  data(){
    return {
      component: 'Ninja'
    }
  },

}
</script>

<style>

</style>
