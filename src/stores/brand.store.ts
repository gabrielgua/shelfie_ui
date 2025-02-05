import { http } from '@/services/http'
import type { Brand } from '@/types/brand'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBrandStore = defineStore('brand', () => {
  const BRANDS_ENDPOINT = '/brands'
  const brands = ref<Brand[]>([])

  const fetch = () => {
    http
      .get(BRANDS_ENDPOINT)
      .then((res) => {
        brands.value = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return { brands, fetch }
})
