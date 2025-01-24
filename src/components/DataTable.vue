<script lang="ts" setup>

export type DataTableHeader = {
  key: string,
  label: string,
}

defineProps<{
  headers: DataTableHeader[],
  rows: any[]
}>();

</script>

<template>
  <table class="w-full text-sm bg-white dark:bg-slate-800 rounded-2xl">
    <thead class="border-b border-b-slate-100 dark:border-b-slate-600">
      <tr class="text-left">
        <th v-for="header in headers" :key="header.key" class="p-4">{{ header.label }}</th>
        <th class="p-4">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rIndex) in rows" :key="rIndex" :class="{ 'bg-slate-50 dark:bg-slate-900': rIndex % 2 === 0 }">
        <td v-for="header in headers" :key="header.key" class="px-4 py-3">
          {{ row[header.key] }}
        </td>
        <td class="px-4 py-3">
          <div class="flex gap-2">
            <button>
              <faicon icon="pen" />
            </button>
            <button>
              <faicon icon="trash" />
            </button>
            <button>
              <faicon icon="exclamation" />
            </button>
          </div>
        </td>
      </tr>

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
