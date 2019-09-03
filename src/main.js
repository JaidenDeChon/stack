import Vue from 'vue';
import persistentState from 'vue-persistent-state';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import router from './router'

const initialState = {
  todos: [], // will get value from localStorage if found there
};

Vue.use(persistentState, initialState);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
