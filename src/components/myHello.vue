<script setup>
import {ref} from 'vue'

let count = ref(0)

const increment = () => {
  count.value++
}

const updateCount = (e) => {
  count.value = Number(e.target.value)
}

</script>

<template>
  <h1>{{count}}</h1>
  <button @click="increment">+</button>

  <input @input="updateCount">
</template>

<style scoped>


</style>
