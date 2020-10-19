jQuery(document).ready(($) => {
	$('#quizForm').simpleSendForm({
		successTitle: '',
		successText: '',
		errorMessPlace: '.quiz__get-phone-field--js',
		// mailUrl: './form-submit/submit.php',
	}, () => {
		console.log(' Форма отправлена ');
	});
});
