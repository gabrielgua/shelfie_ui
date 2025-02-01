<script setup lang="ts">
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex h-dvh">
    <Sidebar />
    <div class="flex flex-col gap-6 rounded-l-xl bg-slate-100 dark:bg-slate-950  max-h-dvh size-full">
      <Header />
      <RouterView />
    </div>
  </div>
</template>
