<script setup></script>

<template>
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <header class="flex justify-between border-b border-slate-300 px-10 py-8">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul class="flex items-center gap-10">
        <li class="flex items-center gap-3 text-gray-500">
          <img src="/cart.svg" alt="Cart" />
          <b>1205 руб.</b>
        </li>
        <li class="flex items-center gap-3">
          <img src="/heart.svg" alt="Cart" />
          <b>Закладки</b>
        </li>
        <li class="flex items-center gap-3">
          <img src="/profile.svg" alt="Cart" />
          <b>Профиль</b>
        </li>
      </ul>
    </header>

    <h1>Nik Blog</h1>
  </div>
</template>
<style scoped></style>
