import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import persistentState from 'vue-persistent-state'; 
// var $store = require('store')

const initialState = {
  todos: []  // will get value from localStorage if found there
};

Vue.use(persistentState, initialState);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
