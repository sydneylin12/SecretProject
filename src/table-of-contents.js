const el = document.getElementById('list');

// TODO - extract these to a common source
const isLocalBuild = () => {
	return window.location.href.includes('file');
};

const getUrl = (filename) => {
	const urlPrefix = isLocalBuild() ? '' : path;
	return urlPrefix + filename;
};

el.addEventListener('click', (e) => {
	const text = e.target.innerHTML;
	if (text.includes('Chapter') && text.length <= 10) {
		const chapterNumber = parseInt(text.split(' ').pop());
		console.log(chapterNumber);
		// TODO - redirect to the chapter
	}
});
