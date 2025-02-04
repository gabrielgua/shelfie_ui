<script lang="ts" setup>
import ButtonIcon from './ButtonIcon.vue';

const props = withDefaults(defineProps<{
  show: boolean,
  align?: 'start' | 'end'
  mobileAlign?: 'same' | 'bottom',
}>(), {
  openFrom: 'start',
  mobileAlign: 'bottom',
});


const emit = defineEmits(['close'])
const close = () => emit('close');

const openFromStart = '--open-direction: -100%';
const openFromEnd = '--open-direction: 100%';

const mobileAlignBottomStyles = 'translate-y-100 md:translate-y-0 md:translate-x-[var(--open-direction)]';
const mobileAlignSame = 'translate-x-[var(--open-direction)]';

const getEnterFromLeaveToStyles = () => {
  return props.mobileAlign === 'bottom' ? mobileAlignBottomStyles : mobileAlignSame
}

const getAlignmentStyles = () => {
  return props.mobileAlign === 'bottom' ? 'self-end w-full md:h-full h-[80%]' : 'h-full w-[80%]';
}


</script>

<template>
  <Teleport to="body">
    <Transition name="right-sidebar-backdrop">
      <div v-show="show" @click.self="close" class="absolute size-full z-10 top-0 bg-black/50 flex"
        :class="{ 'justify-end': align === 'end' }" :style="[align === 'end' ? openFromEnd : openFromStart]">
        <Transition name="right-sidebar-content" :enter-from-class="getEnterFromLeaveToStyles()"
          :leave-to-class="getEnterFromLeaveToStyles()">
          <div v-if="show" class="bg-slate-100 overflow-auto dark:bg-slate-900 shadow-2xl md:w-[500px]"
            :class="getAlignmentStyles()">
            <div class="flex bg-white dark:bg-slate-800 items-center justify-between p-6">
              <slot name="title">
                <p class="text-xl">Title</p>
              </slot>
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
  opacity: 0;
}
</style>
