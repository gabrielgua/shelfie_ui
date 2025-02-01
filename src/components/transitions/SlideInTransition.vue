<template>
  <Transition name="slide-in" mode="out-in">
    <slot />
  </Transition>

</template>

<style>
.slide-in-enter-active {
  transition: all 250ms ease 100ms;
}

.slide-in-enter-from {
  transform: translateX(-15px);
  opacity: 0;
}
</style>
