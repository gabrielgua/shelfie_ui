<script setup lang="ts">
import Button from './Button.vue';
import ButtonIcon from './ButtonIcon.vue';



</script>

<template>
  <div class="flex items-center rounded-2xl w-full lg:w-max justify-between md:justify-center">
    <ButtonIcon icon="angles-left" variant="primary-ghost" />
    <ButtonIcon icon="angle-left" variant="primary-ghost" />
    <Button variant="secondary-link" class="mx-2">1</Button>
    <Button variant="custom" class="font-semibold size-10 bg-white shadow-xs dark:bg-secondary-dark/50">2</Button>
    <Button variant="secondary-link" class="mx-2">3</Button>
    <ButtonIcon icon="angle-right" variant="primary-ghost" />
    <ButtonIcon icon="angles-right" variant="primary-ghost" />
  </div>
</template>
