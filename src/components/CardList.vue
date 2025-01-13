<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      imageUrl="/sneakers/sneakers-1.jpg"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-favorite="false"
      :on-click-add="onClickAdd"
      :is-added="true"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Добавить')
}
</script>
