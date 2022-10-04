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
}

const isCorrectDate = () => {
	const day = new Date();
	return day.getDate() === 17 && day.getMonth() === 9;
}

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const entered = input.value;
		if (entered === password) {
			window.location.href = isCorrectDate() ? secretURL : rickRoll;
		} else {
			alert('Wrong passcode, nice try!')
		}
	}
});

text.addEventListener('click', (e) => {
	count = count + 1;
	if (e.target === text) {
		count += 1;
		if (count >= 50) {
			const urlPrefix = isLocalBuild() ? '' : path;
			window.location.href = urlPrefix + storyPage;
		}
	}
});