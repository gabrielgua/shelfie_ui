<script setup lang="ts">
import Button from '@/components/Button.vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import Pagination from '@/components/Pagination.vue';
import ProductList from '@/components/products/ProductList.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import Section from '@/components/Section.vue';
import { useProductStore } from '@/stores/product.store';
import { computed, onMounted, ref } from 'vue';

const search = ref('');

onMounted(() => {
  productStore.fetch()
})

const productStore = useProductStore();
const products = computed(() => productStore.products);

const filteredProducts = computed(() => {
  if (search.value === '') {
    return products.value;
  }

  const searchTerm = search.value.toLocaleLowerCase().trim();

  return products.value.filter(product => product.name.toLowerCase().includes(searchTerm) || product.sku.includes(searchTerm));
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
          class="bg-white dark:bg-slate-800 text-secondary-dark dark:text-secondary shadow-xs" />
      </div>
      <Button class="w-full lg:w-max" variant="primary">
        Adicionar
        <Icon icon="plus" />
      </Button>
      <Divider class="my-2 lg:hidden" />
      <Pagination class="lg:ml-auto" />
    </div>
    <ProductList :products="filteredProducts" />


  </Section>
</template>
