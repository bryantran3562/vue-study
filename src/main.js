import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//######################################################
//BT - HTTP request - Step 1: To use HTTP request. You must install:
//a. npm install vue-resource.
//b. import VueResource from 'vue-resource'
//c. Vue.use(VueResource)
//######################################################

import VueResource from 'vue-resource'

// Use vue-resource package
Vue.use(VueResource);

//##########################################################################################
//BT - Filters: Step 1
//a. value: is the value infront of the | and your filter. So, we will update that value
//          and return it back. See ShowBlogs.vue
//The idea is not changing the data. But only how we want to output this data.
//###########################################################################################
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0,100) + "...";
});



new Vue({
  render: h => h(App),
}).$mount('#app')
