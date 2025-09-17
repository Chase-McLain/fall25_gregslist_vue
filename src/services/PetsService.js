import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Pet } from "@/models/Pet.js"





class PetsService{
 async getPets() {
    const response = await api.get('api/pets')
    logger.log(response)
    const pets = response.data.map((pet)=> new Pet(pet))
    AppState.pets = pets
    logger.log(AppState.pets)
  }



}






export const petsService = new PetsService()




