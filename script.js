const projectsContent = document.querySelector(
	'.projects-content'
);
const createForm = document.querySelector('.create-form');
const supporterForm = document.querySelector(
	'.supporter-form'
);
const btnForward = document.querySelector(
	'.btn-slider-forward'
);
const btnBack = document.querySelector('.btn-slider-back');
const hamburgerClose = document.querySelector(
	'.hamburger-close'
);
const hamburgerOpen = document.querySelector(
	'.nav-hamburger'
);
const navLinks = document.querySelector('.nav-links');

//Generic function for closing an element arg is the element to be closed
const toggleElement = function (element) {
	element.classList.toggle('closed');
};
const toggleMobile = function (element) {
	element.classList.toggle('closed-mobile');
};

const breadcrumbMore = document.querySelector(
	'.breadcrumb-more'
);

const photoContainer = document.querySelector(
	'.photo-container'
);
const photoTwo = document.querySelector('.photo-2');
setTimeout(() => {
	breadcrumbMore.classList.remove('hide-crumb');
}, 2000);

const lockPhoto = function () {
	photoTwo.classList.toggle('lock');
};

navLinks.addEventListener('click', () => {
	setTimeout(() => {
		toggleMobile(navLinks);
	}, 950);
});
hamburgerOpen.addEventListener('click', () => {
	toggleMobile(navLinks);
	console.log('click');
});

photoContainer.addEventListener('click', lockPhoto);

//function for scroll over
function highlight(el) {
	el.classList.add('link-highlight');
}

//function for removing scrollover
function offlight(el) {
	el.classList.remove('link-highlight');
}
//document.querySelector('nav-links').onmouseover = highlight;

//OPEN and Close the About section
document
	.querySelector('.about-links')
	.addEventListener('click', function (e) {
		document
			.querySelector('.about-expansion-content')
			.classList.toggle('closed');
		document
			.querySelector('.close')
			.classList.toggle('closed');
		document
			.querySelector('.learn-more')
			.classList.toggle('closed');
	});

//Close it at the end
document
	.querySelector('.about-close-btn')
	.addEventListener('click', function (e) {
		document
			.querySelector('.about-expansion-content')
			.classList.toggle('closed');
		document
			.querySelector('.close')
			.classList.toggle('closed');
		document
			.querySelector('.learn-more')
			.classList.toggle('closed');
	});

/////Move back to the top when closing the about section
document
	.querySelector('.about-close-btn')
	.addEventListener('click', () => {
		console.log('clikcing');
		document
			.querySelector('.about-text')
			.scrollIntoView(true);
	});

//make an array of objects with given info
const posters = [
	{
		src: './img/niles-norman-poster.jpg',
		text: 'A return to classic 2D Animation, Niles Norman ‘s Traveling Adventures, brings back the feel of Saturday morning cartoons of the 90s with the quality and artisanship of animation classic films, while inspiring families with amazing adventures, educational  content, and edifying values in a light-hearted family entertainment show. ',
		title: 'Niles Norman’s Traveling Adventures',
		subImgs: ['./img/mountains-concept.jpg'],
		textAdditional:
			'Niles Norman’s Traveling Adventures  follows the traveling adventures of Niles Norman and his production team as they capture the wildlife, animals, sights, and experiences of amazing locations all over the world! Often finding themselves with an opportunity to help local people or wildlife, the Niles Norman team films their show within the show, providing a funny look into documentary and television production as they go about their adventure.',
		imgAdditional: ['./img/brenda-concept-sketch.jpg'],
	},
	{
		src: './img/SplashPoster.jpg',
		text: 'In the harsh but beautiful environment of the Arctic, a young Harp Seal pup must find his courage to overcome his fear of the water he was born to play in. ',
		title: 'Splash! (2D Animated Short Film)',
		subImgs: ['./img/sealpup-sketch.jpg'],
	},
	{
		src: './img/quest-of-heros-poster.jpg',
		text: 'A party of friends playing an online game inside of  the  Land of Kallyria, a fictional multiplayer online video game,  must together  face the challenges of  dangerous creatures, treacherous elements, former friends, and restore the land of Kallyria from the evil Queen. The Danger, Magic, Impossible Quests, Mythical Creatures,and in-game challenges they face  bring them closer together as friends and help them face their real life challenges outside in the real world.  ',
		title: 'Quest of Heroes  (Original Animated Series)',
		subImgs: [],
	},
];

//Creates an img html markup for each image in the list
const projectsImgs = function (imgs) {
	let markup = ``;
	imgs.forEach((img) => {
		markup += `<img
				class="project-img"
				alt="Concept image"
				src="${img}"
			/>`;
	});
	return markup;
};

const createImg = function (index) {
	const newItem = `<li class="projects-poster" data-id=${index}>
				<div class="poster-wide "> 
			
			 <img src="${
					posters[index].src
				}" class="poster-img shadow" alt="Poster of Animation Project"/> 
		
			<aside class="poster-content">
						<div class="poster-close">
							<ion-icon name="close-outline"></ion-icon>
						</div>
						<h2 class="poster-heading subheading">${
							posters[index].title
						}</h2>
						<p class="poster-paragraph paragraph"> ${
							posters[index].text
						} </p>
						<div class="project-imgs">
							${projectsImgs(posters[index].subImgs)}			
						</div>
						<p class="poster-paragraph paragraph"> ${
							posters[index].textAdditional
								? posters[index].textAdditional
								: ''
						} </p>
						<div class="project-imgs">
							${
								posters[index].imgAdditional
									? projectsImgs(
											posters[index].imgAdditional
									  )
									: ''
							}			
						</div>
						
						
					</aside>
				</div>
			</li> `;
	//Add the image in

	document
		.querySelector('.projects-content')
		.insertAdjacentHTML('beforeend', newItem);
};

//Initalize posters
posters.forEach((poster, index) => {
	createImg(index);
});

//Same as data ID of the farthest left image in view 0 based
let currentImg = 0;

const movePosters = function (id) {
	projectsContent.style.transform = `translateX(${
		id * -33.333
	}%)`;
};

const togglePosters = function (clicked) {
	//decide if opening or closing an element
	//closing, reset
	if (clicked.classList.contains('projects-clicked')) {
		if (posters.length > 3) {
			document
				.querySelector('.slider-btns')
				.classList.remove('closed');
		}
		movePosters(+currentImg);
	} else {
		//opening, move to the data-id position
		if (posters.length > 3) {
			document
				.querySelector('.slider-btns')
				.classList.add('closed');
		}
		movePosters(clicked.dataset.id);
	}
	clicked.classList.toggle('projects-clicked');

	//centers the poster in the view
	document
		.querySelector('.projects-content')
		.scrollIntoView(false);
};

const posterImgs = document.querySelectorAll('.poster-img');
//add an event listener to each of the posters
posterImgs.forEach((poster) => {
	poster.addEventListener('click', function (e) {
		//toggle open or closed when clicked
		togglePosters(e.target.closest('.projects-poster'));
	});
});

document
	.querySelectorAll('.poster-close')
	.forEach((element) => {
		element.addEventListener('click', function (e) {
			togglePosters(e.target.closest('.projects-poster'));
		});
	});

///Listen for clicks on the slider arrows
////Only Add if Btns are present(4 or more posters)
if (posters.length > 3) {
	btnForward.addEventListener('click', function () {
		if (currentImg < posters.length - 3) {
			currentImg++;
			movePosters(+currentImg);
			console.log(currentImg);
		}
	});
	btnBack.addEventListener('click', function () {
		if (currentImg > 0) {
			currentImg--;
			movePosters(+currentImg);
			console.log(currentImg);
		}
	});
} else {
	document.querySelector('.slider-btns').remove();
}

const clickListener = function (clickEl, closeEl) {
	clickEl.addEventListener('click', function () {
		toggleElement(closeEl);
	});
};

//OPEN and CLOSE create with us contact form
clickListener(
	document.querySelector('.create-btn'),
	createForm
);
clickListener(
	document.querySelector('.create-with-us'),
	createForm
);
clickListener(
	document.querySelector('.create-close'),
	createForm
);

//OPEN and CLOSE supporter contact form

clickListener(
	document.querySelector('.supporter-btn'),
	supporterForm
);
clickListener(
	document.querySelector('.become-a-supporter'),
	supporterForm
);
clickListener(
	document.querySelector('.supporter-close'),
	supporterForm
);
