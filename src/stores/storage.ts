import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStorageStore = defineStore({
  id: 'storage',
  state: () => ({
    chars: localStorage.getItem('chars') ? localStorage.getItem('chars') : '',
    storage: [],
    cart: [],
    sortFilter: localStorage.getItem('type')
      ? localStorage.getItem('type')
      : 'Аукцион Прямые продажи',
    sortId: localStorage.getItem('id') ? Number(localStorage.getItem('id')) : 0
  }),
  getters: {
    filteredStorage: (state) =>
      state.storage.filter((val: any) => {
        localStorage.setItem('chars', state.chars)
        return val.name.toLowerCase().includes(state.chars.toLowerCase())
      }),
    filteredCart: (state) =>
      state.cart.filter((val: any) => {
        localStorage.setItem('chars', state.chars)
        return val.name.toLowerCase().includes(state.chars.toLowerCase())
      })
  }
})
