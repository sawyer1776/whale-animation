//POSTER CONTENT
const posters = [
	{
		src: './img/tiki-poster.jpg',
		text: 'Tiki Tiki Feud is a film about two rival Tikis who come to life at night and compete to find ways of attracting the attention of tourists during the day. During their  rivalry they ultimately discover the importance of friendship and teamwork. ',
		title: 'Tiki Tiki Fued',
		subImgs: [],
	},
	{
		src: './img/SplashPoster.jpg',
		text: 'In the harsh but beautiful environment of the Arctic, a young Harp Seal pup must find his courage to overcome his fear of the water he was born to play in. ',
		title: 'Splash! (2D Animated Short Film)',
		subImgs: ['./img/sealpup-sketch.jpg'],
	},
	{
		src: './img/little-bright-stars-poster.jpg',
		text: `Little Bright Stars is  a fun, musically educational animated show for early child development. `,
		title: `Little Bright Stars`,
		subImgs: ['./img/little-bright-stars-img-3.jpg'],
		textAdditional: `With the goal  to educate young minds to reach their full potential with learning through songs, images, colors and phonics Little Bright Stars Inspires learning , growing, searching, wonder, knowledge, and fun`,
		imgAdditional: ['./img/little-bright-stars-img-2.jpg'],
		imgAdditionalTwo: ['./img/little-bright-stars-img.jpg'],
	},
	{
		src: './img/adventures_poster_02.jpg',
		text: `A return to classic 2D Animation, The Traveling Adventures of Al Mennie, brings back the feel of Saturday morning cartoons of the 90s with the quality and artisanship of animation classic films, while inspiring families with amazing adventures, educational  content, and edifying values in a light-hearted family entertainment show. `,
		title: `The Traveling Adventures of Al Mennie`,
		subImgs: ['./img/mountains-concept.jpg'],
		textAdditional: `The Traveling Adventures of Al Mennie  follows the traveling adventures of Al Mennie and his production team as they capture the wildlife, animals, sights, and experiences of amazing locations all over the world! Often finding themselves with an opportunity to help local people or wildlife, the Al Mennie team films their show within the show, providing a funny look into documentary and television production as they go about their adventure.`,
		imgAdditional: ['./img/wave.jpg'],
	},

	{
		src: './img/quest-of-heros-poster.jpg',
		text: 'A party of friends playing an online game inside of  the  Land of Kallyria, a fictional multiplayer online video game,  must together  face the challenges of  dangerous creatures, treacherous elements, former friends, and restore the land of Kallyria from the evil Queen. The Danger, Magic, Impossible Quests, Mythical Creatures,and in-game challenges they face  bring them closer together as friends and help them face their real life challenges outside in the real world.  ',
		title: 'Quest of Heroes  (Original Animated Series)',
		subImgs: [],
	},
];
// Selectors
const navLinks = document.querySelector('.nav-links');
const staticLogo = document.querySelector('.hero-logo');
const heroContent = document.querySelector('.hero-content');
const sliderBtns = document.querySelector('.slider-btns');
const btnForward = document.querySelector(
	'.btn-slider-forward'
);
const btnBack = document.querySelector('.btn-slider-back');
const projectsContent = document.querySelector(
	'.projects-content'
);
const projectsContentContainer = document.querySelector(
	'.projects-content-container'
);
const aboutExpansionContent = document.querySelector(
	'.about-expansion-content'
);
const topClose = document.querySelector('.close');
const bottmomClose = document.querySelector(
	'.about-close-btn'
);
const learnMore = document.querySelector('.learn-more');
const createForm = document.querySelector('.create-form');
const supporterForm = document.querySelector(
	'.supporter-form'
);
// Generic Functions
const toggleElement = function (
	element,
	elementTwo,
	elementThree
) {
	if (element) {
		element.classList.toggle('closed');
	}
	if (elementTwo) {
		elementTwo.classList.toggle('closed');
	}
	if (elementThree) {
		elementThree.classList.toggle('closed');
	}
};
const toggleMobile = function (element) {
	element.classList.toggle('closed-mobile');
};

const clickListen = function (
	element,
	func,
	argument,
	argumentTwo,
	argumentThree
) {
	element.addEventListener('click', () => {
		func(argument, argumentTwo, argumentThree);
	});
};

//Specific Functions
const switchVideo = function () {
	staticLogo.remove();

	const replacementVideo = `<video autoplay muted class="video">
				<source class="hero-logo" src="img/motion-logo-desktop.mp4"
					alt="logo of a whale against a starry sky">
			</video>
			`;
	heroContent.insertAdjacentHTML(
		'beforeend',
		replacementVideo
	);
};

const showScroll = function () {
	document
		.querySelector('.body')
		.classList.remove('body-scroll-hidden');
};
const showNav = function () {
	document
		.querySelector('.navbar')
		.classList.remove('hide-navbar');
};

setTimeout(() => {
	document
		.querySelector('.breadcrumb-more')
		.classList.remove('hide-crumb');
}, 11500);
setTimeout(() => {
	showNav();
}, 9500);
setTimeout(() => {
	showScroll();
}, 9500);

document
	.querySelector('.body')
	.addEventListener('wheel', (e) => {
		showScroll();
		showNav();
	});
document
	.querySelector('.body')
	.addEventListener('touchstart', (e) => {
		showScroll();
		showNav();
	});
clickListen(document.querySelector('.body'), showScroll);
clickListen(document.querySelector('.body'), showNav);

const lockPhoto = function () {
	document
		.querySelector('.photo-2')
		.classList.toggle('lock');
};

//Skewed hover background
function highlight(el) {
	el.classList.add('link-highlight');
}
function offlight(el) {
	el.classList.remove('link-highlight');
}
//SLIDER
let postersOverflow = true;
let numberOfVisiblePosters = 1;
let currentImg = 0;

const checkScreenSize = function () {
	if (window.matchMedia('(max-width: 68em)').matches) {
		numberOfVisiblePosters = 1;
	} else {
		numberOfVisiblePosters = 3;
		switchVideo();
	}

	if (posters.length > numberOfVisiblePosters) {
		postersOverflow = true;
	} else {
		postersOverflow = false;
		sliderBtns.classList.add('hidden');
	}
};
// Generate Poster Content
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
						<div class="project-imgs">
							${
								posters[index].imgAdditionalTwo
									? projectsImgs(
											posters[index].imgAdditionalTwo
									  )
									: ''
							}			
						</div>
						
						
					</aside>
				</div>
			</li> `;
	projectsContent.insertAdjacentHTML('beforeend', newItem);
};
const movePosters = function (id) {
	checkScreenSize();
	if (numberOfVisiblePosters === 3) {
		projectsContent.style.transform = `translateX(${
			id * (-100 / numberOfVisiblePosters)
		}%)`;
	}
};
const togglePosters = function (clicked) {
	checkScreenSize();
	//centers the poster in the view
	console.log('scrolling to view');
	projectsContentContainer.scrollIntoView(false);
	//decide if opening or closing an element
	//closing, reset
	if (clicked.classList.contains('projects-clicked')) {
		movePosters(+currentImg);
		if (postersOverflow) {
			sliderBtns.classList.remove('closed');
		}
		if (numberOfVisiblePosters === 1) {
			projectsContent.style.overflowX = 'scroll';
		}
	} else {
		//opening, move to the data-id position
		movePosters(clicked.dataset.id);
		if (postersOverflow) {
			document
				.querySelector('.slider-btns')
				.classList.add('closed');
		}
		if (numberOfVisiblePosters === 1) {
			console.log('kill overflow');
			projectsContent.style.overflowX = 'hidden';
		}
	}
	clicked.classList.toggle('projects-clicked');
};

// INIT
checkScreenSize();
posters.forEach((_, index) => {
	createImg(index);
});

const posterImgs = document.querySelectorAll('.poster-img');
//add an event listener to each of the posters
posterImgs.forEach((poster) => {
	poster.addEventListener('click', function (e) {
		//toggle open or closed when clicked
		togglePosters(e.target.closest('.projects-poster'));
	});
});

///Listen for clicks on the slider arrows
////Only Add if Btns are present(4 or more posters)
if (postersOverflow) {
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
	console.log(sliderBtns.classList);
	toggleElement(sliderBtns);
}

//LISTENERS
clickListen(navLinks, toggleMobile, navLinks);
clickListen(
	document.querySelector('.nav-hamburger'),
	toggleMobile,
	navLinks
);
clickListen(
	document.querySelector('.photo-container'),
	lockPhoto
);
clickListen(
	document.querySelector('.about-links'),
	toggleElement,
	aboutExpansionContent,
	learnMore,
	topClose
);
clickListen(
	bottmomClose,
	toggleElement,
	aboutExpansionContent,
	learnMore,
	topClose
);
bottmomClose.addEventListener('click', () => {
	document.querySelector('.about-text').scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
	});
});

document
	.querySelectorAll('.poster-close')
	.forEach((element) => {
		element.addEventListener('click', function (e) {
			togglePosters(e.target.closest('.projects-poster'));
		});
	});

//OPEN and CLOSE create with us contact form
clickListen(
	document.querySelector('.create-btn'),
	toggleElement,
	createForm
);
clickListen(
	document.querySelector('.create-with-us'),
	toggleElement,
	createForm
);
clickListen(
	document.querySelector('.create-close'),
	toggleElement,
	createForm
);

clickListen(
	document.querySelector('.supporter-btn'),
	toggleElement,
	supporterForm
);

//CHANGED TO LINK TO https://www.patreon.com/WhaleAnimationStudios
// clickListen(
// 	document.querySelector('.become-a-supporter'),
// 	toggleElement,
// 	supporterForm
// );
clickListen(
	document.querySelector('.supporter-close'),
	toggleElement,
	supporterForm
);

let variable = [1, 2, 3, 4];
variable.splice(0, 2);
console.log(variable);
