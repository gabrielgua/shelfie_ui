<script lang="ts" setup>
import type { Product } from '@/types/product';
import { toCurrency } from '@/utils/currency.';
import { formatDateDefault } from '@/utils/dates';
import { useToggle } from '@vueuse/core';
import { ref } from 'vue';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import ModalConfirm from '../modal/ModalConfirm.vue';
import ProductCardSection from './ProductCardSection.vue';
import ProductFormFloatingMenu from './ProductFormFloatingMenu.vue';
import ProductForm from './ProductForm.vue';
import { useProductStore } from '@/stores/product.store';

const props = withDefaults(defineProps<Product>(), {
  description: 'Sem descrição'
})

const { remove } = useProductStore();

const edit = () => {
  toggleProductFormSidebar();
}


const showRemoveProductModal = ref(false);
const toggleRemoveProductModal = useToggle(showRemoveProductModal);

const handleRemoveConfirmed = () => {
  toggleRemoveProductModal();
  remove(props.id);
}

const showProductFormSidebar = ref(false);
const toggleProductFormSidebar = useToggle(showProductFormSidebar);



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
      <Button variant="secondary" :click="edit">Editar</Button>
      <Button variant="danger-outline" :click="() => toggleRemoveProductModal()">Remover</Button>
    </section>

    <ModalConfirm :show="showRemoveProductModal" @close="toggleRemoveProductModal()" @confirm="handleRemoveConfirmed"
      confirm-text="Remover" confirm-variant="danger" confirm-icon="trash">
      <p class="font-semibold mb-4">Remover o produto?</p>
      <p class="text-sm font-light">
        Isso removerá o produto, seu histórico de vendas e estoque, completamente.
      </p>
    </ModalConfirm>

    <ProductFormFloatingMenu @close="toggleProductFormSidebar()" :show="showProductFormSidebar" title="Editar produto">
      <ProductForm :product="props" @submit="toggleProductFormSidebar()" />
    </ProductFormFloatingMenu>

  </div>
</template>
