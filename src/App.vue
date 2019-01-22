<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Parent :items="formatted"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
/* eslint-disable */
import Parent from './components/Parent.vue';
export default {
  name: 'app',
  components: {
    Parent
  },
  data: function() {
    return {
      tooltipTitle: 'it has an {email}'
    }
  },
  created: function(){
  },
  computed: {
    formatted: function() {
      return window.clients.map(client => {
        return {
          ...client,
          disabledReason: client.disabled ? this.tooltipTitle.replace('{email}', client.email): ''
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
