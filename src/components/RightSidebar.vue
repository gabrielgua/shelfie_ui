<script lang="ts" setup>
import ButtonIcon from './ButtonIcon.vue';
import Divider from './Divider.vue';

defineProps<{
  title: string,
  show: boolean
}>();

const emit = defineEmits(['close'])

const close = () => emit('close');

</script>

<template>
  <Teleport to="body">
    <Transition name="right-sidebar-backdrop">
      <div v-show="show" @click.self="close" class="absolute size-full z-10 top-0 bg-black/50 flex justify-end">
        <Transition name="right-sidebar-content">
          <div v-if="show"
            class="bg-slate-100 overflow-auto dark:bg-slate-900 w-full self-end h-[80%] md:h-full md:w-[500px] shadow-2xl">
            <div class="flex bg-white dark:bg-slate-800 items-center justify-between p-6">
              <p class="text-xl">{{ title }}</p>
              <ButtonIcon :click="close" variant="secondary" icon="xmark" size="small" />
            </div>


            <div class="p-6 grow overflow-y-auto">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
<style>
.right-sidebar-backdrop-enter-active,
.right-sidebar-backdrop-leave-active {
  transition: all 250ms ease;
  overflow: hidden;
}

.right-sidebar-backdrop-enter-from,
.right-sidebar-backdrop-leave-to {
  opacity: 0;

}

.right-sidebar-content-enter-active,
.right-sidebar-content-leave-active {
  transition: all 250ms ease;
}

.right-sidebar-content-enter-from,
.right-sidebar-content-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media (width <=48rem) {

  .right-sidebar-content-enter-from,
  .right-sidebar-content-leave-to {
    transform: translateY(100%);
  }
}
</style>
