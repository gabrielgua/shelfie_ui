<script lang="ts" setup>
defineProps<{
  title: string,
  to: string,
  icon: string,
}>();
</script>

<template>

  <RouterLink :to="to"
    class="transition-all p-1.5 flex items-center gap-4  rounded-2xl hover:bg-white dark:hover:bg-slate-800"
    active-class="active-link bg-white text-primary dark:bg-slate-800 dark:hover:bg-slate-800! font-bold">
    <div class="size-9.5 grid place-items-center bg-white dark:bg-slate-800 rounded-full">
      <faicon :icon="icon" class="text-primary text-sm" />
    </div>
    <p class="text-sm">{{ title }}</p>
  </RouterLink>
</template>

<style lang="css">
.active-link div {
  background-color: var(--color-primary);
}

.dark .active-link div {
  background-color: var(--color-white);
}

.active-link div>* {
  color: var(--color-white);
}

.dark .active-link div>* {
  color: inherit;
}
</style>
