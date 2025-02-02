<script setup lang="ts">
import Button from '../Button.vue';
import Modal from './Modal.vue';

withDefaults(defineProps<{
  show: boolean,
}>(), {});

const emit = defineEmits(['close', 'confirm']);

const close = () => emit('close');
const confirm = () => emit('confirm');

</script>

<template>
  <Modal :show="show" @close="close">
    <slot />
    <div class="grid grid-cols-2 mt-6 gap-4">
      <Button :click="close" variant="secondary">Cancelar</Button>
      <Button :click="confirm">Confirmar</Button>
    </div>
  </Modal>

</template>
