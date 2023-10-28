const el = document.getElementById('list');

const doesChapterExist = async (chapterNumber) => {
	const fileName = `${chapterNumber}.txt`;
	const response = await fetch(`https://raw.githubusercontent.com/sydneylin12/SecretProject/main/chapters/${fileName}`);
	const res = await response.status;
	return res === 200;
};

const createTableOfContents = async () => {
	let chapterNumber = 1;
	let lastChapterFound = false;
	while (!lastChapterFound) {
		const exists = await doesChapterExist(chapterNumber);
		if (!exists) {
			lastChapterFound = true;
		} else {
			const child = document.createElement('li');
			child.innerHTML = `Chapter ${chapterNumber}`
			el.appendChild(child);
			chapterNumber += 1;
		}
	}
}

createTableOfContents();

// Redirect to the template with chapter number as a query param
el.addEventListener('click', (e) => {
	const text = e.target.innerHTML;
	// Double digit numbers have a title of 'Chapter XX' which is <= 10 characters
	if (text.includes('Chapter') && text.length <= 10) {
		const chapterNumber = parseInt(text.split(' ').pop());
		window.location.href = `chapter.html?chapter=${chapterNumber}`;
	}
});
