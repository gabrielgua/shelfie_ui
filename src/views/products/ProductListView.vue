<script lang="ts" setup>
import Button from '@/components/Button.vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import Icon from '@/components/Icon.vue';
import ModalLoading from '@/components/modal/ModalLoading.vue';
import Pagination from '@/components/Pagination.vue';
import ProductForm from '@/components/products/ProductForm.vue';
import ProductFormFloatingMenu from '@/components/products/ProductFormFloatingMenu.vue';
import ProductList from '@/components/products/ProductList.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import Section from '@/components/Section.vue';
import Spinner from '@/components/Spinner.vue';
import { useProductStore } from '@/stores/product.store';
import type { Product } from '@/types/product';
import { useToggle } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';

onMounted(() => {
  productStore.fetch();
});

const search = ref("");
const product = ref<Product>({
  id: 0,
  sku: '',
  name: '',
  price: 0,
  imageUrl: '',
  description: '',
  createdAt: '',
  updatedAt: '',
  brand: { id: 0, name: '' },
  category: { id: 0, name: '' }
});

const showProductFormSidebar = ref(false);
const toggleProductFormSidebar = useToggle(showProductFormSidebar);

const productStore = useProductStore();
const products = computed(() => productStore.products);

const filteredProducts = computed(() => {
  if (search.value === "") {
    return products.value;
  }

  const searchTerm = search.value.toLocaleLowerCase().trim();

  return products.value.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) || product.sku.includes(searchTerm)
  );
});

const handleSearch = (searchTerm: string) => {
  search.value = searchTerm;
};

</script>

<template>
  <div v-if="productStore.state.fetching" class="p-6">
    <Spinner />
  </div>
  <Section class="flex flex-col gap-6 lg:gap-2 transition-all" v-else>
    <div class="flex flex-col lg:flex-row items-center gap-2 transition-all">
      <div class="flex w-full lg:w-[350px] items-center gap-2">
        <SearchFilter @search="handleSearch" placeholder="Procurar por NOME, SKU..." />
        <ButtonIcon icon="filter" variant="custom"
          class="bg-white dark:bg-slate-800 text-secondary-dark dark:text-secondary shadow-2xs" />
      </div>
      <Button :click="() => toggleProductFormSidebar()" class="w-full lg:w-max" variant="primary">
        Adicionar
        <Icon icon="plus" size="small" />
      </Button>
      <Pagination class="mt-4 lg:ml-auto lg:my-0" />
    </div>
    <ProductList :products="filteredProducts" />

    <ProductFormFloatingMenu :show="showProductFormSidebar" title="Adicionar produto"
      @close="toggleProductFormSidebar()">
      <ProductForm :product="product" @submit="toggleProductFormSidebar()" />
    </ProductFormFloatingMenu>

    <ModalLoading :show="productStore.state.loading" />
  </Section>
</template>
