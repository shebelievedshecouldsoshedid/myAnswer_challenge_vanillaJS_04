import './styles.css';

// What
const body = document.body;

// How
const BIG_SCREEN = 'bigScreen';
const MEDIUM_SCREEN = 'mediumScreen';
const SMALL_SCREEN = 'smallScreen';

// When
function handleResize() {
	const width = window.innerWidth;
	if ((width) => 1000) {
		body.classList.add(BIG_SCREEN);
		body.classList.remove(MEDIUM_SCREEN);
	} else if (width <= 700 && width < 1000) {
		body.classList.add(MEDIUM_SCREEN);
		body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
	} else {
		body.classList.add(SMALL_SCREEN);
		body.classList.remove(MEDIUM_SCREEN);
	}
}

body.addEventListener('resize', handleResize);
