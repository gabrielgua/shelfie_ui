<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme.store';
import { computed } from 'vue';
import ButtonIcon from './ButtonIcon.vue';

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
</script>s

<template>
  <header class="flex items-center justify-between p-6 ">
    <div class="flex items-center gap-4">
      <div class="grid place-items-center rounded-full size-12 bg-sky-100 dark:bg-sky-950 ">
        <faicon icon="user" class="text-sky-900 text-xs" />
      </div>
      <div>
        <p class="text-xs">Bem-vindo,</p>
        <p class="font-semibold text-sm">Gabriel Guaitanele</p>
      </div>
    </div>

    <ButtonIcon variant="secondary" @click="themeStore.toggle()" :icon="isDark ? 'sun' : 'moon'" />

  </header>

</template>
