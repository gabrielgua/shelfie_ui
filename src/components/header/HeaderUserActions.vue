<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store';
import ButtonIcon from '../ButtonIcon.vue';
import { computed, ref } from 'vue';
import RightSidebar from '../RightSidebar.vue';
import { useToggle } from '@vueuse/core';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import Divider from '../Divider.vue';
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);

const showUserActionsSidebar = ref(false);
const toggleUserActionSidebar = useToggle(showUserActionsSidebar);
</script>

<template>
  <section class="flex items-center gap-2 sm:gap-4">
    <div class="grid place-items-center rounded-xl size-10 bg-sky-300 dark:bg-sky-800">
      <faicon icon="user" class="text-sky-900 dark:text-sky-300 text-xs" />
    </div>
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

    <RightSidebar :show="showUserActionsSidebar" title="Preferências" @close="toggleUserActionSidebar()">
      <div class="flex flex-col gap-6">
        <section class="flex items-center gap-6">
          <div class="grid place-items-center rounded-xl size-10 bg-sky-300 dark:bg-sky-800">
            <Icon icon="user" class="text-sky-900 dark:text-sky-300 text-xs" />
          </div>
          <div>
            <p class="text-xs">Bem-vindo,</p>
            <p class="font-semibold text-sm">Gabriel Guaitanele</p>
          </div>
        </section>
        <Divider />

        <section class="flex flex-col gap-4">
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
    </RightSidebar>
  </section>

</template>
