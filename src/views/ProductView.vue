<script setup lang="ts">
import Button from "@/components/Button.vue";
import ButtonIcon from "@/components/ButtonIcon.vue";
import Divider from "@/components/Divider.vue";
import Icon from "@/components/Icon.vue";
import ModalLoading from "@/components/modal/ModalLoading.vue";
import Pagination from "@/components/Pagination.vue";
import ProductForm from "@/components/products/ProductForm.vue";
import ProductFormFloatingMenu from "@/components/products/ProductFormFloatingMenu.vue";
import ProductList from "@/components/products/ProductList.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import Section from "@/components/Section.vue";
import Spinner from "@/components/Spinner.vue";
import { useProductStore } from "@/stores/product.store";
import type { Product } from "@/types/product";
import { useToggle } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";


onMounted(() => {
  productStore.fetch();
});

const product = ref<Product>({
  id: 0,
  sku: "",
  name: "",
  price: 0,
  imageUrl: "",
  description: "",
  createdAt: "",
  updatedAt: "",
});
const search = ref("");
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
  <Section class="flex flex-col gap-6 transition-all">
    <Spinner v-if="productStore.state.fetching" />
    <div v-else class="flex flex-col lg:flex-row items-center gap-2 transition-all">
      <div class="flex w-full lg:w-[350px] items-center gap-2">
        <SearchFilter @search="handleSearch" placeholder="Procurar por NOME, SKU..." />
        <ButtonIcon icon="filter" variant="custom"
          class="bg-white dark:bg-slate-800 text-secondary-dark dark:text-secondary shadow-2xs" />
      </div>
      <Button :click="() => toggleProductFormSidebar()" class="w-full lg:w-max" variant="primary">
        Adicionar
        <Icon icon="plus" />
      </Button>
      <Divider class="my-4 lg:hidden" />
      <Pagination class="lg:ml-auto" />
    </div>
    <ProductList v-if="!productStore.state.fetching" :products="filteredProducts" />

    <ProductFormFloatingMenu :show="showProductFormSidebar" title="Adicionar produto"
      @close="toggleProductFormSidebar()">
      <ProductForm :product="product" @submit="toggleProductFormSidebar()" />
    </ProductFormFloatingMenu>

    <ModalLoading :show="productStore.state.loading" />
  </Section>
</template>
