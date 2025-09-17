<script setup>
import { AppState } from '@/AppState.js';
import { petsService } from '@/services/PetsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const pets = computed(()=>AppState.pets)

onMounted(
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
  <h1>The Pet Zone</h1>
</template>


<style lang="scss" scoped>

</style>