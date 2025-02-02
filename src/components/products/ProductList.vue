<script lang="ts" setup>
import type { Product } from '@/types/product';
import ProductCard from './ProductCard.vue';

const props = defineProps<{
  products: Product[]
}>();

const emit = defineEmits(['edit']);

const handleEdit = (id: number) => {
  const product = props.products.find(p => p.id === id);
  if (!product) {
    return
  }

  emit('edit', product);
}

</script>
<template>
  <ul class="flex flex-col gap-2 grow overflow-y-auto">
    <li v-for="p in products">
      <ProductCard @edit="handleEdit" :id="p.id" :sku="p.sku" :name="p.name" :image-url="p.imageUrl"
        :description="p.description" :price="p.price" :created-at="p.createdAt" :updated-at="p.updatedAt" />
    </li>
  </ul>
</template>
