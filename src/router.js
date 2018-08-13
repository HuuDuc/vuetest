import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Chart from './views/Chart.vue'
import Tasks from './views/Tasks.vue'
import Posts from './views/Posts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/tasks',
      name: 'task',
      component: Tasks
    },
    {
      path: '/posts',
      name: 'post',
      component: Posts
    }
  ]
})
