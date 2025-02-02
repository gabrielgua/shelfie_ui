import { http } from '@/services/http'
import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const PRODUCTS_URL = '/products'
  const products = ref<Product[]>([])

  const fetch = () => {
    http
      .get(PRODUCTS_URL)
      .then((res) => {
        products.value = res.data
      })
      .catch((e) => console.log(e))
  }

  return { products, fetch }
})
