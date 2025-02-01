<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme.store';
import { computed } from 'vue';
import ButtonIcon from './ButtonIcon.vue';

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
</script>s

<template>
  <header class="flex items-center justify-between gap-6 p-6">
    <div class="flex items-center gap-4 px-3 py-3 rounded-2xl bg-white dark:bg-slate-900">
      <div class="grid place-items-center rounded-full size-10 bg-sky-300 dark:bg-sky-800 ">
        <faicon icon="user" class="text-sky-900 dark:text-sky-300 text-xs" />
      </div>
      <div>
        <p class="text-xs">Bem-vindo,</p>
        <p class="font-semibold text-sm">Gabriel Guaitanele</p>
      </div>
      <ButtonIcon variant="secondary-ghost" icon="chevron-down" no-hover-translate />
    </div>

    <div class="flex gap-2">

      <ButtonIcon variant="secondary" @click="themeStore.toggle()" :icon="isDark ? 'sun' : 'moon'" />
      <ButtonIcon variant="secondary" icon="power-off" no-hover-translate />
    </div>


  </header>

</template>
