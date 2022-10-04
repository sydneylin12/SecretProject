const input = document.getElementById('passwordInput');
const text = document.getElementById('clickMe');
const password = window.atob('MDQvMTcvMjAyMg==')
const encodedResult = 'aHR0cHM6Ly95b3V0dS5iZS9rTUExWEY5NjVFVQ==';
const path = 'https://sydneylin12.github.io/SecretProject/';
const storyPage = 'story.html';
let count = 0;

const isLocalBuild = () => {
	return window.location.href.includes('file');
}

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const entered = input.value;
		if (entered === password) {
			console.log(encodedResult)
		} else {
			alert('Nice try!')
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