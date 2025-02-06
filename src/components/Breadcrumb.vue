<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Icon from './Icon.vue';

const route = useRoute();

const breadcrumbs = computed(() => {
  return route.matched
    .filter(matchedRoute => matchedRoute.path !== '/') // Exclude root route
    .map(matchedRoute => ({
      name: matchedRoute.name,
      path: matchedRoute.path.replace(/\/:.*$/, '') // Remove dynamic params
    }))
})

const current = computed(() => route.name);

</script>
<template>
  <div>
    <nav class="mb-1">
      <ul class="flex items-center flex-wrap sm:flex-nowrap gap-2 text-slate-500 dark:text-slate-400 text-xs">
        <p>Páginas</p>
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path" class="flex items-center gap-2">
          <Icon icon="chevron-right" size="small" class="text-[10px]" />
          <RouterLink v-if="index !== breadcrumbs.length - 1" :to="breadcrumb.path" class="hover:underline">
            {{ breadcrumb.name }}
          </RouterLink>
          <span class="text-primary font-semibold" v-else>{{ breadcrumb.name }}</span>
        </li>
      </ul>
    </nav>
    <p class="text-2xl text-secondary-dark dark:text-secondary">{{ current }}</p>
  </div>
</template>
