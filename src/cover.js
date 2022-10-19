const b1 = document.getElementById('book1');
const b2 = document.getElementById('book2');
const b3 = document.getElementById('book3');

const isLocalBuild = () => {
	return window.location.href.includes('file');
};

const getUrl = (filename) => {
	const urlPrefix = isLocalBuild() ? '' : path;
	return urlPrefix + filename;
};

[b1, b2, b3].forEach((element) => {
	element.addEventListener('click', () => {
		window.location.href = getUrl('table-of-contents.html');
	});
});
