<script lang="ts" setup>
import ButtonIcon from './ButtonIcon.vue';
import HeaderPageInfo from './header/HeaderPageInfo.vue';
import HeaderUserActions from './header/HeaderUserActions.vue';
import Logo from './Logo.vue';


</script>

<template>
  <header>
    <div class="bg-white dark:bg-slate-900 flex lg:hidden items-center gap-2 ps-2 p-4">
      <ButtonIcon icon="bars" variant="secondary-ghost" size="large" />
      <Logo />
      <HeaderUserActions class="ms-auto" />
    </div>

    <section class="flex items-center justify-between gap-6 p-6">
      <HeaderPageInfo />
      <div class="hidden lg:block">
        <HeaderUserActions />
      </div>
    </section>
  </header>
</template>
