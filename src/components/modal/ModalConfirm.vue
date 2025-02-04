<script setup lang="ts">
import Button, { type ButtonVariant } from '../Button.vue';
import Icon from '../Icon.vue';
import Modal from './Modal.vue';

withDefaults(defineProps<{
  show: boolean,
  confirmText?: string,
  confirmIcon?: string,
  confirmVariant?: ButtonVariant
}>(), {
  confirmText: 'Confirmar',
  confirmVariant: 'primary',
  confirmIcon: 'check'
});

const emit = defineEmits(['close', 'confirm']);

const close = () => emit('close');
const confirm = () => emit('confirm');

</script>

<template>
  <Modal :show="show" @close="close">
    <slot />
    <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4">
      <Button :click="close" variant="secondary">Cancelar</Button>
      <Button :variant="confirmVariant" :click="confirm">
        <Icon v-if="confirmIcon" :icon="confirmIcon" size="small" />
        {{ confirmText }}
      </Button>
    </div>
  </Modal>

</template>
