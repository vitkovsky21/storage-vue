<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import FilterComp from './components/FilterComp.vue';
</script>

<template>
  <div class="main">
    <HeaderComp />
    <FilterComp />
    <RouterView />
  </div>
</template>

<style scoped>
body {
  position: relative;
  width: 1536px;

  background: #FFFFFF;
}

.main {
  width: 1007.8px;
  margin: 0 auto;
}
</style>

