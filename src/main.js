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
//BT - Filters - Directive - register here for globally used. Any component can just use it.
//###########################################################################################
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

// Vue.filter('snippet', function(value){
//   return value.slice(0,100) + "...";
// });



new Vue({
  render: h => h(App),
}).$mount('#app')
