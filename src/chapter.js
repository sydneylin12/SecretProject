const title = document.getElementById('title');
const header = document.getElementById('header');
const content = document.getElementById('content');

const params = new URLSearchParams(location.search);
const chapterNumber = parseInt(params.get('chapter'));

const getAndLoadChapterData = async () => {
	const fileName = `${chapterNumber}.txt`;
	const response = await fetch(`https://raw.githubusercontent.com/sydneylin12/SecretProject/main/chapters/${fileName}`);
	const data = await response.text();

	title.innerHTML = `Chapter ${chapterNumber} | The Sky Full of Flowers`;
	header.innerHTML = `Chapter ${chapterNumber}`;
	content.innerHTML = data;
};

getAndLoadChapterData();