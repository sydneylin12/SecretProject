const el = document.getElementById('list');

const CHAPTER_COUNT = 43;
for (let i = 0; i < CHAPTER_COUNT; i++) {
	const child = document.createElement('li');
	child.innerHTML = `Chapter ${i+1}`
	el.appendChild(child);
}

// Redirect to the template with chapter number as a query param
el.addEventListener('click', (e) => {
	const text = e.target.innerHTML;
	if (text.includes('Chapter') && text.length <= 10) {
		const chapterNumber = parseInt(text.split(' ').pop());
		window.location.href = `chapter.html?chapter=${chapterNumber}`;
	}
});
