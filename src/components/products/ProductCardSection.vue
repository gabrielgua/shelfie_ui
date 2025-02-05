<script lang="ts" setup>
defineProps<{
  label: string,
  content?: string,
  bold?: string,
}>();
</script>
<template>
  <section>
    <p class="font-light text-[10px] uppercase">{{ label }}</p>
    <p class="text-sm">
      <slot name="content">
        <span :class="{ 'font-semibold': bold }">{{ content }}</span>
      </slot>
    </p>
    <p class="text-xs font-light line-clamp-1 text-secondary-dark dark:text-secondary">
      <slot />
    </p>
  </section>
</template>
