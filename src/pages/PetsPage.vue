<script setup>
import { AppState } from '@/AppState.js';
import ModalWrapper from '@/components/ModalWrapper.vue';
import PetForm from '@/components/PetForm.vue';
import PetListing from '@/components/PetListing.vue';
import { petsService } from '@/services/PetsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const pets = computed(()=>AppState.pets)
const account = computed(()=>AppState.account)

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
    <section v-if="account" class="row text-center mb-2">
      <div class="col-12">
        <button class="btn btn-gregslist-green" type="button" data-bs-target="#pet-form-modal" data-bs-toggle="modal">
          Create Pet Listing
        </button>
      </div>
    </section>
    <section class="row">
      <div v-for="pet in pets" :key="pet.id" class="col-md-3">
        <PetListing :petProp="pet"/>
      </div>
    </section>

    <div>
      <ModalWrapper modal-id="pet-form-modal" modal-title="List Pet">
        <PetForm/>
      </ModalWrapper>
    </div>
  </div>











</template>


<style lang="scss" scoped>

</style>