const el = document.getElementById('cover');

const isLocalBuild = () => {
	return window.location.href.includes('file');
};

const getUrl = (filename) => {
	const urlPrefix = isLocalBuild() ? '' : path;
	return urlPrefix + filename;
};

el.addEventListener('click', () => {
	window.location.href = getUrl('table-of-contents.html');
})
