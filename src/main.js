// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store/index.js'
// import Home from './components/HelloFromVux'
import router from './router/index.js'
import './assets/font/iconfont.css'


// 当 Toast 为插件使用时需要如下声明
import {ToastPlugin} from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)


// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')



store.commit("reflashRH");
