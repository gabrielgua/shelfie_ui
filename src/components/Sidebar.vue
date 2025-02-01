<script lang="ts" setup>
import { useSidebarStore } from '@/stores/sidebar.store';
import Button from './Button.vue';
import Divider from './Divider.vue';
import Logo from './Logo.vue';
import SidebarMenuLink from './SidebarMenuLink.vue';
import { Transition } from 'vue';
import Icon from './Icon.vue';
import ButtonIcon from './ButtonIcon.vue';

const widthExpanded = 'min-w-[280px]';
const widthShrunken = 'min-w-[88px]';
const sidebarStore = useSidebarStore();

</script>

<template>
  <aside
    class="flex flex-col gap-6 transition-all bg-white dark:bg-slate-900 rounded-r-2xl p-6 dark:text-slate-100 text-slate-900 "
    :class="[sidebarStore.isShrunken ? widthShrunken : widthExpanded]">
    <div class="flex items-center relative transition-all " :class="{ 'flex-col gap-6': sidebarStore.isShrunken }">
      <Logo :iconOnly="!sidebarStore.isShrunken" />

      <Transition name="pop-in" mode="out-in">
        <div class="grid w-full left-0 place-items-center" v-if="sidebarStore.isShrunken">
          <ButtonIcon icon="angles-right" variant="primary-outline" size="small" :click="sidebarStore.toggle" />
        </div>

        <div class="grid w-full left-0 place-items-end" v-else>
          <ButtonIcon icon="angles-left" variant="primary-outline" size="small" :click="sidebarStore.toggle" />
        </div>
      </Transition>
    </div>

    <Divider />


    <menu class="flex flex-col gap-4 h-full transition-all">

      <p class="font-extrabold uppercase text-xs my-2 text-slate-900 dark:text-slate-100"
        v-if="!sidebarStore.isShrunken">Menu</p>
      <SidebarMenuLink :icon-only="sidebarStore.isShrunken" title="Home" to="/home" icon="house" />
      <SidebarMenuLink :icon-only="sidebarStore.isShrunken" title="Produtos" to="/products" icon="box-archive" />
      <SidebarMenuLink :icon-only="sidebarStore.isShrunken" title="Vendas" to="/orders" icon="dollar" />

      <Divider class="my-4 mt-auto" />
      <SidebarMenuLink :icon-only="sidebarStore.isShrunken" title="Sobre" to="/about" icon="exclamation-circle" />
      <SidebarMenuLink :icon-only="sidebarStore.isShrunken" title="Configurações" to="/settings" icon="cog" />
    </menu>

  </aside>
</template>


<style>
.pop-in-enter-active {
  transition: all 250ms ease 50ms;
}

.pop-in-leave-active {
  transition: none
}

.pop-in-enter-from,
.pop-in-leave-to {
  opacity: 0;
  scale: .85;
}
</style>
