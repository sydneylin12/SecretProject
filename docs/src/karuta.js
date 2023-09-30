const title = document.getElementById('title');
const card = document.getElementById('card');
const img = document.getElementById('card-image');
const container = document.getElementById('poem-container');
const children = container.children;

let data = [];
let index = 0;

const getPoemData = async () => {
	const fileName = 'poems.json';
	const response = await fetch(`https://raw.githubusercontent.com/sydneylin12/SecretProject/main/docs/src/${fileName}`);
	const res = await response.json();
	data = res;
	return data;
};

// Assumes card data is loaded
const setCardData = () => {
	const poem = data[index];
	title.innerHTML = poem.title;
	for (var i = 0; i < poem.lines.length; i++) {
		children[i].innerHTML = poem.lines[i];
	}
	img.src = poem.image;
}

const handleKeyDown = async (event) => {
	if (data.length === 0) {
		console.log('Data not loaded!');
		return;
	}

	let toSwipe;
	if (event.key === 'ArrowLeft') {
		index -= 1;
		index = Math.max(index, 0);
		toSwipe = 'right';
	} else if (event.key === 'ArrowRight') {
		index += 1;
		index = Math.min(index, data.length - 1);
		toSwipe = 'left';
	}

	card.classList.remove('swipe-element-left');
	card.classList.remove('swipe-element-right');
	setTimeout(function () {
		card.classList.add(`swipe-element-${toSwipe}`);
	}, 10);

	// Update the data in the cards after animation is playing
	setTimeout(() => {
		setCardData();
	}, 500);
};

document.addEventListener('keydown', handleKeyDown);

// This must be done in a promise to load the first card after the network request
getPoemData().then((data) => {
	setCardData();
});
