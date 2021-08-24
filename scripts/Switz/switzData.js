export const cityInfo = (arrayObj) => {
	return `<article class="card-city">
				<h3 class="card-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Population: ${arrayObj.population}</li>
					<li class="card-details">Description: ${arrayObj.description}</li>
					<li class="card-details">Link: <a href="${arrayObj.link}">Check this out!</a></li>
				</ul>
        	</article>`
}

export const celebInfo = (arrayObj) => {
	return `<article class="card-celeb">
				<h3 class="card-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Occupation: ${arrayObj.occupation}</li>
					<li class="card-details">Description: ${arrayObj.description}</li>
					<li class="card-details">Link: <a href="${arrayObj.link}">Check this out!</a></li>
				</ul>
        	</article>`
}

export const landInfo = (arrayObj) => {
	return `<article class="card-land">
				<h3 class="fish-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Year: ${arrayObj.year}</li>
					<li class="card-details">Description: ${arrayObj.description}</li>
					<li class="card-details">Link: <a href="${arrayObj.link}">Check this out!</a></li>
				</ul>
        	</article>`
}