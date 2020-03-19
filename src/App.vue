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
