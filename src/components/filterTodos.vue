<template>
  <div class="m-5 text-2xl">
    Filters Todos:
    <select @change="filterTodos($event)" class="border border-black">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions(['filterTodos']),
}
</script>
