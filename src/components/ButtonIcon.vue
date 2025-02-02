<script setup lang="ts">
import Button, { type ButtonHover, type ButtonSize, type ButtonVariant } from './Button.vue';
import Icon from './Icon.vue';

withDefaults(defineProps<{
  size?: ButtonSize,
  variant?: ButtonVariant,
  icon: string,
  hover?: ButtonHover
  click?: () => void
}>(), {
  size: 'normal',
  variant: 'primary'
});

const buttonIconSizeStyles = new Map<ButtonSize, string>([
  ['small', 'size-8.5 rounded-xl *:text-xs'],
  ['normal', 'size-10 rounded-xl'],
  ['large', 'size-11.5 rounded-2xl *:text-base!']
])

</script>

<template>
  <Button :variant="variant" :click="click" :class="[buttonIconSizeStyles.get(size)]" :hover="hover">
    <Icon v-if="icon" :icon="icon" size="small" />
  </Button>

</template>
