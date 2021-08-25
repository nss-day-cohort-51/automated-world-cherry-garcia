import { getSwitzCelebData } from "./switzCelebrityData.js";
import { getSwitzCityData } from "./switzCityData.js";
import { getSwitzMarkData } from "./switzLandMarkData.js";
import { cityInfo } from "./switzData.js";
import { celebInfo } from "./switzData.js";
import { landInfo } from "./switzData.js";




export const getSwitzData = () =>{
    const contentElementCity = document.querySelector(".city-cards")
    const contentElementCeleb = document.querySelector(".celeb-cards")
    const contentElementMark = document.querySelector(".mark-cards");

    const city = getSwitzCityData();
    const celeb = getSwitzCelebData();
    const mark = getSwitzMarkData();

    let cityRep = "";
    let celebRep = "";
    let markRep = "";

    city.forEach(countCity =>{
        cityRep += cityInfo(countCity);
    })

    celeb.forEach(countCeleb => {
        celebRep += celebInfo(countCeleb);
    })

    mark.forEach(countMark => {
        markRep += landInfo(countMark);
    })

    contentElementCity.innerHTML += cityRep;

    contentElementCeleb.innerHTML += celebRep;

    contentElementMark.innerHTML += markRep;




}