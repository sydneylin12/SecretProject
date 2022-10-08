const countDownDate = new Date("Oct 17, 2022").getTime();
const el = document.getElementById('countdown');

const computeDate = () => {
	const now = new Date().getTime();
	const distance = countDownDate - now;
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	el.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
};

const x = setInterval(function () {
	computeDate();
	if (distance < 0) {
		clearInterval(x);
		el.innerHTML = 'Done!';
	}
}, 1000);

computeDate();
