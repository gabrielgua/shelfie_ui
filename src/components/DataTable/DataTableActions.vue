<script setup lang="ts">
import DataTableColumn from './DataTableColumn.vue';

</script>

<template>
  <DataTableColumn>
    <div class="flex items-center justify-start  gap-2">
      <slot />
    </div>
  </DataTableColumn>
</template>
