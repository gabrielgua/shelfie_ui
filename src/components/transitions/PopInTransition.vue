<template>
  <Transition name="pop-in" mode="out-in">
    <slot />
  </Transition>

</template>

<style>
.pop-in-enter-active {
  transition: all 250ms ease 100ms;
}

.pop-in-leave-active {
  transition: none
}

.pop-in-enter-from,
.pop-in-leave-to {
  opacity: 0;
  scale: .85;
}
</style>
