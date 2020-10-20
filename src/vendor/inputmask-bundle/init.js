jQuery(document).ready(($) => {
	const $body = $('body');
	const $phoneMask = $('.phone-mask--js');
	const $btnSubmit = $('.btn-submit--js');

	$phoneMask.inputmask({
		mask: '9 (999) 999-99-99',
		// showMaskOnHover: false
	});

	$body.on('change', $phoneMask, () => {
		let phone = $(this);
		let	phoneVal = phone.val();

		// console.log($phoneMask.val());
		// if ((phoneVal.indexOf('_') !== -1) || phoneVal === '') {
		// 	$btnSubmit.removeClass('btn-secondary');
		// 	$btnSubmit.addClass('btn-primary btn-flare');
		// } else {
		// 	$btnSubmit.removeClass('btn-primary btn-flare');
		// 	$btnSubmit.addClass('btn-secondary');
		// }
	});

	// $phoneMask.on('change', () => {
	// 	if ($(this).inputmask({mask: '9 (999) 999-99-99'}, 'isComplete')) {
	// 		$btnSubmit.removeClass('btn-secondary');
	// 		$btnSubmit.addClass('btn-primary btn-flare');
	// 	} else {
	// 		$btnSubmit.removeClass('btn-primary btn-flare');
	// 		$btnSubmit.addClass('btn-secondary');
	// 	}
	// });
}); // end ready
