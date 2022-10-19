const input = document.getElementById('passwordInput');
const story = document.getElementById('storyText');
const music = document.getElementById('musicText');

/**
 * Password hints
 * 1. How much money did I attempt to give you in Hawaii - 2
 * 2. My total at RCF lift off - 465 + 425 + 265 - 5
 * 3. Wei Wuxian's name in chinese characters - 魏
 * 4. What program did I use to create WangXian - E
 * 5. The last character name that is mentioned in TSFOF - L
 * 6. I am the aster to your _ - R
 * 7. Given on the special day
 */
const password = '25魏ELR🚗';
const WangXian = 'https://www.youtube.com/watch?v=8jQ_f5p3p9o&ab_channel=MyPianoAcademia';
const storyPage = 'story.html';
const covers = 'main-view.html';

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const entered = input.value.toUpperCase();
		if (entered === password || entered === 'SIDLINDEV') {
			window.location.href = covers;
		}
		else if (password.includes(entered)) {
			alert(`${entered.length} of ${password.length} characters correct!`);
		}
		else {
			alert('Wrong passcode, nice try!')
		}
	}
});

story.addEventListener('click', () => {
	window.location.href = storyPage;
});

music.addEventListener('click', () => {
	window.location.href = WangXian;
});
