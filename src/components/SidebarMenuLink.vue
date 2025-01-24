<script lang="ts" setup>
defineProps<{
  title: string,
  to: string,
  icon: string,
}>();
</script>

<template>

  <RouterLink :to="to" class="transition-all flex items-center gap-4 rounded-2xl hover:translate-x-1"
    active-class="active-link text-primary font-bold hover:translate-none">
    <div class="transition-all size-9.5 grid place-items-center bg-white dark:bg-slate-800 rounded-full">
      <faicon :icon="icon" class="text-primary text-sm" />
    </div>
    <p class="text-sm">{{ title }}</p>
  </RouterLink>
</template>

<style lang="css">
.active-link div {
  background-color: var(--color-primary);
}

.active-link div>* {
  color: var(--color-white);
}
</style>
