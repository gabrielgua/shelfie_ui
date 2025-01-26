<script lang="ts" setup>
withDefaults(defineProps<{
  icon: string,
  size?: IconSize
}>(), {
  size: 'normal'
});

export type IconSize = 'small' | 'normal' | 'large';

const iconStyles = new Map<IconSize, string>([
  ['small', 'text-sm'],
  ['normal', 'text-base'],
  ['large', 'text-lg'],
])

</script>
<template>
  <faicon :icon="icon" :class="iconStyles.get(size)" class="text-inherit" />

</template>
