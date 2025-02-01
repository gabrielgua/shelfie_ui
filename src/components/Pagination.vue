<script setup lang="ts">
import Button from './Button.vue';
import ButtonIcon from './ButtonIcon.vue';



</script>

<template>
  <div class="flex items-center rounded-2xl">
    <ButtonIcon icon="angles-left" variant="primary-ghost" noHoverTranslate />
    <ButtonIcon icon="angle-left" variant="primary-ghost" noHoverTranslate />
    <Button variant="secondary-link" class="mx-2" noHoverTranslate>1</Button>
    <Button variant="custom" class="font-semibold size-10 bg-white shadow-xs dark:bg-secondary-dark/50"
      noHoverTranslate>2</Button>
    <Button variant="secondary-link" class="mx-2" noHoverTranslate>3</Button>
    <ButtonIcon icon="angles-right" variant="primary-ghost" noHoverTranslate />
    <ButtonIcon icon="angle-right" variant="primary-ghost" noHoverTranslate />
  </div>
</template>
