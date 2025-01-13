<script setup>
import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'
</script>

<template>
  <!--  <Drawer />-->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />
    <div class="p-10">
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>
        <div class="relative">
          <img class="absolute left-3 top-3" src="/search.svg" alt="search" />
          <input
            class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
            placeholder="Поиск..."
            type="text"
          />
        </div>
      </div>
      <CardList />
    </div>
  </div>
</template>
<style scoped></style>
