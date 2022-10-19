const el = document.getElementById('list');

el.addEventListener('click', (e) => {
	const text = e.target.innerHTML;
	if (text.includes('Chapter') && text.length <= 10) {
		const chapterNumber = parseInt(text.split(' ').pop());
		console.log(chapterNumber);
		window.location.href = `chapters/${chapterNumber}.html`;
	}
});
