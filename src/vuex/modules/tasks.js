import axios from 'axios'
import { stringToUnixTimestamp } from '@/helpers/filters'

const base_url = 'http://localhost:3000/tasks'

export default {
  state: {
    tasks: []
  },
  actions: {
    getTasks ({ commit }) {
      axios
        .get(base_url)
        .then(r => r.data)
        .then(tasks => commit('GET_TASKS', tasks))
    },
    addTask ({ commit }, data) {
      const task = {
        name: data.name,
        due_date: stringToUnixTimestamp(data.due),
        created_at: stringToUnixTimestamp(new Date())
      }
      axios
        .post(base_url, task)
        .then(r => r.data)
        .then(task => commit('ADD_TASK', task))
    },
    removeTask ({ commit }, {index, id}) {
      axios
        .delete(`${base_url}/${id}`)
        .then(r => r.data)
        .then(() => commit('REMOVE_TASK', index))
    }
  },
  mutations: {
    GET_TASKS (state, tasks) {
      state.tasks = tasks
    },
    ADD_TASK (state, task) {
      state.tasks.push(task)
    },
    REMOVE_TASK (state, index) {
      // state.tasks = state.tasks.filter(task => task.id !== id)
      state.tasks.splice(index, 1);
    }
  },
  getters: {
    getTasks: state => state.tasks
  }
}
