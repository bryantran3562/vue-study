<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">

    <!-- <addBlog></addBlog> -->
    <!-- <showBlogs></showBlogs>
    <list-blogs></list-blogs> -->

    <app-header></app-header>

    <router-view></router-view>
 
  </div>
</template>

<script>
// BT - Step2 - Nested Locally:
//a. Import your new component here with import statement

//import addBlog from '@/components/addBlog';
//import showBlogs from './components/showBlogs.vue';
//import listBlogs from './components/listBlogs.vue';

import header from './components/header.vue';

export default {
  name: 'App',
  //BT - Step3 - Nested Locally:
  //a. Include your nested component here.
  components: {
    //addBlog,
    //showBlogs,
    //listBlogs,
    'app-header': header
  }
}
</script>

<style>

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
