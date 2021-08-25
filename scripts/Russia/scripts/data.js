export const cityInfo = (cityObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/Russia/${cityObj.image}" /></div>
				<h3>${cityObj.name}</h3>
				<ul>
					<li>Population: ${cityObj.population}</li>
					<li>Description: ${cityObj.description} inches</li>
					<li>Link: ${cityObj.link}</li>
				</ul>
        	</article>`
}

export const citizenInfo = (citizenObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/Russia/${citizenObj.image}" /></div>
				<h3>${citizenObj.name}</h3>
				<ul>
					<li>${citizenObj.occupation}</li>
					<li>Length: ${citizenObj.description} inches</li>
					<li>Found: ${citizenObj.link}</li>
				</ul>
        	</article>`
}

export const landmarkInfo = (landObj) => {
	return `<article class="card-style">
				<div><img class="card-image" src="../images/Russia/${landObj.image}" /></div>
				<h3>${landObj.name}</h3>
				<ul>
					<li>${landObj.year}</li>
					<li>Length: ${landObj.description} inches</li>
					<li>Found: ${landObj.link}</li>
				</ul>
        	</article>`
}


