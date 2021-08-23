import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      // {
      //   id: 1,
      //   title: 'Todo One',
      // },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )
      console.log(response.data)
      commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title,
        }
      )
      console.log(response.data)
      commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
      console.log(id)
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

      commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
      console.log(e, 'thisis e')
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      )
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      )
      commit('setTodos', response.data)
    },
  },
  modules: {},
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
  },
})
