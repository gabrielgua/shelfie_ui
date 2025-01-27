<script lang="ts" setup>
defineProps<{
  title: string

}>()
</script>

<template>
  <div class="overflow-auto grow">
    <p class="mx-2 mb-4 text-lg">{{ title }}</p>
    <slot />
  </div>

</template>
