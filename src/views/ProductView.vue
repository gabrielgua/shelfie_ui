<script setup lang="ts">
import Button from "@/components/Button.vue";
import ButtonIcon from "@/components/ButtonIcon.vue";
import Divider from "@/components/Divider.vue";
import Input from "@/components/form/Input.vue";
import Icon from "@/components/Icon.vue";
import ModalLoading from "@/components/modal/ModalLoading.vue";
import Pagination from "@/components/Pagination.vue";
import ProductForm from "@/components/products/ProductForm.vue";
import ProductList from "@/components/products/ProductList.vue";
import RightSidebar from "@/components/RightSidebar.vue";
import SearchFilter from "@/components/SearchFilter.vue";
import Section from "@/components/Section.vue";
import { useProductStore } from "@/stores/product.store";
import type { Product, ProductEdit, ProductRequest } from "@/types/product";
import { computed, onMounted, ref } from "vue";

const search = ref("");

onMounted(() => {
  productStore.fetch();
});

const showProductFormSidebar = ref(false);

const productStore = useProductStore();
const products = computed(() => productStore.products);


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

const handleEdit = (oldProduct: Product) => {
  product.value.id = oldProduct.id;
  product.value.sku = oldProduct.sku;
  product.value.name = oldProduct.name;
  product.value.price = oldProduct.price;
  product.value.description = oldProduct.description;
  product.value.createdAt = oldProduct.createdAt;
  product.value.updatedAt = oldProduct.updatedAt;
  product.value.imageUrl = oldProduct.imageUrl;

  toggleProductFormSidebar();
};

const handleAdd = () => {
  product.value.id = 0;
  product.value.sku = "";
  product.value.name = "";
  product.value.price = 0;
  product.value.description = "";
  product.value.imageUrl = "";
  product.value.createdAt = "";
  product.value.updatedAt = "";

  toggleProductFormSidebar();
};


const toggleProductFormSidebar = () => {
  showProductFormSidebar.value = !showProductFormSidebar.value;
};

const getProductFormTitle = () => {
  return `${product.value.id !== 0 ? 'Editar' : 'Adicionar'} produto`;
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
      <Button :click="handleAdd" class="w-full lg:w-max" variant="primary">
        Adicionar
        <Icon icon="plus" />
      </Button>
      <Divider class="my-2 lg:hidden" />
      <Pagination class="lg:ml-auto" />
    </div>
    <ProductList @edit="handleEdit" :products="filteredProducts" />
  </Section>

  <RightSidebar :show="showProductFormSidebar" @close="toggleProductFormSidebar()" :title="getProductFormTitle()">
    <ProductForm :product="product" @submit="toggleProductFormSidebar()" />
  </RightSidebar>

  <ModalLoading :show="productStore.state.loading" />
</template>
