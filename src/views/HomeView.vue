<script setup lang="ts">
import Card from '@/components/Card.vue';
import Section from '@/components/Section.vue';



</script>


<template>
  <Section>
    <h2 class="my-6 text-2xl">Home</h2>

    <div class="flex items-center gap-6">
      <Card class="grow">
        <faicon icon="dollar" class="text-lg mb-4 text-teal-600" />
        <p class="text-xs">Faturamento</p>
        <p class="text-2xl font-semibold">R$ 32,894.00</p>
      </Card>
      <Card class="grow">
        <faicon icon="cart-shopping" class="text-lg mb-4 text-sky-600" />
        <p class="text-xs">Vendas</p>
        <p class="text-2xl font-semibold">213</p>
      </Card>

      <Card class="grow">
        <faicon icon="box-archive" class="text-lg mb-4 text-yellow-600" />
        <p class="text-xs">Produtos</p>
        <p class="text-2xl font-semibold">34</p>
      </Card>

    </div>



  </Section>
</template>
