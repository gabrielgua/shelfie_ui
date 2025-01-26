<script setup lang="ts">
import Button from '@/components/Button.vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import Card from '@/components/Card.vue';
import DataTable from '@/components/DataTable.vue';
import DataTableActions from '@/components/DataTable/DataTableActions.vue';
import DataTableColumn from '@/components/DataTable/DataTableColumn.vue';
import DataTableRow from '@/components/DataTable/DataTableRow.vue';
import DataTableHeader from '@/components/DataTable/DataTableRow.vue';
import Section from '@/components/Section.vue';
import { toCurrency } from '@/utils/currency.';
import { formatDateDefault } from '@/utils/dates';
import { computed } from 'vue';

const tableHeaders = [
  '#',
  'SKU',
  'Nome',
  'Preço',
  'Criado',
  'Atualizado',
  'Ações'
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


    <div class="flex items-center flex-wrap gap-4">
      <Button icon="plus">Adicionar</Button>
      <input type="search" placeholder="Pesquisar..." class="text-sm bg-white rounded-xl p-3 ">
    </div>
    <DataTable :headers="tableHeaders">
      <DataTableRow v-for="product in products">
        <DataTableColumn>{{ product.id }}</DataTableColumn>
        <DataTableColumn>{{ product.sku }}</DataTableColumn>
        <DataTableColumn>{{ product.name }}</DataTableColumn>
        <DataTableColumn>{{ toCurrency(product.price) }}</DataTableColumn>
        <DataTableColumn>{{ formatDateDefault(new Date(product.createdAt)) }}</DataTableColumn>
        <DataTableColumn>{{ formatDateDefault(new Date(product.updatedAt)) }}</DataTableColumn>
        <DataTableActions>
          <ButtonIcon variant="secondary" icon="cube" size="small" />
          <ButtonIcon variant="primary" icon="pen" size="small" />
          <ButtonIcon variant="danger" icon="trash" size="small" />

        </DataTableActions>

      </DataTableRow>
    </DataTable>
  </Section>

</template>
