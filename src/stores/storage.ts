import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStorageStore = defineStore({
  id: 'storage',
  state: () => ({
    storage: [],
    cart: [],
    sortFilter: localStorage.getItem('type')
      ? localStorage.getItem('type')
      : 'Аукцион Прямые продажи',
    sortId: localStorage.getItem('id') ? Number(localStorage.getItem('id')) : 0
  })
})
