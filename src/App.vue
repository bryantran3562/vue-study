<template>

  <div id="app">

    <!-- BT - Props - Step3:
    Then pass your data here to your child component.
    Notes: If you don't use v-bind, then it just pass the data as a string. You
           need to use v-bind to send the data that you have defined in the data() property.
     -->
    <Ninja v-bind:Ninja="Ninja"></Ninja>
  </div>
</template>

<!--##########################################################################
BT - Lesson on Props.
     Sending data from the parent to the child.
     VERY IMPORTANT: 
     a. Primitive types: boolean, string, numbers.
     b. Reference type: array, objects.
     If you pass Reference type, you change the data in the child it will 
     effected other child as well. However, the primitive does not.
###############################################################################-->
<script>


import Ninja from '@/components/Ninja';

export default {
  name: 'App',

  components: {
    Ninja
  },
  // BT - Props - Step 2:
  //Define your data that you want to pass down to your child component.
  data(){
    return {
      Ninja: ['item1','item2']
    }
  }
}
</script>

<style>

</style>
