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

const posterImgs = document.querySelectorAll('.poster-img');

//Generic function for closing an element arg is the element to be closed
const toggleElement = function (element) {
	element.classList.toggle('closed');
};

//add an event listener to each of the posters
posterImgs.forEach((poster) => {
	poster.addEventListener('click', function (e) {
		//toggle open or closed when clicked
		e.target
			.closest('.projects-poster')
			.classList.toggle('projects-clicked');
		//centers the poster in the view
		document
			.querySelector('.projects-content')
			.scrollIntoView(false);
	});
});

document
	.querySelectorAll('.poster-close')
	.forEach((element) => {
		element.addEventListener('click', function (e) {
			document
				.querySelectorAll('.projects-clicked')
				.forEach((element) => {
					element.classList.remove('projects-clicked');
					console.log('removing');
				});
			document
				.querySelector('.projects-poster')
				.scrollIntorView(false);
		});
	});

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
///Listen for clicks on the slider arrows
const sliderForwardListener = function () {
	btnForward.addEventListener('click', function () {
		changeSlide('forwards');
	});
};
const sliderBackListener = function () {
	btnBack.addEventListener('click', function () {
		changeSlide('back');
	});
};

sliderForwardListener();
sliderBackListener();
let curSlide = 0;

////Move the poster Slided/////
const changeSlide = function (dir) {
	if (dir === 'forwards') {
		if (curSlide < 2) {
			curSlide++;
			console.log(curSlide);
		}
	}
	if (dir === 'back') {
		if (curSlide > -2) {
			curSlide--;
			console.log(curSlide);
		}
	}
	projectsContent.style.transform = `translateX(${
		curSlide * -33.33
	}%)`;
};

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
