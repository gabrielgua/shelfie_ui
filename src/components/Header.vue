<script lang="ts" setup>
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import HeaderPageInfo from './header/HeaderPageInfo.vue';
import HeaderUserActions from './header/HeaderUserActions.vue';
import Logo from './Logo.vue';
import FloatingSidebar from './sidebar/FloatingSidebar.vue';
import { useToggle } from '@vueuse/core';
import Breadcrumb from './Breadcrumb.vue';


const showFloatingSidebar = ref(false);
const toggleFloatingSidebar = useToggle(showFloatingSidebar);

</script>

<template>
  <header>
    <div class="bg-white dark:bg-slate-900 flex lg:hidden items-center gap-2 ps-2 p-4">
      <ButtonIcon icon="bars" variant="custom" class="active:text-primary" :click="() => toggleFloatingSidebar()" />
      <Logo />
      <HeaderUserActions class="ms-auto" />
    </div>

    <section class="flex items-center justify-between gap-6 p-6">
      <!-- <HeaderPageInfo /> -->
      <Breadcrumb />
      <div class="hidden lg:block">
        <HeaderUserActions />
      </div>
    </section>

    <FloatingSidebar :show="showFloatingSidebar" @close="toggleFloatingSidebar()" />
  </header>
</template>
