<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme.store';
import { computed } from 'vue';

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
</script>

<template>
  <header class="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl">
    <div class="flex items-center gap-4">
      <div class="grid place-items-center rounded-full size-12 bg-sky-100 dark:bg-sky-950 ">
        <faicon icon="user" class="text-sky-900 text-xs" />
      </div>
      <div>
        <p class="text-xs">Bem-vindo,</p>
        <p class="font-semibold text-sm">Gabriel Guaitanele</p>
      </div>
    </div>

    <button @click="themeStore.toggle()"
      class="bg-slate-100 dark:bg-slate-700 cursor-pointer transition-all active:scale-95 p-2 grid place-items-center min-w-10 min-h-10 rounded-xl">
      <faicon :icon="isDark ? 'sun' : 'moon'" class="text-sm" />
    </button>


  </header>

</template>
