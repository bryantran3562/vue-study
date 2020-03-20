import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//############################################################################################################################
//BT - Lesson: BUS - Step 1:
//a. Initialize a new Vue instance here in the main.js
//const bus = new Vue();
//export default bus;
//
//############################################################################################################################

const bus = new Vue();
export default bus;

new Vue({
  render: h => h(App),
}).$mount('#app')
