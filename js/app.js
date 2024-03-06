const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {
	let scroll = this.scrollY / -20;
	imagenes.forEach((img) => {
		if (scroll < -80) {
			scroll += 80;
		}
		img.style.backgroundPositionY = `${scroll}px`;
	});
});
