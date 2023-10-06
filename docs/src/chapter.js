const title = document.getElementById('title');
const header = document.getElementById('header');
const content = document.getElementById('content');

const params = new URLSearchParams(location.search);
let chapterNumber = parseInt(params.get('chapter'));

// Switch pages on arrow up and down
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		chapterNumber -= 1;
		chapterNumber = Math.max(chapterNumber, 1);
	} else if (event.key === "ArrowDown") {
		chapterNumber += 1;
		chapterNumber = Math.min(chapterNumber, 42); // Update this when adding new chapters
	}
	window.location.href = `chapter.html?chapter=${chapterNumber}`;
});

/**
 * Usage:
 * Go to gmail -> click on email -> show original -> copy to clipboard
 * Paste the content you copied into <chapterNum>.txt
 * 
 * This will parse out the unwanted email filler and preserve the email's HTML format
 * 
 * Some of the formatting is inconsistent(see 39 vs. 40)
 * and the affected emails have a "content=3D".
 * 
 * The workaround is to decode the email here:
 * https://www.webatic.com/quoted-printable-convertor
 */
const getAndLoadChapterData = async () => {
	const fileName = `${chapterNumber}.txt`;
	const response = await fetch(`https://raw.githubusercontent.com/sydneylin12/SecretProject/main/chapters/${fileName}`);
	const data = await response.text();

	title.innerHTML = `Chapter ${chapterNumber} | The Sky Full of Flowers`;
	header.innerHTML = `Chapter ${chapterNumber}`;

	// Filter out unwanted strings
	let str;
	str = data.match(/<html>([\s\S]*?)<\/html>/)[0];
	str = str.replace('Sent from my iPhone', '');
	content.innerHTML = str;
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