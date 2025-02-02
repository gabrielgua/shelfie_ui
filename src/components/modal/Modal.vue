<script setup lang="ts">
import ButtonIcon from '../ButtonIcon.vue';

withDefaults(defineProps<{
  header?: boolean,
  title?: string,
  show: boolean
}>(), {
  header: false,
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
}

</script>

<template>
  <Teleport to="body">
    <Transition name="modal-backdrop">
      <div v-show="show" @click.self="close" class="size-full z-20 absolute top-0 bg-black/50 grid place-items-center">
        <Transition name="modal-content">
          <div v-if="show" class="bg-white dark:bg-slate-800 w-[80%] md:w-[450px] rounded-2xl">
            <div v-if="header" class="p-4 flex items-center justify-between">
              <p class="text-lg ml-2">{{ title }}</p>
              <ButtonIcon :click="close" icon="xmark" variant="secondary" />
            </div>
            <div class="p-6">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

  </Teleport>

</template>

<style>
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: all 250ms ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  /* cubic-bezier(.47,1.64,.41,.8); */
}

.modal-content-enter-from,
.modal-content-leave-to {
  scale: .85;
  opacity: 0;
}
</style>
