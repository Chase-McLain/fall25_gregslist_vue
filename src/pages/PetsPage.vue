<script setup>
import { AppState } from '@/AppState.js';
import PetListing from '@/components/PetListing.vue';
import { petsService } from '@/services/PetsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const pets = computed(()=>AppState.pets)

onMounted(()=>
  getPets()
)

async function getPets(){
  try {
    await petsService.getPets()
  } catch (error) {
    Pop.error(error)
    logger.log(error)
  }
}




</script>


<template>
  <h1 class="m-3">The Pet Zone</h1>
  <div class="container">
    <section class="row">
      <div v-for="pet in pets" :key="pet.id" class="col-md-3">
        <PetListing :petProp="pet"/>
      </div>
    </section>
  </div>











</template>


<style lang="scss" scoped>

</style>