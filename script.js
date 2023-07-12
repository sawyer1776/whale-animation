//POSTER CONTENT
const posters = [
	{
		src: '../img/tiki-poster.jpg',
		text: 'Tiki Tiki Feud is a film about two rival Tikis who come to life at night and compete to find ways of attracting the attention of tourists during the day. During their  rivalry they ultimately discover the importance of friendship and teamwork. ',
		title: 'Tiki Tiki Fued',
		subImgs: [],
		format: 'Short Film ',
		genre: 'Comedy, Musical ',
		audience: 'Family',
		html: 'tiki-tiki-feud',
	},
	{
		src: '../img/SplashPoster.jpg',
		text: 'In the harsh but beautiful environment of the Arctic, a young Harp Seal pup must find his courage to overcome his fear of the water he was born to play in. ',
		title: 'Splash!',
		subImgs: ['../img/sealpup-sketch.jpg'],
		format: 'Short Film ',
		genre: 'Nature, Musical',
		audience: 'Family',
		html: 'splash',
	},
	{
		src: '../img/little-bright-stars-poster.jpg',
		text: ` Little Bright Stars is a fun, musically educational animated show for early child development. With the goal to educate young minds to reach their full potential with learning through songs, images, colors and phonics Little Bright Stars Inspires learning , growing, searching, wonder, knowledge, and fun`,
		title: `Little Bright Stars`,
		subImgs: [
			'../img/little-bright-stars-img-3.jpg',
			'../img/little-bright-stars-img-2.jpg',
			'../img/little-bright-stars-img.jpg',
		],
		format: 'Series',
		genre: 'Educational, Musical',
		audience: 'Nursey Age 0-3',
		html: 'little-bright-stars',
	},
	{
		src: '../img/adventures_poster_02.jpg',
		text: `A return to classic 2D Animation, The Traveling Adventures of Al Mennie, brings back the feel of Saturday morning cartoons of the 90s with the quality and artisanship of animation classic films, while inspiring families with amazing adventures, educational content, and edifying values in a light-hearted family entertainment show.  The Traveling Adventures of Al Mennie follows the traveling adventures of Al Mennie and his production team as they capture the wildlife, animals, sights, and experiences of amazing locations all over the world! Often finding themselves with an opportunity to help local people or wildlife, the Al Mennie team films their show within the show, providing a funny look into documentary and television production as they go about their adventure. `,
		title: `The Traveling Adventures of Al Mennie`,
		subImgs: [
			'../img/mountains-concept.jpg',
			'../img/wave.jpg',
		],
		format: 'Series',
		genre: 'Adventure, Travel, Wildlife',
		audience: 'Kids 9-12',
		html: 'al-mennie',
	},

	{
		src: '../img/quest-of-heros-poster.jpg',
		text: 'A party of friends playing an online game inside of  the  Land of Kallyria, a fictional multiplayer online video game,  must together  face the challenges of  dangerous creatures, treacherous elements, former friends, and restore the land of Kallyria from the evil Queen. The Danger, Magic, Impossible Quests, Mythical Creatures,and in-game challenges they face  bring them closer together as friends and help them face their real life challenges outside in the real world.  ',
		title: 'Quest of Heroes',
		subImgs: [
			'../img/qoh-concept-01.png',
			'../img/qoh-concept-02.png',
		],
		format: 'Series',
		genre: 'Fantasy, Gaming, Comedy',
		audience: 'Family',
		html: 'quest-of-heros',
	},
	{
		src: '../img/ather-fallen-poster.png',
		text: 'When a young and talented engineer is taken captive on a routine fuel run for his hydrogen powered city in the sky, he will be thrust into a world of deceit and a lie decades old that he can either ignore or work with a fiery former pirate and her crew to put right.  A story of friendship, betrayal, and loss, Aether Fallen shows that despite the lingering of darkness and lies in the world, with the right people behind us, anything is possible. That no matter where you’re from or the origins of one’s birth, greatness and adventure can be found by those who seek it.',
		title: 'Ather Fallen',
		subImgs: ['../img/af-concept.png'],
		format: 'Series',
		genre: 'Drama, Adventure',
		audience: 'Adults, Teens',
		html: 'ather-fallen',
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
	if (!element) return;
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

// setTimeout(() => {
// 	document
// 		.querySelector('.breadcrumb-more')
// 		.classList.remove('hide-crumb');
// }, 11500);
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
let postersOverflow = false;
let numberOfVisiblePosters = posters.length;
let currentImg = 0;

const checkScreenSize = function () {
	if (window.matchMedia('(max-width: 68em)').matches) {
		// numberOfVisiblePosters = 1;
	} else {
		// numberOfVisiblePosters = 3;
		switchVideo();
	}

	// if (posters.length > numberOfVisiblePosters) {
	// 	postersOverflow = true;
	// } else {
	// 	postersOverflow = false;
	// 	sliderBtns.classList.add('hidden');
	// }
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
				<a href="projects/${posters[index].html}.html" class="poster-wide "> 
			
			 <img src="${posters[index].src}" class="poster-img shadow" alt="Poster of Animation Project"/> 
		
			
				</a>
			</li> `;
	// const newItem = `<li class="projects-poster" data-id=${index}>
	// 			<div class="poster-wide ">

	// 		 <img src="${
	// 				posters[index].src
	// 			}" class="poster-img shadow" alt="Poster of Animation Project"/>

	// 		<aside class="poster-content">
	// 					<div class="poster-close">
	// 						<ion-icon name="close-outline"></ion-icon>
	// 					</div>
	// 					<h2 class="poster-heading subheading">${
	// 						posters[index].title
	// 					}</h2>
	// 					<p class="poster-paragraph paragraph"> ${
	// 						posters[index].text
	// 					} </p>
	// 					<div class="project-imgs">
	// 						${projectsImgs(posters[index].subImgs)}
	// 					</div>
	// 					<p class="poster-paragraph paragraph"> ${
	// 						posters[index].textAdditional
	// 							? posters[index].textAdditional
	// 							: ''
	// 					} </p>
	// 					<div class="project-imgs">
	// 						${
	// 							posters[index].imgAdditional
	// 								? projectsImgs(
	// 										posters[index].imgAdditional
	// 								  )
	// 								: ''
	// 						}
	// 					</div>
	// 					<div class="project-imgs">
	// 						${
	// 							posters[index].imgAdditionalTwo
	// 								? projectsImgs(
	// 										posters[index].imgAdditionalTwo
	// 								  )
	// 								: ''
	// 						}
	// 					</div>

	// 				</aside>
	// 			</div>
	// 		</li> `;
	if (projectsContent) {
		projectsContent.insertAdjacentHTML(
			'beforeend',
			newItem
		);
	}
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
// checkScreenSize();
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

if (bottmomClose) {
	bottmomClose.addEventListener('click', () => {
		document.querySelector('.about-text').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	});
}

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

// project pages html
posters.forEach((poster, posterIndex) => {
	let imgThumbnailMarkup = ``;
	if (poster.subImgs.length > 1) {
		poster.subImgs.forEach((img, index) => {
			imgThumbnailMarkup += `<img class="project-pg-img-thumbnail ${
				index === 0 ? `active-thumbnail` : ''
			}" src="${img}" alt="Project image"></img>`;
		});
		console.log('sub', imgThumbnailMarkup);
	}
	let relatedPosters = ``;
	if (posters.length > 1) {
		console.log('posterIndex', posterIndex);
		for (let index = 1; index < 6; index++) {
			let relatedIndex = 0;
			if (posterIndex + index < posters.length) {
				relatedIndex = posterIndex + index;
				console.log('less than', relatedIndex);
			}
			if (posterIndex + index >= posters.length) {
				relatedIndex = posterIndex + index - posters.length;
				console.log('greater Than', relatedIndex);
			}

			relatedPosters += `
			 <a class="project-pg-related-link" href="${posters[relatedIndex].html}.html">
        <img class="project-pg-related-img shadow" src="${posters[relatedIndex].src}" alt="Project image">
        <h3 class="subtitle project-pg-related-title">${posters[relatedIndex].title}</h3>
      </a>
			`;
		}
	}
	if (document.querySelector(`.insert-${poster.html}`)) {
		let markup = `<section class="project-pg-info">
      <div>
        <img class="project-pg-poster shadow" src="${
					poster.src
				}" alt="Project hero image">
      </div>
      <aside class="project-pg-text">
        <h1 class="subheading">${poster.title}</h1>
        <p class="project-pg-paragraph">${poster.text}</p>
        <div class="project-pg-box-container">
          <h2 class="box-title">Additional Information</h2>
          <table class="project-pg-box">
            <tr class="box-item">
              <td>
                <h3 class="box-subtitle">Format</h3>
              </td>
              <td>
                <p class="box-text">${poster.format}</p>
              </td>
            </tr>
            <tr class="box-item">
              <td>
                <h3 class="box-subtitle">Genre</h3>
              </td>
              <td>
                <p class="box-text">${poster.genre}</p>
              </td>
            </tr>
            <tr class="box-item">
              <td>
                <h3 class="box-subtitle">Audience</h3>
              </td>
              <td>
                <p class="box-text">${poster.audience}</p>
              </td>
            </tr>
          </table>
        </div>
      </aside>
    </section>
		${
			poster.subImgs.length > 0
				? `
			
			<section class="project-pg-imgs-container">
      <div class="project-pg-imgs">
			<img class="project-pg-img shadow " src="${
				poster.subImgs[0]
			}" alt="Project image">
      </div>
			${
				poster.subImgs.length > 1
					? `

				<div class="project-pg-img-thumbnails">
			${imgThumbnailMarkup} 
			>
      </div>
			`
					: ``
			}
			</section>
			`
				: ``
		}
    <section class="project-pg-related">
			${relatedPosters}
     
      
    </section>`;
		document
			.querySelector(`.insert-${poster.html}`)
			.insertAdjacentHTML('beforeend', markup);
	}
});
