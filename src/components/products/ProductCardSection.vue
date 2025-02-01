<script lang="ts" setup>
defineProps<{
  label: string,
  content: string,
}>();
</script>
<template>
  <section>
    <p class="text-sm">
      <span class="font-light text-[10px] uppercase">{{ label }}</span>
      <br />
      {{ content }}
    </p>
    <p class="text-xs font-light line-clamp-1 text-secondary-dark dark:text-secondary">
      <slot />
    </p>
  </section>
</template>
