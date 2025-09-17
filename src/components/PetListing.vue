<script setup>
import { Pet } from '@/models/Pet.js';




const props = defineProps({
  petProp: {type: Pet, required: true}
})


</script>



<template>
  <div class="pet-listing m-2 p-1">
    <img :src="petProp.imgUrl" alt="pic of a pet">
    <h5>{{ petProp.name }}</h5>
    <p>Age: {{ petProp.age }}</p>
    <p>Species: {{ petProp.species }}</p>
    <p>Status: {{ petProp.status }} Vaccinated?: {{ petProp.isVaccinated }}</p>
    <p>Enjoys: {{ petProp.likes }}</p>
  </div>




</template>



<style lang="scss" scoped>
  .pet-listing{
    border: inset 8px rgb(4, 250, 4);
  }
</style>












