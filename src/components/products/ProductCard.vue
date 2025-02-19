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
import ButtonIcon from '../ButtonIcon.vue';

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
      <img v-if="imageUrl" :src="imageUrl" alt="product-image"
        class="rounded-xl size-full max-h-[70px] object-top object-cover">
      <Icon v-else icon="image" class="text-secondary-dark" />
    </div>
    <ProductCardSection label="NOME" :content="name" class="xl:max-w-[50%]" bold="true">
      {{ description }}
    </ProductCardSection>
    <ProductCardSection label="sku" :content="sku" class="xl:ml-auto min-w-max" />
    <ProductCardSection label="Marca" :content="brand.name" bold="true" />
    <ProductCardSection label="Categoria" :content="category.name" />

    <ProductCardSection label="preço" :content="toCurrency(price)" class="xl:w-[10%]" />
    <ProductCardSection label="registrado em" :content="formatDateDefault(new Date(createdAt))" />
    <ProductCardSection label="atualizado em" :content="formatDateDefault(new Date(updatedAt))" />

    <section class="flex gap-2 w-full xl:w-max">
      <RouterLink :to="`/products/${id}`">
        <ButtonIcon icon="eye" variant="secondary-outline" />
      </RouterLink>
      <ButtonIcon icon="pen" variant="secondary" :click="edit" />
      <ButtonIcon icon="trash" variant="danger-outline" :click="() => toggleRemoveProductModal()" />

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
