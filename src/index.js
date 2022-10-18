const input = document.getElementById('passwordInput');
const text = document.getElementById('clickMe');
const password = '2283';
const WangXian = 'https://www.youtube.com/watch?v=8jQ_f5p3p9o&ab_channel=MyPianoAcademia';
const path = 'https://sydneylin12.github.io/SecretProject/';
const storyPage = 'story.html';
let count = 0;

const isLocalBuild = () => {
	return window.location.href.includes('file');
};

const getStoryUrl = () => {
	const urlPrefix = isLocalBuild() ? '' : path;
	return urlPrefix + storyPage;
};

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const entered = input.value.toUpperCase();
		if (entered === password) {
			window.location.href = WangXian;
		}
		else if (password.includes(entered)) {
			alert(`${entered.length} of ${password.length} characters correct!`);
		}
		else {
			alert('Wrong passcode, nice try!')
		}
	}
});

text.addEventListener('click', (e) => {
	if (e.target === text) {
		count = count + 1;
		if (count >= 25) {
			window.location.href = getStoryUrl();
		}
	}
});