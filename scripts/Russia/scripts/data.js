export const cityInfo = (cityObj) => {
	return `<article class="card-style">
	<div><img class="card-image" src="../images/Russia/${cityObj.image}" alt="${cityObj.altText}"/></div>
				<h3>${cityObj.name}</h3>
				<ul>
					<li>Population: ${cityObj.population}</li>
					<li>${cityObj.description}</li>
					<li><a href="${cityObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}

export const citizenInfo = (citizenObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/Russia/${citizenObj.image}" alt="${citizenObj.altText}"/></div>
				<h3>${citizenObj.name}</h3>
				<ul>
					<li>Occupation: ${citizenObj.occupation}</li>
					<li>${citizenObj.description}</li>
					<li><a href="${citizenObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}

export const landmarkInfo = (landObj) => {
	return `<article class="card-style">
	<div><img class="card-image" src="../images/Russia/${landObj.image}" alt="${landObj.altText}"/></div>
	<h3>${landObj.name}</h3>
				<ul>
					<li>${landObj.year}</li>
					<li>${landObj.description}</li>
					<li><a href="${landObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}


