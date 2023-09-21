const story = document.getElementById('storyText');
const music = document.getElementById('musicText');
const book = document.getElementById('bookText');

const WangXian = 'https://www.youtube.com/watch?v=8jQ_f5p3p9o&ab_channel=MyPianoAcademia';
const storyPage = 'story.html';
const covers = 'main-view.html';

book.addEventListener('click', () => {
	window.location.href = covers;
});

story.addEventListener('click', () => {
	window.location.href = storyPage;
});

music.addEventListener('click', () => {
	window.location.href = WangXian;
});