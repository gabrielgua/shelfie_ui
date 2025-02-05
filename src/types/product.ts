import type { Brand } from './brand'
import type { Category } from './category'

export type Product = {
  id: number
  sku: string
  name: string
  imageUrl?: string
  brand: Brand
  category: Category
  price: number
  description?: string
  createdAt: string
  updatedAt: string
}

export type ProductEdit = {
  sku?: string
  name?: string
  price?: number
  imageUrl?: string
  description?: string
  minimumQuantity?: number
  brandId?: number
  categoryId?: number
}

export type ProductRequest = {
  sku: string
  name: string
  price: number
  imageUrl?: string
  description?: string
  minimumQuantity?: number
  brandId?: number
  categoryId?: number
}
