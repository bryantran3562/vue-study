<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">
    <!-- BT - Step4 - Nested Locally:
        a. Finally, add your new component here.
    -->
    <Ninja></Ninja>
  </div>
</template>

<script>

//#####################################################################################################################
//BT - Refs: Step1: The idea of this is that - you can get a lot of the details of a certain html element if you attached
//           to it with a keyword: ref = "some_name". Then you can use the some_name to look at the detail of that
//           html element. See Ninja.vue
//#####################################################################################################################
// BT - Step2 - Nested Locally:
//a. Import your new component here with import statement

import Ninja from '@/components/Ninja';

export default {
  name: 'App',
  //BT - Step3 - Nested Locally:
  //a. Include your nested component here.
  components: {
    Ninja
  }
}
</script>

<style>

</style>
