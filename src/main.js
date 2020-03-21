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

//############################################################################################
// BT - Custom directive - Step 1:
//a. el: the element that you have the directive on.
//b. binding: pass in value in your custom directive.
//c. vnode: Not to worry
//d. Directive has the same life cycle hook as the Vue. We used bind life cycle hook.
//############################################################################################
Vue.directive('rainbow', {
  bind(el, binding, vnode){
      el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      binding;
      vnode;
  }
});

//############################################################################################
// BT - Custom directive with param input.
//############################################################################################

Vue.directive('theme', {
  bind(el, binding, vnode){
      //BT - We can check for what value has been passed into our directive named 'theme'. See
      //     showBlogs.vue

      if (binding.value == 'wide'){
          el.style.maxWidth = "1260px";
      } else if (binding.value == 'narrow'){
          el.style.maxWidth = "560px";
      }
      //BT - This is how to check the arg value passed into our directive.
      if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
      }
      vnode;
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')
