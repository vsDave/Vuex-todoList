<template>
  <div>
    <h3 class="m-5 text-4xl font-bold text-center">Todos</h3>
    <span class="m-5 text-xl font-bold">Double click to mark as complete</span>

    <div
      class="grid gap-5 m-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 todos"
    >
      <div
        v-for="(todo, index) in allTodos"
        :key="index"
        class="p-4 text-xl text-white bg-indigo-700"
      >
        {{ todo.title }}

        <i
          @click="deleteTodo(todo.id)"
          class="cursor-pointer fas fa-trash-alt"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
  },

  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos()
  },
}
</script>
