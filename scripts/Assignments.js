import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }
   return petWalker
   }
const findCity = (walker) => {
    let walkercity = null
    for (const city of cities) {
        if (city.cityId === walker.walkerCityId) {
            walkercity = city
        }
    }
    return walkercity
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const pet of pets) {
        const currentPetWalker = findWalker(pet, walkers)
        const currentWalkerCity = findCity(currentPetWalker)
        assignmentHTML += `
            <li>
                ${pet.name} is being walked by
                ${currentPetWalker.name} in ${currentWalkerCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

