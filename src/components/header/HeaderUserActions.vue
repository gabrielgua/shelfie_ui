<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store';
import ButtonIcon from '../ButtonIcon.vue';
import { computed, ref } from 'vue';
import FloatingMenu from '../FloatingMenu.vue';
import { useToggle } from '@vueuse/core';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import Divider from '../Divider.vue';
import Avatar from '../Avatar.vue';
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);

const showUserActionsSidebar = ref(false);
const toggleUserActionSidebar = useToggle(showUserActionsSidebar);
</script>

<template>
  <section class="flex items-center gap-2 sm:gap-4">
    <Avatar />
    <div class="hidden sm:block text-end sm:text-start">
      <p class="text-xs">Bem-vindo,</p>
      <p class="font-semibold text-sm">Gabriel Guaitanele</p>
    </div>
    <ButtonIcon :click="() => toggleUserActionSidebar()" icon="sliders" variant="secondary" class="block md:hidden" />

    <div class="hidden md:flex">
      <ButtonIcon icon="power-off" variant="secondary-ghost" />
      <ButtonIcon variant="secondary-ghost" icon="cog" />
      <ButtonIcon variant="secondary-ghost" :click="() => themeStore.toggle()" :icon="isDark ? 'sun' : 'moon'" />
    </div>

    <FloatingMenu :show="showUserActionsSidebar" title="Preferências" @close="toggleUserActionSidebar()" align="end">
      <template #title>
        <p class="text-xl">Configurações rápidas</p>
      </template>
      <div class="flex flex-col gap-6">
        <section class="flex items-center gap-6">
          <Avatar />
          <div>
            <p class="text-xs">Bem-vindo,</p>
            <p class="font-semibold text-sm">Gabriel Guaitanele</p>
          </div>
        </section>

        <Divider />

        <section class="flex flex-col gap-4">
          <Button variant="secondary" class="w-full justify-start!">
            <Icon icon="user" />
            Perfil
          </Button>
          <Button variant="secondary" class="w-full justify-start!">
            <Icon icon="cog" />
            Configurações
          </Button>
          <Button variant="secondary" class="w-full justify-start!">
            <Icon icon="sun" />
            Tema claro
          </Button>
          <Button variant="secondary" class="w-full justify-start!">
            <Icon icon="power-off" />
            Logout
          </Button>
        </section>
      </div>
    </FloatingMenu>
  </section>

</template>
