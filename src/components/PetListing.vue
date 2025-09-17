<script setup>
import { AppState } from '@/AppState.js';
import { Pet } from '@/models/Pet.js';
import { petsService } from '@/services/PetsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


const account = computed(()=>AppState.account)

async function deletePet(){
  const confirmed = await Pop.confirm('Delete Pet?')
  if (!confirmed) {
    return
  }
  try {
    await petsService.deletePet(props.petProp.id)
  } catch (error) {
    Pop.error(error)
    logger.log(error)
  }
}

const props = defineProps({
  petProp: {type: Pet, required: true}
})


</script>



<template>
  <div class="pet-listing m-2 p-1">
    <img class="img-fluid" :src="petProp.imgUrl" alt="pic of a pet">
    <h5 class="m-0">{{ petProp.name }}</h5>
    <p class="m-0">Age: {{ petProp.age }}</p>
    <p class="m-0">Species: {{ petProp.species }}</p>
    <p class="m-0">Status: {{ petProp.status }}</p>
    <p class="m-0">Vaccinated: {{ petProp.isVaccinated }} </p>
    <p class="m-0">Enjoys:</p>
    <div v-for="like in petProp.likes" :key="petProp.id + '-' +like">
      <p class="m-0">{{ like }}</p>
    </div>
    <button v-if="account.id == petProp.creatorId" @click="deletePet()" class="btn btn-outline-danger mt-2">DELETE</button>
  </div>
</template>



<style lang="scss" scoped>
  .pet-listing{
    border: inset 8px rgb(4, 250, 4);
  }
</style>












