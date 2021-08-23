<template>
  <div class="home">
    <AddTodo />
    <filterTodos />
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src

import Todos from '../components/Todos.vue'
import AddTodo from '../components/addTodo.vue'
import filterTodos from '../components/filterTodos.vue'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    filterTodos,
  },
}
</script>
