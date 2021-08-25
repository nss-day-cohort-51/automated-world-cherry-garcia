import { getItalyCelebData } from "./italyCelebritiyData.js";
import { getItalyCityData } from "./italyCityData.js";
import { getItalyLandMarkData } from "./italyLandMarkData.js";
import { italyCityInfo } from "./italyHtmlrep.js";
import { italyCitizenInfo } from "./italyHtmlrep.js";
import { italyLandmarkInfo } from "./italyHtmlrep.js";



export const getItalyData = () => {
    const contentElement = document.querySelector(".country-card")

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

    contentElement.innerHTML += italyCityRep;

    contentElement.innerHTML += italyCelebRep;

    contentElement.innerHTML += italyMarkRep
}