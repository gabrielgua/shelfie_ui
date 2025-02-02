<script lang="ts" setup>
import type { Product } from '@/types/product';
import ProductCard from './ProductCard.vue';

defineProps<{
  products: Product[]
}>();
</script>
<template>
  <ul class="flex flex-col gap-2 grow overflow-y-auto">
    <li v-for="p in products">
      <ProductCard :id="p.id" :sku="p.sku" :name="p.name" :image-url="p.imageUrl" :description="p.description"
        :price="p.price" :created-at="p.createdAt" :updated-at="p.updatedAt" />
    </li>
  </ul>
</template>
