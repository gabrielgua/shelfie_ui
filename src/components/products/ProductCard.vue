<script lang="ts" setup>
import type { Product } from '@/types/product';
import { toCurrency } from '@/utils/currency.';
import { formatDateDefault } from '@/utils/dates';
import Button from '../Button.vue';
import ButtonIcon from '../ButtonIcon.vue';
import ProductCardSection from './ProductCardSection.vue';
import Icon from '../Icon.vue';

withDefaults(defineProps<Product>(), {
  description: 'Sem descrição'
})

defineEmits(['edit']);

</script>

<template>
  <div
    class="flex flex-auto gap-6 items-center bg-white dark:bg-slate-900 shadow-xs p-4 rounded-xl flex-wrap xl:flex-nowrap transition-all">

    <div
      class="min-w-[70px] min-h-[70px] max-h-[70px] max-w-[70px] bg-secondary dark:bg-slate-800 rounded-xl grid place-items-center">
      <img v-if="imageUrl" :src="imageUrl" alt="product-image" class="rounded-xl size-full">
      <Icon v-else icon="image" class="text-secondary-dark" />
    </div>
    <ProductCardSection label="NOME" :content="name" class="xl:max-w-[50%]">
      {{ description }}
    </ProductCardSection>
    <ProductCardSection label="sku" :content="sku" class="xl:ml-auto min-w-max" />
    <ProductCardSection label="preço" :content="toCurrency(price)" class="xl:w-[10%]" />
    <ProductCardSection label="registrado em" :content="formatDateDefault(new Date(createdAt))" />
    <ProductCardSection label="atualizado em" :content="formatDateDefault(new Date(updatedAt))" />

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 w-full xl:w-max">
      <Button variant="secondary" :click="() => $emit('edit', id)">Editar</Button>
      <Button variant="danger-outline">Remover</Button>
    </section>

  </div>
</template>
