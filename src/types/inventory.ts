import type { Product } from './product'

export type InventoryShort = {
  active: boolean
  currentQuantity: number
  minimumQuantity: number
  lastUpdated: string
}
