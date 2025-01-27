<script lang="ts" setup>
import Button from './Button.vue';
import ButtonIcon from './ButtonIcon.vue';


defineProps<{
  headers: string[],
}>();

</script>

<template>
  <table class="w-full text-sm bg-white dark:bg-slate-800 rounded-2xl">
    <thead class="border-b border-b-slate-100 dark:border-b-slate-600">
      <tr class="text-left">
        <th class="p-4" v-for="(header, index) in headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
  <div class="p-2 bg-white dark:bg-slate-800 rounded-2xl max-w-max self-center">
    <div class="flex items-center justify-center gap-2">
      <ButtonIcon variant="secondary" icon="angles-left" />
      <ButtonIcon variant="secondary" icon="angle-left" />

      <Button variant="secondary-link">1</Button>

      <Button variant="primary-link" disabled>
        <p class="font-semibold">2</p>
      </Button>
      <Button variant="secondary-link">3</Button>
      <ButtonIcon variant="secondary" icon="angle-right" />
      <ButtonIcon variant="secondary" icon="angles-right" />
    </div>
  </div>

</template>
