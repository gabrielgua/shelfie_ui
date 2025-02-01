import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isShrunken = ref<boolean>(localStorage.getItem('isSidebarShrunken') === 'true')

  const toggle = () => {
    isShrunken.value = !isShrunken.value
    localStorage.setItem('isSidebarShrunken', isShrunken.value.toString())
  }

  return { toggle, isShrunken }
})
