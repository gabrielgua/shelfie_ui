import { http } from '@/services/http'
import type { Category } from '@/types/category'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const CATEGORIES_ENDPOINT = '/categories'
  const categories = ref<Category[]>([])

  const fetch = () => {
    http
      .get(CATEGORIES_ENDPOINT)
      .then((res) => {
        categories.value = res.data
      })
      .catch((e) => console.log(e))
  }

  return { categories, fetch }
})
