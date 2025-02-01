<script lang="ts" setup>
import Button from './Button.vue';
import ButtonIcon from './ButtonIcon.vue';


defineProps<{
  headers: string[],
}>();

</script>

<template>
  <div class="overflow-y-auto text-sm rounded-2xl">
    <table class="w-full bg-white dark:bg-slate-800 relative rounded-2xl">
      <thead class="border-b text-sm border-b-slate-100 dark:border-b-slate-600">
        <tr class="text-left ">
          <th class="p-4" v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>

  </div>
  <div class="flex items-center justify-center gap-4">
    <p class="text-sm text-secondary-dark dark:text-secondary mr-auto">mostrando 1-10 de 50 totais.</p>
    <div class="p-2 px-3 bg-white dark:bg-slate-800 rounded-2xl max-w-max">
      <div class="flex items-center justify-center gap-2">
        <ButtonIcon size="small" variant="primary-outline" icon="angles-left" />
        <ButtonIcon size="small" variant="primary-outline" icon="angle-left" />

        <Button size="small" variant="secondary-link">1</Button>

        <Button variant="primary-link" disabled>
          <p class="font-semibold">2</p>
        </Button>
        <Button size="small" variant="secondary-link">3</Button>
        <ButtonIcon size="small" variant="primary-outline" icon="angle-right" />
        <ButtonIcon size="small" variant="primary-outline" icon="angles-right" />
      </div>
    </div>

  </div>

</template>
