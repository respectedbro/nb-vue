<script setup>
import { ref } from 'vue'

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
})

const isImageLoaded = ref(false)

const onImageLoad = () => {
  isImageLoaded.value = true // Когда изображение загружается, скрываем прелоадер
}

const onImageError = () => {
  isImageLoaded.value = true // Убираем прелоадер даже при ошибке
  console.error('Ошибка загрузки изображения')
}
</script>

<template>
  <div
    class="flex flex-col justify-between relative bg-white border border-slate-100 rounded-3xl transition p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="like-1"
      class="absolute top-8 left-8"
      @click="onClickFavorite"
    />
    <div
      v-if="!isImageLoaded"
      class="absolute inset-0 flex justify-center items-center bg-gray-100 rounded-3xl"
    >
      <img src="/loader/bouncing-squares.svg" alt="Loading..." class="h-6 w-6" />
    </div>

    <img
      v-show="isImageLoaded"
      :src="imageUrl"
      alt="Sneaker"
      class="rounded-lg w-full h-auto"
      @load="onImageLoad"
      @error="onImageError"
    />

    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>

      <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus" />
    </div>
  </div>
</template>
