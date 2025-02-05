<script lang="ts" setup>
import { useProductStore } from "@/stores/product.store";
import type { Product, ProductEdit, ProductRequest } from "@/types/product";
import { computed, ref } from "vue";
import Input from "../form/Input.vue";
import Button from "../Button.vue";
import Divider from "../Divider.vue";
import Icon from "../Icon.vue";

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits(['submit'])

const productStore = useProductStore();

const formType = computed(() => {
  if (props.product.id !== 0) {
    return 'edit'
  }

  return 'add';
})
const sku = ref(props.product.sku);
const name = ref(props.product.name);
const price = ref(props.product.price);
const description = ref(props.product.description);
const imageUrl = ref(props.product.imageUrl);

const handleFormSubmit = () => {
  emit('submit')

  const productForm: ProductRequest = {
    sku: sku.value,
    name: name.value,
    price: price.value,
    description: description.value,
    imageUrl: imageUrl.value,
  };

  if (formType.value === "edit") {
    handleEditSubmit(productForm)
    return;
  }

  handleAddSubmit(productForm);
};

const handleEditSubmit = (request: ProductEdit) => {
  productStore.edit(request, props.product.id);
}

const handleAddSubmit = (request: ProductRequest) => {
  productStore.save(request);
}

const isValid = computed(() => {
  return (props.product.sku !== sku.value ||
    props.product.name !== name.value ||
    props.product.price !== price.value ||
    props.product.description !== description.value ||
    props.product.imageUrl !== imageUrl.value)
});


</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="handleFormSubmit">
    <Input icon-start-variant="primary" id="name" label="Nome" icon-start="tag" v-model="name" />
    <div class="grid grid-cols-2 gap-6">
      <Input icon-start-variant="primary" id="sku" label="SKU" icon-start="barcode" v-model="sku" />
      <Input icon-start-variant="primary" id="price" type="number" min="0" step="0.01" label="Preço" icon-start="dollar"
        v-model="price" />
    </div>

    <Input icon-start-variant="primary" id="description" label="Descrição" icon-start="t" v-model="description"
      :required="false" />

    <div>
      <p class="text-sm">Imagem</p>
      <div class="flex items-center gap-4 mt-2">
        <div class="grid place-items-center bg-white dark:bg-slate-800 rounded-2xl overflow-hidden">
          <img v-if="imageUrl" :src="imageUrl" class="w-[120px] h-[120px] rounded-xl object-top object-cover" />
          <Icon v-else icon="image" size="large" class="text-secondary dark:text-secondary-dark" />
        </div>

        <div class="flex flex-col grow gap-2">
          <Input id="image" label="Url da imagem" icon-start="link" icon-start-variant="primary" v-model="imageUrl"
            :required="false" />
          <Button variant="secondary">
            Fazer upload
            <Icon icon="cloud-arrow-up" />
          </Button>
        </div>
      </div>
    </div>

    <Divider />
    <Button class="w-full" submit :disabled="!isValid">
      {{ formType === "edit" ? "Editar" : "Adicionar" }}
    </Button>
  </form>
</template>
