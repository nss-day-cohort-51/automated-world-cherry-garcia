export const cityInfo = (cityObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/${cityObj.image}"></div>
				<h3>${cityObj.name}</h3>
				<ul>
					<li>Population: ${cityObj.population}</li>
					<li>Description: ${cityObj.description}</li>
					<li>Link:<a href="${cityObj.link}">Learn More</a></li>
				</ul>
        	</article>`
}

export const citizenInfo = (citizenObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/${citizenObj.image}"></div>
				<h3>${citizenObj.name}</h3>
				<ul>
					<li>${citizenObj.occupation}</li>
					<li>Description: ${citizenObj.description}</li>
					<li>Link: <a href="${citizenObj.link}">Learn More</a></li>
				</ul>
        	</article>`
}

export const landmarkInfo = (landObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/${landObj.image}"></div>
				<h3>${landObj.name}</h3>
				<ul>
					<li>Year: ${landObj.year}</li>
					<li>Description: ${landObj.description}</li>
					<li class>Link: <a href="${landObj.link}">Learn More</a></li>
				</ul>
        	</article>`
}


