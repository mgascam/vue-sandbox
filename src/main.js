import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
window.clients = [
  {
    id: 1,
    name: 'Emp 1',
    email: 'some@server.com',
    disabled: false
  },
  {
    id: 2,
    name: 'Emp 1',
    email: 'some@server.com',
    disabled: false
  },
  {
    id: 3,
    name: 'Emp 1',
    email: 'some@server.com',
    disabled: true
  }
];
new Vue({
  render: h => h(App)
}).$mount('#app')
