<script setup>
defineProps({
  imageUrl: String,
  description: String,
  title: String
})
</script>


<template>
  <div class="w-72 mx-auto flex flex-col items-center text-center">
    <img
      height="80"
      width="80"
      :src="imageUrl"
      alt="imageUrl"
    />
    <h2 class="mt-4 text-2xl font-medium" >{{ title }}</h2>
    <p class="text-gray-400 mt-2">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>
