/* Ajax SimpleSubmit Form Plugin
   ========================================================================= */
(function ($) {
	$.fn.simpleSendForm = function (options, callback) {
		// Options
		options = $.extend({
			successTitle: 'Спасибо, что выбрали нас!',
			successText: 'Мы свяжемся с Вами в ближайшее время.',
			errorTitle: 'Сообщение не отправлено!',
			errorSubmit: 'Ошибка отправки формы!',
			errorNocaptcha: 'Вы не заполнили каптчу',
			errorCaptcha: 'Вы не прошли проверку каптчи',
			mailUrl: '../form-submit/submit.php',
			autoClose: false,
			autoCloseDelay: 5000,
			debug: false,
			captcha: false,
			captchaPublicKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
			errorMessPlace: false,
		}, options);

		if (options.captcha) {
			window.onload = function () {
				let addScriptCaptcha = document.createElement('script');
				addScriptCaptcha.src = 'https://www.google.com/recaptcha/api.js';
				document.body.appendChild(addScriptCaptcha);
			};
		}

		// Submit function
		let make = function () {
			let $this = $(this);
			let btn = $this.find('.btn-submit');
			let captcha = $this.find('.recaptcha');

			if (options.captcha) {
				captcha.append(`<div class="g-recaptcha" data-sitekey="${options.captchaPublicKey}"></div>`);
			}

			$(this).submit(function (event) {
				let data = $(this).serialize();
				let btnClass = 'progress-bar-animated progress-bar-striped bg-primary text-white';

				if ($this[0].checkValidity() === false) {
					$this.addClass('was-validated');
					errorRes('Чтобы получить результат, введите телефон!');

					return false;
				}

				function errorRes(errorMessage) {
					btn.removeClass(btnClass);
					if (options.errorMessPlace) {
						$(options.errorMessPlace).append(`<div class="form__error alert alert-danger text-center mt-3 mb-0">${errorMessage}</div>`);
					} else {
						$this.append(`<div class="form__error alert alert-danger text-center mt-3 mb-0">${errorMessage}</div>`);
					}
					setTimeout(() => {
						$this.find('.form__error').remove();
					}, 4000);
				}

				$.ajax({
					url: options.mailUrl,
					type: 'POST',
					data,
					beforeSend() {
						btn.addClass(btnClass);
					},
					success(result) {
						if (result === 1) {
							$this[0].reset();
							if (options.captcha) {
								grecaptcha.reset();
							}
							$this.removeClass('was-validated');
							callback();
							// $this.find('.form__group').removeClass('is-focused');
							// $this.find('.form__hide-success').slideUp().delay(5000).slideDown();
							btn.removeClass(btnClass);
							// $this.find('.form__hide-success').after('<div class="form__sys-message alert alert-success text-center mb-0"></div>');
							// $this.find('.form__sys-message').html(`<h4 class="form__success-title alert-heading mb-2">${options.successTitle}</h4><p class = "form__success-text" >${options.successText}</p>`);
							setTimeout(() => {
								// $this.find('.form__sys-message').fadeOut().delay(3000).remove();
								if (options.autoClose) {
									$.magnificPopup.close();
								}
							}, options.autoCloseDelay);
						} else if (result === 2) {
							errorRes(options.errorNocaptcha);
						} else if (result === 3) {
							errorRes(options.errorCaptcha);
						} else {
							errorRes(options.errorSubmit);
						}
						if (options.debug) {
							console.log(result);
						}
					},
					error(result) {
						errorRes(options.errorSubmit);
						if (options.debug) {
							console.log(result);
						}
					},
				});

				return false;
			});
		};

		return this.each(make);
	};
})(jQuery);
