<template>
  <div class="main">
    <HeaderComp />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useStorageStore } from '@/stores/storage';

import HeaderComp from './components/HeaderComp.vue';

import http from '../http-common'

const storageStore: any = useStorageStore();

if (localStorage.getItem('cart')) {
  storageStore.cart = JSON.parse(localStorage.getItem('cart'));
} else {
  storageStore.cart = [];
  localStorage.setItem('cart', JSON.stringify(storageStore.cart))
}

if (localStorage.getItem('storage')) {
  storageStore.storage = JSON.parse(localStorage.getItem('storage'));
} else {
  http.get('').then(res => {
    storageStore.storage = res.data;
    localStorage.setItem('storage', JSON.stringify(storageStore.storage))
  })
}
</script>

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

