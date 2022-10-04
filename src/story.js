const text = document.getElementById('story');
let index = 0;

const storyText = [
'Once upon a time, in a vast sea, there lived a Big Squid and a Little Shark.',
'The Big Squid was looking for a sea creature to attach to, but he was unable to attach to the other sea creatures.',
'The Little Shark was just looking for another sea creature to accompany her and explore the ocean depths.',
'Both the Big Squid and the Little Shark liked to eat the same type of fish, and they came across each other while hunting on the same day.',
'After hunting together for six days, the Big Squid and the Little Shark grew fond of each other.',
'The Big Squid stated "I don\'t want to hunt with anyone else," and after that, he became partners with the Little Shark.',
'All was well, and the Big Squid and the Little Shark hunted successfully for a while.',
'The Little Shark had been working hard to improve her hunting skills, and eventually was able to hunt on her own.',
'The Big Squid became worried when the Little Shark would join her family in a different region of the ocean.',
'This meant that the two of the would not be able to hunt as frequently.',
'Disturbed, the Big Squid attached its arms onto the Little Shark as hard as he could.',
'Startled, the Little Shark tried to swim away at full speed, bearing her teeth.',
'The Big Squid noticed how he had hurt the Little Shark by grabbing too hard.',
'He started to release his grip, but still held on.',
'The Little Shark slowed down so the Big Squid wouldn\'t have to struggle to hold on anymore.',
'The Big Squid was eventually able to let go, and the Little Shark began leaving to join her shark family.',
'As the Little Shark waved the Big Squid goodbye, he noticed that her shark teeth had formed a smile the whole time.',
'The Big Squid smiled back, knowing that the Little Shark would come back to hunt with him.',
'Over time, the Big Squid and the Little Shark grew more comfortable with each other, and they resumed their hunts every week.',
'The Big Squid and the Little Shark learned to hunt as a team, and they began catching more and more fish each time!',
'Even though they lived in different parts of the ocean, the Big Squid and the Little Shark had been closer and happier than ever before.'
];

story.innerHTML = storyText[index];

story.addEventListener('click', (e) => {
	index = index + 1;
	if (index < storyText.length) {
		story.innerHTML = storyText[index];
	}
});