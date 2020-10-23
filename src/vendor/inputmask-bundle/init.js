// import {form} from '../../components/form/form';

// console.log(sendForm);

jQuery(document).ready(($) => {
	const $phoneMask = $('.phone-mask--js');
	const $btnSubmit = $('.btn-submit--js');

	$phoneMask.inputmask({
		mask: '9 (999) 999-99-99',
		onincomplete: function () {
			$btnSubmit.removeClass('btn-primary btn-flare').addClass('btn-secondary');
			$($(this)[0]).removeClass('is-complete');
			$($(this)[0]).addClass('is-incomplete');
		},

		oncomplete: function () {
			$btnSubmit.removeClass('btn-secondary').addClass('btn-primary btn-flare');
			$($(this)[0]).addClass('is-complete');
			$($(this)[0]).removeClass('is-incomplete');
		},
		// showMaskOnHover: false
	});
});
