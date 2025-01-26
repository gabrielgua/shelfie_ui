<script setup lang="ts">
import Icon from './Icon.vue';
withDefaults(defineProps<{
  icon?: string,
  size?: ButtonSize,
  variant?: ButtonVariant
}>(), {
  size: 'normal',
  variant: 'primary'
});

export type ButtonSize = 'small' | 'normal' | 'large';
export type ButtonVariant =
  'primary' | 'secondary' | 'success' | 'danger'
  | 'primary-outline' | 'secondary-outline' | 'success-outline' | 'danger-outline'
  | 'primary-ghost' | 'secondary-ghost' | 'success-ghost' | 'danger-ghost' | 'custom';

const buttonSizeStyles = new Map<ButtonSize, string>([
  ['small', 'text-xs '],
  ['normal', 'text-sm '],
  ['large', 'text-base '],
])

const buttonVariantStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-primary text-white'],
  ['secondary', 'bg-secondary text-slate-900 dark:bg-secondary-dark dark:text-white'],
  ['success', 'bg-success text-white'],
  ['danger', 'bg-danger text-white'],

  ['primary-outline', 'outline outline-primary/30 text-primary '],
  ['secondary-outline', 'outline outline-slate-300 text-slate-600 dark:outline-slate-700 dark:text-slate-300'],
  ['success-outline', 'outline outline-success/30 text-success'],
  ['danger-outline', 'outline outline-danger/30 text-danger'],

  ['primary-ghost', 'text-primary hover:bg-primary/20'],
  ['secondary-ghost', 'hover:bg-secondary/50 text-slate-800 dark:hover:bg-secondary-dark/50 dark:text-white'],
  ['success-ghost', 'hover:bg-success/20 text-success'],
  ['danger-ghost', 'hover:bg-danger/20 text-danger'],

  ['custom', '']
])

</script>

<template>
  <button
    class="flex items-center justify-center rounded-2xl gap-3 p-3 px-4 active:scale-95 transition-all cursor-pointer hover:-translate-y-1"
    :class="[buttonSizeStyles.get(size), buttonVariantStyles.get(variant)]">
    <slot />
    <Icon v-if="icon" :icon="icon" size="small" />
  </button>
</template>
