<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
html.dark {
  color-scheme: dark;
}

html.dark body {
  background-color: var(--color-slate-950);
}

body {
  background-color: var(--color-slate-100);
}
</style>
