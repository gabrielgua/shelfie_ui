<script setup lang="ts">
import Spinner from '../Spinner.vue';
import Modal from './Modal.vue';

defineProps<{ show: boolean }>()

</script>

<template>
  <Modal :show="show">
    <div class="grid place-items-center gap-6 py-6">
      <Spinner size="large" />
      <slot />
    </div>
  </Modal>

</template>
