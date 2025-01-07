<script setup>
import MyHello from '@/components/myHello.vue'
</script>


<template>
<MyHello title="Кроссовки Puma" :price="9500" is-added>
  <button>Добавить</button>
</MyHello>

<MyHello>
  <h4>Hello</h4>
</MyHello>


<MyHello/>


</template>



<style scoped>

</style>
