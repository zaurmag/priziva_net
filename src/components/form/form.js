jQuery(document).ready(($) => {
	const $whiteWrap = $('.white-wrap--js');
	const $result = $('#result');

	$('#quizForm').simpleSendForm({
		successTitle: '',
		successText: '',
		errorMessPlace: '.quiz__get-phone-field--js',
		debug: true,
	}, () => {
		$whiteWrap.removeClass('white-wrap--inactive').addClass('white-wrap--active');

		$('html, body').animate({
			scrollTop: `${$result.offset().top}px`,
		}, {
			duration: 500,
		});
	});
});
