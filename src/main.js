import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

//######################################################
//BT - HTTP request - Step 1: To use HTTP request. You must install:
//a. npm install vue-resource.
//b. import VueResource from 'vue-resource'
//c. Vue.use(VueResource)
//######################################################

import VueResource from 'vue-resource';

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


//##########################################################################################
//BT - Routing:
//a. Install router: npm install vue-router.
//b. import the router.
//c. use it.
//d. Register it.
//e. Add to current Vue.
//f. Create a file named: routes.js to contain all routes for easier maintaince.
//##########################################################################################

//b. import
import VueRouter from 'vue-router';

import Routes from './routes/routes';

//c. use it

Vue.use(VueRouter);



//d. Register it
const router = new VueRouter({
  //BT - Instead of create all the routes here, we put it in separate files. /routes/routes.js
  //     Then add it in here. And also import the path to the routes.js file too.
  routes: Routes,
  //BT - This will get rid of the # in the url
  mode: 'history'
});




new Vue({
  render: h => h(App),
  //e. Added it to current Vue
  router: router,
}).$mount('#app')
