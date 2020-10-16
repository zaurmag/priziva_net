let btn = $('.btn-flare--js');
let main = $('#main');

btn.click(() => {
	$('html, body').animate({
		scrollTop: `${main.offset().top}px`,
	}, {
		duration: 300,
	});

	return false;
});
