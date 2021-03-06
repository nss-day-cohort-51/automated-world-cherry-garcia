export const italyCityInfo = (cityObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="images/${cityObj.image}" alt="italian cities" /></div>
				<h3>${cityObj.name}</h3>
				<ul>
					<li>Population: ${cityObj.population}</li>
					<li>Description: ${cityObj.description} inches</li>
					<li class="card-link"><a href="${cityObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}

export const italyCitizenInfo = (citizenObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="images/${citizenObj.image}" alt="italian celebrity" /></div>
				<h3>${citizenObj.name}</h3>
				<ul>
					<li>${citizenObj.occupation}</li>
					<li>Length: ${citizenObj.description} inches</li>
					<li class="card-link"><a href="${citizenObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}

export const italyLandmarkInfo = (landObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="images/${landObj.image}" alt="italian landmarks" /></div>
				<h3>${landObj.name}</h3>
				<ul>
					<li>${landObj.year}</li>
					<li>Length: ${landObj.description} inches</li>
					<li class="card-link"><a href="${landObj.link}" target="_blank">Learn More</a></li>
				</ul>
        	</article>`
}