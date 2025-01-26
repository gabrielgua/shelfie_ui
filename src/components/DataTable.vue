<script lang="ts" setup>

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
    <tfoot class="border-t border-t-slate-100 dark:border-t-slate-600">
      <tr>
        <th :colspan="headers.length + 1">
          <div class="p-4  flex items-center justify-end gap-6">
            <button>
              <faicon icon="arrow-left" />
              Anterior
            </button>
            <button>1</button>
            <button class="text-sky-600">2</button>
            <button>3</button>
            <button>
              Próxima
              <faicon icon="arrow-right" />
            </button>
          </div>
        </th>
      </tr>
    </tfoot>
  </table>

</template>
