jQuery(document).ready(($) => {
	const $whiteWrap = $('.white-wrap--js');
	const $result = $('#result');

	$('#quizForm').simpleSendForm({
		successTitle: '',
		successText: '',
		errorMessPlace: '.quiz__get-phone-field--js',
		debug: false,
	}, () => {
		$whiteWrap.removeClass('white-wrap--inactive').parent().removeClass('is-inactive');

		$('html, body').animate({
			scrollTop: `${$result.offset().top}px`,
		}, {
			duration: 500,
		});
	});
});
