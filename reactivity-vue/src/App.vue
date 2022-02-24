<script setup>
import { ref, unref, computed } from "vue";
</script>

<script>
let price = ref(100);
let quantity = ref(500);
const total = computed(() => price.value * quantity.value);

function doubleQuantity() {
  quantity.value = unref(quantity) * 2;
}

export default {
  name: "app",
};
</script>
<template>
  <div id="app">
    <div>
      <h1>Vuejs</h1>
      <h2>Price: {{ price }}</h2>
      <button @click="price++">Increase Price by 1</button>
      <h2>Quantity: {{ quantity }}</h2>
      <button @click="doubleQuantity">Double Quantity</button>
      <h2>Total: {{ total }}</h2>
    </div>
       <div>
      <h1>Javascript</h1>
      
      <h2>Price: {{ price }}</h2>
      <button @click="price++">Increase Price by 1</button>
      <h2>Quantity: {{ quantity }}</h2>
      <button @click="doubleQuantity">Double Quantity</button>
      <h2>Total: {{ total }}</h2>
    </div>
  </div>
</template>
