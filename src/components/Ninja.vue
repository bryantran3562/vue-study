<template>
<!-- BT - All of your new component consisted of 3 main part:
          a. <template></template> This is where your html part is at
          b. <script></script> This is where you can control the data from here to your template html
          c. <style></style> This is where you can do your style css
 -->
 <!-- BT - You can only have a single <div></div> in your template. All other must be nested inside this root <div></div> -->

  <div>
    <h1>{{ name }}</h1>
    <p>{{ title }}</p>
    <button @click="ChangeTitle()">Change Title</button>


  </div>
</template>

<!-- ############################################################################################################################
BT - Lesson: BUS: See step 1 in main.js - Step 2: import bus into both of your child component that you want to communicated
                                                  between them. See Ninja-2.vue

#################################################################################################################################-->

<script>
import bus from '../main.js';

export default {

  data(){

    return {
        name: 'Ninja 1',
        title: 'Data in Ninja'
    }
  },

  methods: {
    ChangeTitle: function(){
        bus.$emit('Data Change','This data is from Ninja');
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
