import { getLandmarks } from "./landmarks/LandmarkDataProvider.js";
import { getCitizens } from "./celebrities/CelebritiesDataProvider.js";
import {getCities} from "./cities/CityDataProvider.js";

import { cityInfo } from "./data.js";
import { citizenInfo } from "./data.js";
import { landmarkInfo } from "./data.js";





export const getRussiaData = () =>{
    const contentElementCity = document.querySelector(".cities")
    const contentElementCitizen = document.querySelector(".citizens")
    const contentElementLand = document.querySelector(".landmarks")


    const city = getCities()
    const celeb = getCitizens()
    const land = getLandmarks()

    let cityRep = "";
    let citizenRep = "";
    let landRep = "";

    city.forEach(countCity =>{
        cityRep += cityInfo(countCity);
    })

    celeb.forEach(countCeleb => {
        citizenRep += citizenInfo(countCeleb);
    })

    land.forEach(countMark => {
        landRep += landmarkInfo(countMark);
    })

    contentElementCity.innerHTML += cityRep;

    contentElementCitizen.innerHTML += citizenRep;

    contentElementLand.innerHTML += landRep;
}
