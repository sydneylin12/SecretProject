const title = document.getElementById('title');
const header = document.getElementById('header');
const content = document.getElementById('content');

const params = new URLSearchParams(location.search);
const chapterNumber = parseInt(params.get('chapter'));

/**
 * Usage:
 * Go to gmail -> click on email -> show original -> copy to clipboard
 * Paste the content you copied into <chapterNum>.txt
 * 
 * This will parse out the unwanted email filler and preserve the email's HTML format
 */
const getAndLoadChapterData = async () => {
	const fileName = `${chapterNumber}.txt`;
	const response = await fetch(`https://raw.githubusercontent.com/sydneylin12/SecretProject/main/chapters/${fileName}`);
	const data = await response.text();

	title.innerHTML = `Chapter ${chapterNumber} | The Sky Full of Flowers`;
	header.innerHTML = `Chapter ${chapterNumber}`;

	// Trim the string and only add html tags

	const trimmedString = data.match(/<html>([\s\S]*?)<\/html>/)[0];
	console.log(trimmedString);
	content.innerHTML = trimmedString;
};

getAndLoadChapterData();