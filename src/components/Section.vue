<script lang="ts" setup>
import Divider from './Divider.vue';

defineProps<{
  title: string

}>()
</script>

<template>
  <div class="overflow-y-auto flex flex-col gap-4 p-6 pt-0">
    <p class="text-2xl text-secondary-dark dark:text-secondary">{{ title }}</p>
    <Divider />
    <slot />
  </div>

</template>
