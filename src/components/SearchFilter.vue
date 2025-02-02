<script lang="ts" setup>
import { ref } from 'vue';
import Input from './form/Input.vue';

withDefaults(defineProps<{
  placeholder?: string
}>(), {
  placeholder: 'Pesquisar...'
})

const emit = defineEmits(['search']);
const search = ref('');

const emitSearch = () => {
  emit('search', search.value);
}

</script>
<template>
  <Input icon-start="magnifying-glass" @input="emitSearch" v-model="search" type="text" :placeholder="placeholder" />
</template>
