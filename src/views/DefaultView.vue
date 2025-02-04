<script setup lang="ts">
import Divider from '@/components/Divider.vue';
import Header from '@/components/Header.vue';
import ModalAlert from '@/components/modal/ModalAlert.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex h-dvh">
    <Sidebar />
    <div class="flex flex-col bg-slate-100 dark:bg-slate-950 max-h-dvh size-full">
      <Header />
      <div class="px-6">
        <Divider />
      </div>
      <RouterView />
    </div>

    <ModalAlert />
  </div>
</template>
