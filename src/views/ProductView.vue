<script setup lang="ts">
import Button from '@/components/Button.vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import Icon from '@/components/Icon.vue';
import Pagination from '@/components/Pagination.vue';
import ProductList from '@/components/products/ProductList.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import Section from '@/components/Section.vue';
import type { Product } from '@/types/product';
import { computed, ref } from 'vue';

const tableHeaders = [
  '#',
  'SKU',
  'Nome',
  'Preço',
  'Criado',
  'Atualizado',
  'Ações'
]

const search = ref('');

const products: Product[] = [{
  id: 1,
  sku: "2025WAP-923784",
  name: "Detergente Limpa e Extrai 1 Litro",
  price: 41.89,
  createdAt: new Date("2025-01-24T14:43:40Z"),
  updatedAt: new Date("2025-01-24T14:43:40Z")
},
{
  id: 2,
  sku: "2025WAP-872390",
  name: "Anti odor WAP 500ml gatilho",
  price: 32.89,
  createdAt: new Date("2025-01-24T14:43:40Z"),
  updatedAt: new Date("2025-01-24T14:43:40Z")
},
{
  id: 3,
  sku: "2025WAP-302983",
  name: "Detergente Limpe PRO 5 LITROS",
  price: 182.89,
  description: "Detergente muito bom...",
  createdAt: new Date("2025-01-24T14:43:40Z"),
  updatedAt: new Date("2025-01-24T14:43:40Z")
},
{
  id: 4,
  sku: "2025WAP-873451",
  name: "Anti odor WAP 500ml gatilho",
  price: 32.89,
  createdAt: new Date("2025-01-24T14:43:40Z"),
  updatedAt: new Date("2025-01-24T14:43:40Z")
},
{
  id: 4,
  sku: "2025WAP-873451",
  name: "Anti odor WAP 500ml gatilho",
  price: 32.89,
  createdAt: new Date("2025-01-24T14:43:40Z"),
  updatedAt: new Date("2025-01-24T14:43:40Z")
}
]

const filteredProducts = computed(() => {
  if (search.value === '') {
    return products;
  }

  const searchTerm = search.value.toLocaleLowerCase().trim();

  return products.filter(product => product.name.toLowerCase().includes(searchTerm) || product.sku.includes(searchTerm));
})

const handleSearch = (searchTerm: string) => {
  search.value = searchTerm;
}

</script>

<template>
  <Section title="Produtos" class="flex flex-col gap-4 transition-all">
    <div class="flex flex-col lg:flex-row items-center gap-2 transition-all">
      <div class="flex w-full lg:w-[350px] items-center gap-2">
        <SearchFilter @search="handleSearch" placeholder="Procurar por NOME, SKU..." />
        <ButtonIcon icon="filter" variant="custom"
          class="bg-white dark:bg-slate-800 text-secondary-dark dark:text-secondary" />
      </div>
      <Button class="w-full lg:w-max" variant="primary">
        Adicionar
        <Icon icon="plus" />
      </Button>
      <Pagination class="lg:ml-auto" />
    </div>
    <ProductList :products="filteredProducts" />
  </Section>

</template>
