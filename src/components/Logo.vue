<script setup lang="ts">
import Icon from './Icon.vue';
import PopInTransition from './transitions/PopInTransition.vue';
withDefaults(defineProps<{
  iconOnly?: boolean
}>(), {

  iconOnly: false
})

</script>

<template>
  <div class="flex items-center min-w-max gap-2 justify-center">
    <Icon icon="layer-group" size="large" class="text-primary" />
    <PopInTransition>

      <p v-if="!iconOnly" class="text-2xl uppercase dark:text-slate-100 text-slate-600 font-extrabold">
        Shelf<span class="italic text-lg font-bold">ie</span>
      </p>
    </PopInTransition>
  </div>
</template>
