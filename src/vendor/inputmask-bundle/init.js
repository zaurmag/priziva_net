jQuery(document).ready(($) => {
	const $phoneMask = $('.phone-mask--js');
	const $btnSubmit = $('.btn-submit--js');

	$phoneMask.inputmask({
		mask: '9 (999) 999-99-99',
		// showMaskOnHover: false
	});

	$phoneMask.on('change', () => {
		if ($phoneMask.val().indexOf('_') !== -1 || $phoneMask.val() === '') {
			$btnSubmit.removeClass('btn-primary btn-flare');
			$btnSubmit.addClass('btn-secondary');
		} else {
			$btnSubmit.removeClass('btn-secondary');
			$btnSubmit.addClass('btn-primary btn-flare');
		}
	});
});
