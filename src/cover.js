const b1 = document.getElementById('book1');
const b2 = document.getElementById('book2');
const b3 = document.getElementById('book3');

[b1, b2, b3].forEach((element) => {
	element.addEventListener('click', () => {
		window.location.href = 'table-of-contents.html';
	});
});
