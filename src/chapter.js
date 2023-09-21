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
 * 
 * Some of the formatting is inconsistent(see 39 vs. 40)
 * and the affected emails have a "content=3D"
 */
const getAndLoadChapterData = async () => {
	const fileName = `${chapterNumber}.txt`;
	const response = await fetch(`https://raw.githubusercontent.com/sydneylin12/SecretProject/main/chapters/${fileName}`);
	const data = await response.text();

	title.innerHTML = `Chapter ${chapterNumber} | The Sky Full of Flowers`;
	header.innerHTML = `Chapter ${chapterNumber}`;

	let trimmed;
	if (data.includes('<html>')) {
		trimmed = data.match(/<html>([\s\S]*?)<\/html>/)[0];
		content.innerHTML = trimmed;
	} else {
		const child = document.createElement('p');
		child.className = 'chapter-paragraph';
		child.innerHTML = data;
		content.innerHTML = '';
		content.appendChild(child);
	}
};

const trimBetweenStrings = (str, startStr, endStr) => {
	var startIndex = str.indexOf(startStr);
	var endIndex = str.indexOf(endStr, startIndex);
	if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
		return "";
	}
	return "<p>" + str.substring(startIndex + startStr.length, endIndex) + "</p>";
}

getAndLoadChapterData();