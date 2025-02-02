<script lang="ts" setup>
import SlideInTransition from './transitions/SlideInTransition.vue';

defineProps<{
  title: string,
  to: string,
  icon: string,
  iconOnly?: boolean
}>();
</script>

<template>

  <RouterLink :to="to" class="transition-all flex items-center gap-4 hover:translate-x-1"
    :class="{ 'justify-center': iconOnly }" active-class="active-link text-primary font-bold hover:translate-none">
    <div class="transition-all size-8.5 grid place-items-center rounded-xl">
      <faicon :icon="icon" class="text-primary dark:text-secondary/80 text-sm" />
    </div>
    <SlideInTransition>
      <p v-if="!iconOnly" class="text-sm">{{ title }}</p>
    </SlideInTransition>
  </RouterLink>
</template>

<style lang="css">
div {
  outline: 1px solid;
  outline-color: transparent;
}

.active-link div {
  border: none;
  outline-color: var(--color-primary);
}

.active-link div>* {
  color: var(--color-primary);
}
</style>
