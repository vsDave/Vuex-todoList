<template>
  <div>
    <div class="mx-5">
      <h3 class="my-4 text-3xl font-bold">Add todo</h3>
      <form class="flex">
        <input
          class="flex-1 block text-2xl border border-black"
          type="text"
          v-model="title"
          placeholder=" Add todo..."
        />
        <input
          class="p-4 text-2xl bg-indigo-400"
          v-if="this.title"
          @click="onsubmit"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onsubmit(e) {
      e.preventDefault()
      this.addTodo(this.title)
      this.title = ''
    },
  },
}
</script>

<style></style>
