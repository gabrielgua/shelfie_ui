<script lang="ts" setup>
import type { Product } from '@/types/product';
import Icon from '../Icon.vue';
import ProductCard from './ProductCard.vue';

defineProps<{
  products: Product[]
}>();

</script>
<template>
  <div v-if="!products.length" class="grid place-items-center gap-6 pt-40">
    <div class="border text-primary border-current/50 size-20 grid place-items-center rounded-full ">
      <Icon icon="box-open" class="text-2xl!" />
    </div>
    <p class="text-sm text-secondary-dark ">Não foram encontrados produtos.</p>
  </div>
  <ul v-else class="flex flex-col gap-2 grow overflow-y-auto">
    <li v-for="p in products">
      <ProductCard :id="p.id" :sku="p.sku" :name="p.name" :brand="p.brand" :category="p.category"
        :image-url="p.imageUrl" :description="p.description" :price="p.price" :created-at="p.createdAt"
        :updated-at="p.updatedAt" />
    </li>
  </ul>
</template>
