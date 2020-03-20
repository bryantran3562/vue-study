<template>
<!-- BT - This is a ROOT component file - where you would need to nest all of your other components -->
  <div id="app">
    <!-- BT - Event: Step2:
    - On the Root Component you must listen to the events on the child component that is going to emit
      an event which is Ninja.vue
    - v-on:ChangeTitle: Listenning on the event called: ChangeTitle. This is the name of the emit event from the child component.
    - ChangeTitle($event): Function to re-act to the received events with the $event param.
      -->
    <Ninja v-bind:title="title" v-on:ChangeTitle="ChangeTitle($event)"></Ninja>
    <hr>
    <Ninja2 v-bind:title="title"></Ninja2>
  </div>
</template>

<script>


import Ninja from '@/components/Ninja';
import Ninja2 from '@/components/Ninja-2';

export default {
  name: 'App',

  components: {
    Ninja,
    Ninja2
  },
  data(){
    return {
      title: 'Data from Parent'
    }
  },
  methods: {
    // BT - Events - This Root component then run this function to broad cast or props it down to other child components,
    //               if it wants to or it can use it for it owns and not passing it down to other childs.
    //Notes: You can use bus event to pass the data between the child components without going through the Root Component.
    //       See Step6-Bus Event branch
    ChangeTitle: function(event){
      // this.title = event
      console.log(event)
    }
  }
}
</script>

<style>

</style>
