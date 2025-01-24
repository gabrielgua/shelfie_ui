<script lang="ts" setup>
import Divider from './Divider.vue';
import Logo from './Logo.vue';
import SidebarMenuLink from './SidebarMenuLink.vue';

const sidebarWidthCollapsed = 'min-w-[280px]';
// const sidebarWidthShrunken = 'min-w-80px';

</script>

<template>
  <aside class="flex flex-col gap-6 rounded-2xl p-3 dark:text-slate-100 text-slate-900 " :class="sidebarWidthCollapsed">
    <Logo />
    <Divider />

    <menu class="flex flex-col gap-4 h-full">

      <p class="font-extrabold uppercase text-xs my-2 text-slate-950 dark:text-slate-100">Menu</p>
      <SidebarMenuLink title="Home" to="/home" icon="house" />
      <SidebarMenuLink title="Produtos" to="/products" icon="box-archive" />
      <SidebarMenuLink title="Vendas" to="/orders" icon="dollar" />

      <div class="flex flex-col gap-2 mt-auto">
        <SidebarMenuLink title="Configurações" to="/settings" icon="cog" />
        <Divider class="my-4" />

        <p class="text-xs">
          <span>Desenvolvido por</span> <br />
          <a class="text-sky-600" href="https://github.com/gabrielgua" target="_blank">@gabrielgua</a>
        </p>
      </div>
    </menu>

  </aside>
</template>
