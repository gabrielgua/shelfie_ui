<script lang="ts" setup>
defineProps<{
  title: string

}>()
</script>

<template>
  <div class="mt-10">
    <p class="mx-2 mb-4 text-lg">{{ title }}</p>
    <slot />
  </div>

</template>
