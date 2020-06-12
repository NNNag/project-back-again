import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component("HelloWorld", require('./components/HelloWorld.vue').default);
Vue.component("alert", require('./components/Alert.vue').default);
Vue.component("todo", require('./components/ToDo.vue').default);

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<button v-on:click="count++">you clicked me {{count}} times</button>`
})

new Vue({
  render: h => h(App),
}).$mount('#app')
