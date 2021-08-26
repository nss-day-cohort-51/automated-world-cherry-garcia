export const cityInfo = (arrayObj) => {
	return `<article class="card-style">
				<img class="card-image" src="${arrayObj.image}" alt="Image from Array"></img>
				<h3 class="city-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Population: ${arrayObj.population}</li>
					<li class="card-details">${arrayObj.description}</li>
					<li class="card-details"><a href="${arrayObj.link}">Learn More</a></li>
				</ul>
        	</article>`
}

export const celebInfo = (arrayObj) => {
	return `<article class="card-style">
				<img class="card-image" src="${arrayObj.image}" alt="Image from Array"></img>
				<h3 class="celeb-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Occupation: ${arrayObj.occupation}</li>
					<li class="card-details">${arrayObj.description}</li>
					<li class="card-details"><a href="${arrayObj.link}">Learn More</a></li>
				</ul>
        	</article>`
}

export const landInfo = (arrayObj) => {
	return `<article class="card-style">
				<img class="card-image" src="${arrayObj.image}" alt="Image from Array"></img>
				<h3 class="mark-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">${arrayObj.year}</li>
					<li class="card-details">${arrayObj.description}</li>
					<li class="card-details"><a href="${arrayObj.link}">Learn More</a></li>
				</ul>
        	</article>`
}