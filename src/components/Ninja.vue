<template>
<!-- BT - All of your new component consisted of 3 main part:
          a. <template></template> This is where your html part is at
          b. <script></script> This is where you can control the data from here to your template html
          c. <style></style> This is where you can do your style css
 -->
 <!-- BT - You can only have a single <div></div> in your template. All other must be nested inside this root <div></div> -->

  <div>
    <h1>{{ name }}</h1>
    <!-- BT - Refs - Step 2:
          You just need to attach to it with ref="some_name" 
    -->
    <input ref="input" type="text" />
    <button @click="getUserInput()">Click Me</button>

  </div>
</template>

<script>
export default {

  data(){

    return {
        name: 'HelloWorld',
    }
  },
  methods: {
    getUserInput: function(){

      // BT - Refs - Then you can access that element with all the details. Then you can access each of the property.
      //console.log(this.$refs);
      console.log(this.$refs.input.value);
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
