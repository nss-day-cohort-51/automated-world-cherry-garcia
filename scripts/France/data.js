export const cityInfo = (cityObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/${cityObj.image}" alt="${cityObj.altText}"></div>
				<h3>${cityObj.name}</h3>
				<ul>
					<li>${cityObj.population}</li>
					<li>${cityObj.description}</li>
					<li><a href="${cityObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}

export const citizenInfo = (citizenObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/${citizenObj.image}" alt="${citizenObj.altText}"></div>
				<h3>${citizenObj.name}</h3>
				<ul>
					<li>${citizenObj.occupation}</li>
					<li>${citizenObj.description}</li>
					<li><a href="${citizenObj.link}" target="_blank"> Learn More</a></li>
				</ul>
        	</article>`
}

export const landmarkInfo = (landObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/${landObj.image}" alt="${landObj.altText}"></div>
				<h3>${landObj.name}</h3>
				<ul>
					<li>Year: ${landObj.year}</li>
					<li>${landObj.description}</li>
					<li><a href="${landObj.link}" target="_blank"> Learn More</a></li>
				</ul>
        	</article>`
}


