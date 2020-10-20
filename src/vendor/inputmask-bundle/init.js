import {quiz} from '../../components/quiz/quiz';

jQuery(document).ready(($) => {
	const $phoneMask = $('.phone-mask--js');
	const $btnSubmit = $('.btn-submit--js');

	$phoneMask.inputmask({
		mask: '9 (999) 999-99-99',
		// showMaskOnHover: false
	});

	$phoneMask.on('keyup', () => {
		if ($phoneMask.val().indexOf('_') !== -1 || $phoneMask.val() === '') {
			$btnSubmit.removeClass('btn-primary btn-flare').addClass('btn-secondary');
		} else {
			$btnSubmit.removeClass('btn-secondary').addClass('btn-primary btn-flare');
			quiz.append();

			//console.log(quiz);
		}
	});
});
