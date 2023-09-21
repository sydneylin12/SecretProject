const el = document.getElementById('list');

const CHAPTER_COUNT = 41;
for (let i = 0; i < CHAPTER_COUNT; i++) {
	const child = document.createElement('li');
	child.innerHTML = `Chapter ${i+1}`
	el.appendChild(child);
}

el.addEventListener('click', (e) => {
	const text = e.target.innerHTML;
	if (text.includes('Chapter') && text.length <= 10) {
		const chapterNumber = parseInt(text.split(' ').pop());
		window.location.href = `template.html?chapter=${chapterNumber}`;
	}
});
