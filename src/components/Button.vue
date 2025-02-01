<script setup lang="ts">
withDefaults(defineProps<{
  size?: ButtonSize,
  variant?: ButtonVariant,
  disabled?: boolean,
  noHoverTranslate?: boolean,
  click?: () => void
}>(), {
  size: 'normal',
  variant: 'primary',
  disabled: false
});

export type ButtonSize = 'small' | 'normal' | 'large';
export type ButtonVariant =
  'primary' | 'secondary' | 'success' | 'danger'
  | 'primary-outline' | 'secondary-outline' | 'success-outline' | 'danger-outline'
  | 'primary-ghost' | 'secondary-ghost' | 'success-ghost' | 'danger-ghost'
  | 'primary-link' | 'secondary-link' | 'success-link' | 'danger-link' | 'custom';

const buttonSizeStyles = new Map<ButtonSize, string>([
  ['small', 'text-xs py-2 px-3 rounded-xl'],
  ['normal', 'text-sm py-2.5 px-3.5 rounded-xl'],
  ['large', 'text-base py-3 px-4 rounded-2xl'],
])

const buttonVariantStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-primary text-white'],
  ['secondary', 'bg-secondary text-slate-900 dark:bg-secondary-dark/50 dark:text-white'],
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

  ['primary-link', 'text-primary hover:underline'],
  ['secondary-link', 'text-slate-800 dark:text-white hover:underline '],
  ['success-link', 'text-success hover:underline'],
  ['danger-link', 'text-danger hover:underline'],

  ['custom', '']
])

</script>

<template>
  <button @click="click"
    class="flex items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer hover:-translate-y-1"
    :class="[
      buttonSizeStyles.get(size), buttonVariantStyles.get(variant),
      { 'opacity-50 hover:translate-none! active:scale-100! hover:no-underline! cursor-default!': disabled },
      { 'hover:translate-none!': noHoverTranslate }]" :disabled="disabled">
    <slot />
  </button>
</template>
