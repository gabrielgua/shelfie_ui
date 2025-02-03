<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store';
import ButtonIcon from '../ButtonIcon.vue';
import { computed } from 'vue';
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);
</script>

<template>
  <section class="flex items-center gap-2 sm:gap-4">
    <div class="grid place-items-center rounded-xl size-10 bg-sky-300 dark:bg-sky-800">
      <faicon icon="user" class="text-sky-900 dark:text-sky-300 text-xs" />
    </div>
    <div class="hidden sm:block text-end sm:text-start">
      <p class="text-xs">Bem-vindo,</p>
      <p class="font-semibold text-sm">Gabriel Guaitanele</p>
    </div>
    <ButtonIcon icon="sliders" variant="secondary" class="block md:hidden" />

    <div class="hidden md:flex">
      <ButtonIcon icon="power-off" variant="secondary-ghost" />
      <ButtonIcon variant="secondary-ghost" icon="cog" />
      <ButtonIcon variant="secondary-ghost" :click="() => themeStore.toggle()" :icon="isDark ? 'sun' : 'moon'" />
    </div>
  </section>
</template>
