<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ButtonIcon from '../ButtonIcon.vue';

const name = computed(() => route.name);
const route = useRoute();

</script>

<template>
  <div class="flex items-center gap-4">
    <div class="text-slate-500 dark:text-slate-400 text-xs ">
      <p>
        Páginas / <span class="font-semibold text-primary">{{ name }}</span>
      </p>
      <p class="text-2xl text-secondary-dark dark:text-secondary">{{ name }}</p>
    </div>
  </div>
</template>
