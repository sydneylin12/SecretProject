const text = document.getElementById('story');
const progress = document.getElementById('progress');
const storyText = [
	'The Big Squid and the Little Shark',
	'Once upon a time, in a vast sea, there lived a Big Squid and a Little Shark.',
	'The Big Squid was lonely, and he was looking for a partner to hunt with.',
	'The Little Shark was just looking for another sea creature to accompany her on a fun ocean adventure.',
	'Both the Big Squid and the Little Shark liked to eat the same type of fish, and they came across each other while hunting on the same day.',
	'After hunting together for six days, the Big Squid and the Little Shark grew fond of each other.',
	'The Big Squid said "I don\'t want to hunt with anyone else," and after that, he became partners with the Little Shark.',
	'All was well, the Big Squid and the Little Shark happily hunted together for the time being.',
	'The Little Shark had been working hard to improve her hunting skills, and eventually became a fully independent hunter.',
	'Wanting to be with her shark family and pursue new prey, the Little Shark decided to find different hunting grounds.',
	'The Big Squid became worried, as the Little Shark\'s family was in a distant region of the ocean.',
	'Although the Big Squid was happy for the Little Shark, it meant that the two of them would not be able to hunt as frequently.',
	'The Big Squid attached his arms onto the Little Shark as his concerns and worries grew.',
	'When the time came, the Little Shark began to swim to her destination at full speed, bearing her teeth.',
	'Startled, the Big Squid attached himself as much as he could, tightly grabbing the Little Shark.',
	'Even at full speed, the Little Shark began to sink, for she could not support the Big Squid\'s full weight.',
	'Realizing that he had hurt the Little Shark, he gathered his courage, and began to slowly release his grasp.',
	'The Little Shark slowed down so the Big Squid wouldn\'t have to struggle to hold on anymore.',
	'When the Little Shark reached her destination, the Big Squid let go, and the Little Shark joined her shark family.',
	'As the Little Shark and her family waved the Big Squid goodbye, he realized that her shark teeth had formed a smile the whole time.',
	'The Big Squid smiled back, certain that the Little Shark would come back to hunt with him.',
	'Over time, the Big Squid and the Little Shark grew more comfortable with each other, and they resumed their hunts every week.',
	'The Big Squid and the Little Shark learned to hunt as a team, and they began catching more and more fish each time!',
	'They even shared their favorite meals with each other, both discovering new tastes that they had never experienced before.',
	'Even though they lived far apart, the Big Squid and the Little Shark had been closer than ever before.',
	'The end!'
];

let index = 0;

const delay = (time) => {
	return new Promise(resolve => setTimeout(resolve, time));
};

const getProgressText = () => {
	return `${index + 1} of ${storyText.length}`;
};

const refreshText = () => {
	if (index >= 0 && index < storyText.length) {
		text.innerHTML = storyText[index];
		progress.innerHTML = getProgressText();

		// Use a delay here to have the text render on the page first
		if (index === storyText.length - 1) {
			delay(10).then(() => {
				alert('Thank you for reading my story! Please go back to the login page and use the Chrome DevTools to find the easter eggs!');
			});
		}
	}
};

// Run once on page load
refreshText();

document.addEventListener('click', (e) => {
	index = index + 1;
	refreshText();
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowRight') {
		index = index + 1;
		index = index >= storyText.length ? storyText.length - 1 : index;
		refreshText();
	}
	else if (e.key === 'ArrowLeft') {
		index = index - 1;
		index = index < 0 ? 0 : index;
		refreshText();
	}
});