const thumbnail = document.querySelectorAll(
	'.project-pg-img-thumbnail'
);

thumbnail.forEach((item) => {
	item.addEventListener('click', (e) => {
		console.log(e.target);
		const src = e.target.getAttribute('src');
		const img = document.querySelector('.project-pg-img');
		img.setAttribute('src', src);
		thumbnail.forEach((item) => {
			item.classList.remove('active-thumbnail');
		});
		e.target.classList.add('active-thumbnail');
	});
});
