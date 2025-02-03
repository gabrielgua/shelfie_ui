<script lang="ts" setup>
import Divider from './Divider.vue';

defineProps<{
  title: string

}>()
</script>

<template>
  <div class="overflow-y-auto flex flex-col p-6 pt-8">
    <slot />
  </div>

</template>
