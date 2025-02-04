<script setup lang="ts">
import FloatingMenu from '../FloatingMenu.vue';

defineProps<{
  show: boolean,
  title: string
}>();

const emit = defineEmits(['close']);

</script>

<template>
  <FloatingMenu align="end" mobileAlign="bottom" :show="show" @close="emit('close')">
    <template #title>
      <p class="text-xl">
        {{ title }}
      </p>
    </template>
    <slot />
  </FloatingMenu>
</template>
