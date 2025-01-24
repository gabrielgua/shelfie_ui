<script setup lang="ts">
import Card from '@/components/Card.vue';
import DataTable, { type DataTableHeader } from '@/components/DataTable.vue';
import Section from '@/components/Section.vue';
import { toCurrency } from '@/utils/currency.';
import { formatDateDefault } from '@/utils/dates';
import { computed } from 'vue';

const tableHeaders: DataTableHeader[] = [
  { key: 'id', label: '#' },
  { key: 'sku', label: 'SKU' },
  { key: 'name', label: 'Nome', },
  { key: 'price', label: 'Preço' },
  { key: 'createdAt', label: 'Criado' },
  { key: 'updatedAt', label: 'Atualizado' },
]

const products = [{
  id: 1,
  sku: "2025WAP-923784",
  name: "Detergente Limpa e Extrai 1 Litro",
  price: 41.89,
  createdAt: "2025-01-24T14:43:40Z",
  updatedAt: "2025-01-24T14:43:40Z"
},
{
  id: 2,
  sku: "2025WAP-872390",
  name: "Anti odor WAP 500ml gatilho",
  price: 32.89,
  createdAt: "2025-01-24T14:43:40Z",
  updatedAt: "2025-01-24T14:43:40Z"
},
{
  id: 3,
  sku: "2025WAP-302983",
  name: "Detergente Limpe PRO 5 LITROS",
  price: 182.89,
  description: "Detergente muito bom...",
  createdAt: "2025-01-24T14:43:40Z",
  updatedAt: "2025-01-24T14:43:40Z"
},
{
  id: 4,
  sku: "2025WAP-873451",
  name: "Anti odor WAP 500ml gatilho",
  price: 32.89,
  createdAt: "2025-01-24T14:43:40Z",
  updatedAt: "2025-01-24T14:43:40Z"
}]


const tableItems = computed(() => {
  return products.map(product => {
    const { price, createdAt, updatedAt, ...productShort } = product;

    const formatedProduct = {
      price: toCurrency(product.price),
      createdAt: formatDateDefault(new Date(product.createdAt)),
      updatedAt: formatDateDefault(new Date(product.updatedAt))
    }

    return { ...productShort, ...formatedProduct };
  })
});

</script>

<template>
  <Section title="Produtos" class="flex flex-col gap-4">


    <div class="flex items-center gap-4">
      <button class="bg-primary p-3 px-4 text-sm flex items-center gap-3 rounded-2xl text-white">
        Adicionar
        <faicon icon="plus" />
      </button>
      <input type="search" placeholder="Pesquisar..." class="text-sm bg-white rounded-xl p-3 ">
    </div>
    <DataTable :headers="tableHeaders" :rows="tableItems" />
  </Section>

</template>
