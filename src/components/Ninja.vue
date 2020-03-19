<template>
<!-- BT - All of your new component consisted of 3 main part:
          a. <template></template> This is where your html part is at
          b. <script></script> This is where you can control the data from here to your template html
          c. <style></style> This is where you can do your style css
 -->
 <!-- BT - You can only have a single <div></div> in your template. All other must be nested inside this root <div></div> -->

 <!-- BT - Nested component - There are two ways that you can do this:
           a. Nested locally.
           b. Nested globally.
 -->
 <!-- BT - Step1 - Nested Globally:
           a. Create you new component.
           b. Go to main.js and register your new component there
 -->
  <!-- BT - Step1 - Nested Locally:
           a. Create you new component.
           b. Go to App.vue(Root component file) and register your new component there
 -->
  <div>
    <h1>{{ name }}</h1>

  </div>
</template>

<script>
export default {

  data(){

    return {
        name: 'HelloWorld',
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
