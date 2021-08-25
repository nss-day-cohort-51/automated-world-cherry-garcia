import { getLandmarks } from "./landmarks/LandmarkDataProvider.js";
import { getCitizens } from "./celebrities/CelebritiesDataProvider.js";
import {getCities} from "./cities/CityDataProvider.js";

import { cityInfo } from "./data.js";
import { citizenInfo } from "./data.js";
import { landmarkInfo } from "./data.js";

export const cityList = () =>{
    const listCities = getCities()
    addCitiesToDom(listCities)
}



const addCitiesToDom = (arrayOfCities) => {

    const contentElement = document.querySelector(".country-cards")

    let cityHTMLRepresentation = ""

    for (const info of arrayOfCities) {
        cityHTMLRepresentation += cityInfo(info)
    }
    contentElement.innerHTML += cityHTMLRepresentation
}


export const citizenList = () =>{
    const listCitizens = getCitizens()
    addCitizensToDom(listCitizens)
}


const addCitizensToDom = (arrayOfCitizens) => {

    const contentElement = document.querySelector(".country-cards")

    let citizenHTMLRepresentation = ""

    for (const info of arrayOfCitizens) {
        citizenHTMLRepresentation += citizenInfo(info)
    }
    contentElement.innerHTML += citizenHTMLRepresentation
}

export const landmarkList = (arrayofLandmarks) =>{
    const listLandmarks = getLandmarks()
    addLandmarksToDom(listLandmarks)
}


const addLandmarksToDom = (arrayofLandmarks) => {

    const contentElement = document.querySelector(".country-cards")

    let landmarkHTMLRepresentation = ""

    for (const info of arrayofLandmarks) {
        landmarkHTMLRepresentation += landmarkInfo(info)
    }
    contentElement.innerHTML += landmarkHTMLRepresentation
}
