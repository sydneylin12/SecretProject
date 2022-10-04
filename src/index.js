const input = document.getElementById('passwordInput');
const text = document.getElementById('clickMe');
const password = window.atob('MDQvMTcvMjAyMg==')
const encodedResult = 'aHR0cHM6Ly95b3V0dS5iZS9rTUExWEY5NjVFVQ==';
const storyPage = 'src/story.html';
let count = 0;

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
	console.log(count);
	if (e.target === text) {
		count += 1;
		if (count >= 50) {
			//window.location.href = window.atob(encodedResult);
			window.location.href = storyPage;
		}
	}
});