<script setup lang="ts">
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex h-dvh gap-6 p-4">
    <Sidebar />
    <div class="flex flex-col max-h-dvh size-full gap-6 ">
      <Header />
      <RouterView />
    </div>

  </div>

</template>
