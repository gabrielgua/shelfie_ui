<script lang="ts" setup>
import type { InputTypeHTMLAttribute } from 'vue';
import Icon from '../Icon.vue';

const model = defineModel<string | number>();

withDefaults(defineProps<{
  id?: string,
  placeholder?: string,
  type?: InputTypeHTMLAttribute,
  disabled?: boolean,
  error?: boolean,
  errorMessage?: string,
  iconStart?: string,
  iconEnd?: string,
  iconStartVariant?: InputVariant,
  iconEndVariant?: InputVariant,
  label?: string,
  min?: string,
  max?: string,
  step?: string,
  required?: boolean
}>(), {
  disabled: false,
  error: false,
  type: 'text',
  iconStartVariant: 'secondary',
  iconEndVariant: 'secondary',
  required: true
})

export type InputVariant = 'primary' | 'secondary' | 'success' | 'danger';

const inputIconStyles = new Map<InputVariant, string>([
  ['primary', 'text-primary!'],
  ['secondary', 'text-secondary! dark:text-secondary-dark!'],
  ['success', 'text-success!'],
  ['danger', 'text-danger!']
])

</script>

<template>
  <div class="flex flex-col gap-2 grow">
    <label :for="id" class="text-sm" v-if="label">{{ label }}</label>

    <div
      class="flex items-center gap-4 text-sm bg-white dark:bg-slate-800 rounded-xl ring-1 ring-transparent hover:ring-secondary dark:hover:ring-secondary-dark focus-within:ring-2! focus-within:ring-primary! transition-all shadow-xs"
      :class="[{ 'ring-danger!': error }, { 'bg-secondary hover:ring-transparent! focus-within:ring-transparent!': disabled }]">
      <Icon v-if="iconStart" :icon="iconStart" size="small" class="ml-3"
        :class="inputIconStyles.get(iconStartVariant)" />
      <input :id="id" :type="type" :disabled="disabled" :placeholder="placeholder" :min="min" :max="max" :step="step"
        v-model="model" class="py-2.5 outline-none w-full" :class="[{ 'ps-2.5': !iconStart }, { 'pe-2.5': !iconEnd }]"
        :required="required" />
      <Icon v-if="iconEnd" :icon="iconEnd" size="small" class="mr-3" :class="inputIconStyles.get(iconEndVariant)" />
    </div>
    <p v-if="error" class="text-xs text-danger">{{ errorMessage }}</p>
  </div>
</template>
