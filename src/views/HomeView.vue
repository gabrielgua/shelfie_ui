<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store';

const themeStore = useThemeStore();
</script>

<template>
  <div>
    <h2>Home</h2>
    <faicon icon="house" />

  </div>
  <button @click="themeStore.toggle()">{{ themeStore.isDark }}</button>
</template>
