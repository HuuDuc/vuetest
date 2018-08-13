import axios from 'axios'
import { stringToUnixTimestamp } from '@/helpers/filters'

const base_url = 'http://localhost:3000/posts'

export default {
  state: {
    posts: [],
    postsError: false,
  },
  getters: {
    POSTS: state => state.posts,
    postsError: state => state.postsError
  },
  mutations: {
    GET_POSTS_INIT (state) {
      state.postsError = false
    },
    GET_POSTS (state, payload) {
      state.posts = payload
      state.postsError = false
    },
    GET_POSTS_ERROR (state) {
      state.postsError = true
    },
    ADD_POST (state, payload) {
      state.posts.push(payload)
    },
    REMOVE_POST (state, payload) {
      state.posts.splice(payload, 1);
    }
  },
  actions: {
    getPosts ({ commit }) {
      commit('GET_POSTS_INIT')
      axios
        .get(base_url)
        .then(r => r.data)
        .then(posts => commit('GET_POSTS', posts))
        .catch(() => commit('GET_POSTS_ERROR'))
    },
    addPost ({ commit }, data) {
      const post = {
        title: data.title,
        summary: data.summary,
        content: data.content,
        created_at: stringToUnixTimestamp(new Date())
      }
      axios
        .post(base_url, post)
        .then(r => r.data)
        .then(post => commit('ADD_POST', post))
    },
    removePost ({ commit }, {index, id}) {
      axios
        .delete(`${base_url}/${id}`)
        .then(r => r.data)
        .then(() => commit('REMOVE_POST', index))
    }
  }
}
