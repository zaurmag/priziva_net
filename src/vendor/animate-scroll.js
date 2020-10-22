export let animateScroll = (obj, duration) => {
	$('html, body').animate({
		scrollTop: `${obj.offset().top}px`,
	}, {
		duration: duration,
	});
};
