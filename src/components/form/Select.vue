<script lang="ts" setup>
import { onMounted } from 'vue';
import Icon from '../Icon.vue';
import type { InputVariant } from './Input.vue';

const model = defineModel<string | number>();

export type SelectOption = {
  value: string | number,
  label: string
}

withDefaults(defineProps<{
  id: string,
  icon?: string,
  iconVariant?: InputVariant
  disabled?: boolean
  placeholder?: string,
  label?: string,
  options: SelectOption[],
}>(), {
  iconVariant: 'secondary',
  placeholder: 'Selecione'
});

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
      class="flex items-center gap-2.5 text-sm pe-2.5 bg-white dark:bg-slate-800 rounded-xl ring-1 ring-transparent hover:ring-secondary dark:hover:ring-secondary-dark focus-within:ring-2! focus-within:ring-primary! transition-all"
      :class="[{ 'bg-secondary hover:ring-transparent! focus-within:ring-transparent!': disabled }]">
      <Icon v-if="icon" :icon="icon" size="small" class="ml-3" :class="inputIconStyles.get(iconVariant)" />
      <select :id="id" v-model="model" :placeholder="placeholder" class="py-2.5 outline-none w-full">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>
