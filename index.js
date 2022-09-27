const input = document.getElementById('passwordInput');
input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const entered = input.value;
		const password = window.atob('MDQvMTcvMjAyMg==')
		if (entered === password) {
			window.location.href = 'https://www.youtube.com/channel/UC7uNb1YfzrnHBixDq-TFgyw';
		}
	}
});