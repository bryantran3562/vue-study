<template>

  <div>
    <h1>{{ name }}</h1>
    <!-- BT - Props - Step 4
    Then access your props as usual
     -->
    <ul v-for = "item in Ninja" :key="item.index">
      <li>
        This {{ item }}
      </li>
    </ul>
  {{ Ninja }}
  </div>
</template>

<script>
// BT - Props: Step 1:
//a. Define your props property in here to receive the data from the parent. See App.vue
export default {

  props: {
    // Ninja: is the name of the variable will be contained the data from the parent.
    'Ninja': {
      //BT - type: Array - is a type checking to make sure we are expecting an array data from the parent.
      type: Array
    }
  },

  data(){

    return {
        name: 'HelloWorld',
    }
  }


}
</script>

<style scoped>

</style>
