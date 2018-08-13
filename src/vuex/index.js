import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    modules: {
      posts,
      tasks
    }
  }
)
