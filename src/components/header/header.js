import {animateScroll} from '../../vendor/animate-scroll';

let btn = $('.btn-flare--js');
let main = $('#main');

btn.click((e) => {
	e.preventDefault();
	animateScroll(main, 300);
});
