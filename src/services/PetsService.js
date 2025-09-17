import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Pet } from "@/models/Pet.js"





class PetsService{
 async deletePet(petId) {
    const response = await api.delete(`api/pets/${petId}`)
    logger.log('deleted', response.data)
    const index = AppState.pets.findIndex((pet)=>pet.id == petId)
    AppState.pets.splice(index, 1)
  }

async createPet(petData) {
   const response = await api.post('api/pets', petData)
   const pet = new Pet(response.data)
   AppState.pets.push(pet)
 }
 async getPets() {
    const response = await api.get('api/pets')
    // logger.log(response)
    const pets = response.data.map((pet)=> new Pet(pet))
    AppState.pets = pets
    // logger.log(AppState.pets)
  }



}






export const petsService = new PetsService()




