import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// BT - Step2 - Nested Globally:
// a. import your new component here with the import statement.
// b. Register your new component using Vue.component.
// c. 'Ninja': This is the name of your new component.
//     Ninja: Name of your component file.vue

//import Ninja from '@/components/Ninja';

//Vue.component('Ninja', Ninja);

new Vue({
  render: h => h(App),
}).$mount('#app')
