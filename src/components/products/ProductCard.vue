<script lang="ts" setup>
import type { Product } from '@/types/product';
import { toCurrency } from '@/utils/currency.';
import { formatDateDefault } from '@/utils/dates';
import Button from '../Button.vue';
import ButtonIcon from '../ButtonIcon.vue';
import ProductCardSection from './ProductCardSection.vue';

withDefaults(defineProps<Product>(), {
  description: 'Sem descrição'
})

</script>

<template>
  <div
    class="flex flex-auto gap-6 items-center bg-white dark:bg-slate-900 shadow-xs p-4 rounded-xl flex-wrap xl:flex-nowrap transition-all">

    <div class="size-[70px]">
      <img :src="imageUrl" alt="product-image" class="rounded-2xl">
    </div>
    <ProductCardSection label="NOME" :content="name">
      {{ description }}
    </ProductCardSection>
    <ProductCardSection label="sku" :content="sku" class="xl:ml-auto min-w-max" />
    <ProductCardSection label="preço" :content="toCurrency(price)" class="xl:w-[15%]" />
    <ProductCardSection label="registrado em" :content="formatDateDefault(new Date(createdAt))" />
    <ProductCardSection label="atualizado em" :content="formatDateDefault(new Date(updatedAt))" />

    <section class="flex gap-4 w-full xl:w-max">
      <Button variant="secondary" class="grow">Editar</Button>
      <ButtonIcon icon="ellipsis" variant="secondary-ghost" />
    </section>

  </div>
</template>
