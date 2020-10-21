const $whiteWrap = $('.white-wrap--js');
const $result = $('#result');

export let sendForm = $('#quizForm')
	.simpleSendForm({
		successTitle: '',
		successText: '',
		errorMessPlace: '.quiz__get-phone-field--js',
		debug: false,
	}, () => {
		$whiteWrap.removeClass('white-wrap--inactive')
			.parent()
			.removeClass('is-inactive').addClass('mt-30');

		$('html, body')
			.animate({
				scrollTop: `${$result.offset().top}px`,
			}, {
				duration: 500,
			});
	});

