<script setup lang="ts">
import Avatar from '../Avatar.vue';
import Divider from '../Divider.vue';
import FloatingMenu from '../FloatingMenu.vue';
import Logo from '../Logo.vue';
import SidebarMenuLink from '../SidebarMenuLink.vue';

defineProps<{
  show: boolean,
}>();

const emit = defineEmits(['close']);
const close = () => emit('close');

</script>

<template>
  <FloatingMenu :show="show" @close="close" mobile-align="same">
    <template #title>
      <Logo />
    </template>
    <menu class="flex flex-col gap-4 grow transition-all">
      <div class="flex items-center gap-3 mb-2">
        <Avatar />
        <div>
          <p class="text-xs font-light">Bem-vindo,</p>
          <p class="text-sm font-semibold">Gabriel Guaitanele</p>
        </div>
      </div>
      <Divider />


      <SidebarMenuLink @click="close" title="Home" to="/home" icon="house" />
      <SidebarMenuLink @click="close" title="Produtos" to="/products" icon="box-archive" />
      <SidebarMenuLink @click="close" title="Vendas" to="/orders" icon="dollar" />

      <Divider class="mt-auto" />
      <SidebarMenuLink @click="close" title="Sobre" to="/about" icon="exclamation-circle" />
      <SidebarMenuLink @click="close" title="Configurações" to="/settings" icon="cog" />
    </menu>
  </FloatingMenu>

</template>
