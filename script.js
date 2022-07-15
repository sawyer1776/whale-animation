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

//Generic function for closing an element arg is the element to be closed
const toggleElement = function (element) {
	element.classList.toggle('closed');
};

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
			.querySelector('.about-subheading')
			.scrollIntoView(true);
	});

const changeSlide = function (direction) {
	//guard clause if at the end of the loop
	//Needs to move the whole UL left or right 1 space
	// divide by length to get how much to move
};

let curSlide = 0;

////Move the poster Slided/////
// const changeSlide = function (dir) {
// 	if (dir === 'forwards') {
// 		if (curSlide < 2) {
// 			curSlide++;
// 			console.log(curSlide);
// 		}
// 	}
// 	if (dir === 'back') {
// 		if (curSlide > -2) {
// 			curSlide--;
// 			console.log(curSlide);
// 		}
// 	}
// 	projectsContent.style.transform = `translateX(${
// 		curSlide * -33.33
// 	}%)`;
// };

let counter = 1;

//current and next slide
let imgCurrent = null;
let imgNext = null;

//make an array of objects with given info
const posters = [
	{
		src: './img/niles-norman-poster.png',
		text: 'Here is some text',
		title: 'Here is a title',
		subImgs: [
			'./img/mountains-concept.png',
			'./img/sealpup-sketch.PNG',
		],
	},
	{
		src: './img/SplashPoster.jpg',
		text: 'learn to swim',
		title: 'Splash! (2D Animated Short Film)',
		subImgs: [
			'./img/mountains-concept.png',
			'./img/sealpup-sketch.PNG',
		],
	},
	{
		src: './img/quest-of-heros-poster.jpg',
		text: 'Here is some text',
		title: 'Here is a title',
		subImgs: [
			'./img/mountains-concept.png',
			'./img/sealpup-sketch.PNG',
		],
	},
	{
		src: './img/quest-of-heros-poster.jpg',
		text: 'Here is some text',
		title: 'Here is a title',
		subImgs: [
			'./img/mountains-concept.png',
			'./img/sealpup-sketch.PNG',
		],
	},
];

//Creates an img html markup for each image in the list
const projectsImgs = function (imgs) {
	let markup = ``;
	imgs.forEach((img) => {
		markup += `<img
				class="project-img"
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
				}" class="poster-img shadow" /> 
		
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

const movePosters = function (id, direction) {
	let distance = -33;
	if (direction === 'right') {
		distance = 0;
	}
	projectsContent.style.transform = `translateX(${
		+id * distance
	}%)`;
};

const togglePosters = function (clicked) {
	//decide if opening or closing an element
	//opening push left closing push right
	let direction = 'left';
	if (clicked.classList.contains('projects-clicked')) {
		direction = 'right';
	}
	clicked.classList.toggle('projects-clicked');
	//Needs to know the order and which way to move
	movePosters(clicked.dataset.id, direction);

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
		let clicked = e.target.closest('.projects-poster');
		togglePosters(clicked);
	});
});

document
	.querySelectorAll('.poster-close')
	.forEach((element) => {
		element.addEventListener('click', function (e) {
			let clicked = e.target.closest('.projects-poster');
			togglePosters(clicked);
		});
	});

// KEEEP THIS
///Listen for clicks on the slider arrows
const sliderForwardListener = function () {
	btnForward.addEventListener('click', function () {
		movePosters(1, 'left');
	});
};
const sliderBackListener = function () {
	btnBack.addEventListener('click', function () {
		changeSlide(1, 'right');
	});
};

sliderForwardListener();
sliderBackListener();

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
	document.querySelector('.create-close'),
	createForm
);

//OPEN and CLOSE supporter contact form

clickListener(
	document.querySelector('.supporter-btn'),
	supporterForm
);
clickListener(
	document.querySelector('.supporter-close'),
	supporterForm
);
