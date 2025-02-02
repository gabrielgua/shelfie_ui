<script setup lang="ts">
import { useModalStore } from '@/stores/modal.store';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import Modal from './Modal.vue';
import { computed } from 'vue';

withDefaults(defineProps<{
  action?: boolean,
}>(), {
  action: true,
});

export type ModalAlertVariant = 'success' | 'error';

const close = () => modalStore.close();

const modalAlertSyles = new Map<ModalAlertVariant, { color: string, icon: string }>([
  ['error', { color: 'text-danger', icon: 'xmark' }],
  ['success', { color: 'text-success', icon: 'check' }]
]);


const modalStore = useModalStore();

</script>

<template>
  <Modal v-if="modalStore.modal" :show="modalStore.modal.open" @close="close">

    <div class="grid place-items-center gap-6 pt-2 ">
      <span class="grid place-items-center size-12 p-2 rounded-full ring ring-current/40 bg-current/15"
        :class="modalAlertSyles.get(modalStore.modal?.variant)!.color">
        <Icon :icon="modalAlertSyles.get(modalStore.modal?.variant)!.icon" size="large" />
      </span>

      <div class="text-center">
        <p class="text-lg" :class="modalAlertSyles.get(modalStore.modal?.variant)?.color">{{ modalStore.modal.title }}
        </p>
        <p class="text-secondary-dark dark:text-secondary text-sm font-light">{{ modalStore.modal.body }}</p>
      </div>

      <Button v-if="action" class="w-full" :click="close">OK</Button>
    </div>



  </Modal>

</template>
