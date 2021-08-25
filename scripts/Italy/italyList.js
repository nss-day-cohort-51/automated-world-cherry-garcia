import { getItalyCelebData } from "./italyCelebritiyData.js";
import { getItalyCityData } from "./italyCityData.js";
import { getItalyLandMarkData } from "./italyLandMarkData.js";
import { italyCityInfo } from "./italyHtmlrep.js";
import { italyCitizenInfo } from "./italyHtmlrep.js";
import { italyLandmarkInfo } from "./italyHtmlrep.js";



export const getItalyData = () => {
    const contentElementCity = document.querySelector(".cities")
    const contentElementCeleb = document.querySelector(".citizens")
    const contentElementMark = document.querySelector(".landmarks");

    const italyCity = getItalyCityData();
    const italyCeleb = getItalyCelebData();
    const italyLandMark = getItalyLandMarkData();

    let italyCelebRep = "";
    let italyCityRep = "";
    let italyMarkRep = "";

    italyCity.forEach(countCity => {
        italyCityRep += italyCityInfo(countCity);
    })

    italyCeleb.forEach(countCeleb => {
        italyCelebRep += italyCitizenInfo(countCeleb);
    })

    italyLandMark.forEach(countMark => {
        italyMarkRep += italyLandmarkInfo(countMark);
    })

    contentElementCity.innerHTML += italyCityRep;

    contentElementCeleb.innerHTML += italyCelebRep;

    contentElementMark.innerHTML += italyMarkRep
}