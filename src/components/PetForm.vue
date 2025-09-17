<script setup>
import { petsService } from '@/services/PetsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const petData = ref({

  name: '',
  age: 0,
  isVaccinated: false,
  species: '',
  status: '',
  imgUrl: '',
  likes: [''],

})

async function createPet(){
  try {
    await petsService.createPet(petData.value)
    petData.value = {

  name: '',
  age: 0,
  isVaccinated: false,
  species: '',
  status: '',
  imgUrl: '',
  likes: [''],

}
  } catch (error) {
    Pop.error(error)
    logger.log(error)
  }
}





</script>


<template>
  <form class="container" @submit.prevent="createPet()">
    <div class="row">
      <div class="col-md-6">
        <label for="pet-name" class="form-label">Pet Name:</label>
        <input v-model="petData.name" id="pet-name" class="form-control" type="text" required minlength="1"
          maxlength="50">
      </div>
      <div class="col-md-6">
        <label for="pet-age" class="form-label">Age:</label>
        <input v-model="petData.age" type="number" id="pet-age" class="form-control" required min="0" max="150">
      </div>
      <div class="col-md-6">
        <label for="pet-species" class="form-label">Species:</label>
        <input v-model="petData.species" id="pet-species" class="form-control" type="text" required minlength="1"
          maxlength="50">
      </div>
      <div class="col-md-6">
        <label for="pet-status" class="form-label">Status:</label>
        <select v-model="petData.status" id="pet-status" class="form-control" type="text" required>
          <option value="" disabled>Choose a status</option>
          <option value="adopted">adopted</option>
          <option value="available">available</option>
          <option value="pending">pending</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="pet-likes" class="form-label">Likes:</label>
        <input v-model="petData.likes" id="pet-likes" class="form-control" type="text" minlength="0"
          maxlength="100">
      </div>
      <div class="col-md-6">
        <label for="pet-img" class="form-label">Pet Picture Url:</label>
        <input v-model="petData.imgUrl" id="pet-img" class="form-control" type="text" required minlength="1"
          maxlength="500">
      </div>
      <div>
        <button class="btn btn-gregslist-green" type="submit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped>

</style>








