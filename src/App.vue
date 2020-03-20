<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">


    <Ninja>

    <!-- BT - Slot - Step1:
         a. With in this child component tag, insert a slot with your template html that you want to pass
            to your child component.
         b. If you also give it a name, then in the child component you can refer to it. This is so that 
            you can have different html templates that you want to pass to your child and it can put that
            html template anywhere in their own html template by refer to the name.
    -->

    <!-- <template slot="template_from_parent_1"> -->
    <template v-slot:template_from_parent_1>
    <h1>Data from Parent 1</h1>
    </template>

    <template v-slot:template_from_parent_2>
    <h1>Data from Parent 2</h1>
    </template>


    </Ninja>

  </div>
</template>

<script>
//########################################################
// BT - Slots: Passing data to child with html.
//########################################################

import Ninja from '@/components/Ninja';

export default {
  name: 'App',

  components: {
    Ninja
  }
}
</script>

<style>

</style>
