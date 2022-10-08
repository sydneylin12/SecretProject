const input = document.getElementById('passwordInput');
const text = document.getElementById('clickMe');
const password = window.atob('Mk4xNkE3NDgyQzU/VFU=');
const secretURL = window.atob('aHR0cHM6Ly95b3V0dS5iZS9rTUExWEY5NjVFVQ==');
const rickRoll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const path = 'https://sydneylin12.github.io/SecretProject/';
const storyPage = 'story.html';
let count = 0;

const isLocalBuild = () => {
	return window.location.href.includes('file');
};

const isCorrectDate = () => {
	const day = new Date();
	return day.getDate() === 17 && day.getMonth() === 9;
};

const getStoryUrl = () => {
	const urlPrefix = isLocalBuild() ? '' : path;
	return urlPrefix + storyPage;
};

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const entered = input.value.toUpperCase();
		if (entered === password) {
			window.location.href = isCorrectDate() ? getStoryUrl() : rickRoll;
		}
		// Use double equals here since it's a number to string comparison
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
			window.location.href = secretURL;
		}
	}
});