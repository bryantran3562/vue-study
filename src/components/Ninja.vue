<template>
<!-- BT - All of your new component consisted of 3 main part:
          a. <template></template> This is where your html part is at
          b. <script></script> This is where you can control the data from here to your template html
          c. <style></style> This is where you can do your style css
 -->
 <!-- BT - You can only have a single <div></div> in your template. All other must be nested inside this root <div></div> -->

  <div>

    <!-- BT - Notice - The second html plate can place anywhere by refer to the name of the slot -->
    <slot name ="template_from_parent_2"></slot>
    <h1>{{ name }}</h1>
        <!-- BT - Slot - Step2: Refer it here -->
    <slot name ="template_from_parent_1"></slot>

  </div>
</template>

<script>
export default {

  data(){

    return {
        name: 'Ninja3',
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
