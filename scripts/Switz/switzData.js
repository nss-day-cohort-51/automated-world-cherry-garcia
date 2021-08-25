export const cityInfo = (arrayObj) => {
	return `<article class="card-style">
				<img class="card-image" src="${arrayObj.image}" alt="Image from Array"></img>
				<h3 class="city-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Population: ${arrayObj.population}</li>
					<li class="card-details">Description: ${arrayObj.description}</li>
					<li class="card-details">Link: <a href="${arrayObj.link}">Check this out!</a></li>
				</ul>
        	</article>`
}

export const celebInfo = (arrayObj) => {
	return `<article class="card-style">
				<img class="card-image" src="${arrayObj.image}" alt="Image from Array"></img>
				<h2 class="celeb-name">${arrayObj.name}</h2>
				<h4>${arrayObj.occupation}<h4>
				<p>${arrayObj.description}<p>
				<p><a href="${arrayObj.link}">Learn More</a><p>
        	</article>`
}

export const landInfo = (arrayObj) => {
	return `<article class="card-style">
				<img class="card-image" src="${arrayObj.image}" alt="Image from Array"></img>
				<h3 class="mark-name">${arrayObj.name}</h3>
				<ul>
					<li class="card-details">Year: ${arrayObj.year}</li>
					<li class="card-details">Description: ${arrayObj.description}</li>
					<li class="card-details">Link: <a href="${arrayObj.link}">Check this out!</a></li>
				</ul>
        	</article>`
}