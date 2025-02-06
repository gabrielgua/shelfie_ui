<script lang="ts" setup>
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import Spinner from '@/components/Spinner.vue';
import { useProductStore } from '@/stores/product.store';
import { computed, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.productId;

onMounted(() => {
  productStore.findById(Number.parseInt(productId.toString()));
})

const productStore = useProductStore();
const product = computed(() => productStore.product)


</script>

<template>
  <div v-if="productStore.state.fetching" class="p-6">
    <Spinner />
  </div>
  <Section v-else>
    <div v-if="productStore.state.error" class="text-danger flex items-center gap-3">
      <Icon icon="xmark-circle" size="small" />
      <p>Erro ao tentar encontrar produto</p>
    </div>

    <div v-if="product">
      <p>{{ product.name }}</p>
    </div>
  </Section>
</template>
