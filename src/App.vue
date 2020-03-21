<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">

    <!-- <addBlog></addBlog> -->
    <showBlogs></showBlogs>
 
  </div>
</template>

<script>
// BT - Step2 - Nested Locally:
//a. Import your new component here with import statement

//import addBlog from '@/components/addBlog';
import showBlogs from './components/showBlogs.vue';

export default {
  name: 'App',
  //BT - Step3 - Nested Locally:
  //a. Include your nested component here.
  components: {
    //addBlog,
    showBlogs
  }
}
</script>

<style>

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
