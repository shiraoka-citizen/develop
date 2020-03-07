import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'

import Archive from '@/components/Archive'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/',      component: Archive }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')
