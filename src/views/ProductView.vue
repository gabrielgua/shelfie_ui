<script setup lang="ts">
import Button from '@/components/Button.vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import Divider from '@/components/Divider.vue';
import Input from '@/components/form/Input.vue';
import Icon from '@/components/Icon.vue';
import Pagination from '@/components/Pagination.vue';
import ProductList from '@/components/products/ProductList.vue';
import RightSidebar from '@/components/RightSidebar.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import Section from '@/components/Section.vue';
import { useProductStore } from '@/stores/product.store';
import type { Product } from '@/types/product';
import { computed, onMounted, ref } from 'vue';

const search = ref('');

onMounted(() => {
  productStore.fetch()
})

const showEditSidebar = ref(false);

const productStore = useProductStore();
const products = computed(() => productStore.products);

const editSKU = ref('');
const editName = ref('');
const editPrice = ref(0);
const editDescription = ref();
const editImageUrl = ref('');

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

const handleEdit = (product: Product) => {
  editSKU.value = product.sku;
  editName.value = product.name;
  editPrice.value = product.price;
  editDescription.value = product.description;
  editImageUrl.value = product.imageUrl;
  toggleEditSidebar();
}

const toggleEditSidebar = () => {
  showEditSidebar.value = !showEditSidebar.value;
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
    <ProductList @edit="handleEdit" :products="filteredProducts" />
  </Section>

  <RightSidebar :show="showEditSidebar" @close="toggleEditSidebar()" title="Editar produto">
    <form class="flex flex-col gap-6" @submit.prevent="">

      <Input icon-start-variant="primary" id="name" label="Nome" icon-start="tag" v-model="editName" />
      <div class="grid grid-cols-2 gap-6">
        <Input icon-start-variant="primary" id="sku" label="SKU" icon-start="barcode" v-model="editSKU" />
        <Input icon-start-variant="primary" id="price" type="number" label="Preço" icon-start="dollar"
          v-model="editPrice" />
      </div>

      <Input icon-start-variant="primary" id="description" label="Descrição" icon-start="t" v-model="editDescription" />

      <div>
        <p class="text-sm">Imagem</p>
        <div class="flex items-center gap-4 mt-2">
          <div class="w-[120px] h-[120px] bg-white p-2 shadow-xs rounded-2xl overflow-hidden">
            <img :src="editImageUrl" class="size-full">
          </div>

          <div class="flex flex-col grow gap-2">
            <Input id="image" label="Url da imagem" icon-start="image" icon-start-variant="primary"
              v-model="editImageUrl" />
            <Button variant="secondary">
              Fazer upload
              <Icon icon="cloud-arrow-up" />
            </Button>
          </div>
        </div>
      </div>

      <Divider />
      <Button class="w-full">Confirmar</Button>
    </form>
  </RightSidebar>
</template>
