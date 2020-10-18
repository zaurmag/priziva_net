const checkbox = document.querySelectorAll('.spinner-block__icon--js');
const arrow = document.querySelectorAll('.spinner-block__arrow--js');
const hideText = document.querySelectorAll('.quiz__get-phone-hide--js');

export let animationPercent = (start, end, element) => {
	element.parentNode.classList.add('animate');
	let sickle = false;
	let timeout = Math.round(3700 / end);
	let intervalId = setInterval(() => {
		start++;

		if (start === end) {
			clearInterval(intervalId);
			sickle = true;
		}
		element.innerHTML = `${start}%`;
		if (sickle) {
			setTimeout(() => {
				element.style.display = 'none';
				// eslint-disable-next-line no-use-before-define
				showElements();
			}, 500);
		}
	}, timeout);
};

function showElements() {
	checkbox[0].style.display = 'block';
	arrow[0].style.display = 'block';
	hideText[0].style.opacity = 1;
}
