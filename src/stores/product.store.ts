import { http } from '@/services/http'
import type { Product, ProductEdit, ProductRequest } from '@/types/product'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useModalStore } from './modal.store'
import type { AxiosError } from 'axios'

export const useProductStore = defineStore('product', () => {
  const PRODUCTS_URL = '/products'
  const products = ref<Product[]>([])

  const state = reactive({ loading: false, error: false, fetching: false })

  const { success, error } = useModalStore()

  const fetch = () => {
    state.fetching = true
    setTimeout(() => {
      http
        .get(PRODUCTS_URL)
        .then((res) => {
          products.value = res.data
        })
        .catch((e) => console.log(e))
        .finally(() => (state.fetching = false))
    }, 500)
  }

  const edit = (productEdit: ProductEdit, productId: number) => {
    state.loading = true
    setTimeout(() => {
      http
        .put(`${PRODUCTS_URL}/${productId}`, productEdit)
        .then((res) => {
          success('Produto editado.', `Produto editado com sucesso.`)
          updateEditedProduct(res.data)
        })
        .catch((e: AxiosError) => {
          state.error = true
          error('Erro ao editar.', e.message)
          console.log(e)
        })
        .finally(() => (state.loading = false))
    }, 500)
  }

  const save = (productRequest: ProductRequest) => {
    state.loading = true
    setTimeout(() => {
      http
        .post(PRODUCTS_URL, productRequest)
        .then((res) => {
          success('Produto acicionado.', `Produto adicionado com sucesso.`)
          products.value.push(res.data)
        })
        .catch((e: AxiosError) => {
          state.error = true
          error('Erro ao adicionar.', e.message)
          console.log(e)
        })
        .finally(() => (state.loading = false))
    }, 500)
  }

  const updateEditedProduct = (product: Product) => {
    const oldProduct = products.value.find((p) => p.id === product.id)
    if (oldProduct) {
      oldProduct.sku = product.sku
      oldProduct.name = product.name
      oldProduct.price = product.price
      oldProduct.imageUrl = product.imageUrl
      oldProduct.description = product.description
      oldProduct.updatedAt = product.updatedAt
    }
  }

  return { products, state, fetch, edit, save }
})
