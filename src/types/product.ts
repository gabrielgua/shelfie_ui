export type Product = {
  id: number
  sku: string
  name: string
  imageUrl: string
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
}

export type ProductRequest = {
  sku: string
  name: string
  price: number
  imageUrl?: string
  description?: string
  minimumQuantity?: number
}
