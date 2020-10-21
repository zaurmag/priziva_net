// Vars
const prevBtn = document.getElementsByClassName('btn-prev--js');
const nextBtn = document.getElementsByClassName('btn-next--js');
const chebx = document.getElementsByClassName('radio__input--js');

// Класс, который представляет сам тест
import Quiz from './classes/quiz';

// Класс, представляющий вопрос
import Question from './classes/question';

// Класс, представляющий ответ
// import Answer from './classes/answer';

// Класс, представляющий результат
import Result from './classes/result';

// Массив с результатами
const results =
    [
    	{
    		id: 1,
    		answers: [
    			new Result(1, 1, 'Планирование и Декомпозиция целей', 'itog-testirovaniia', 'Ты нуждаешься в улучшении навыков планирования и декомпозиции. Это очень сильно ограничивает реализацию твоего потенциала. Если ты научишься правильно ставить цель и освоишь технику декомпозиции, то самая большая мечта начнет осуществляться. Я подготовил для тебя короткие мини-упражнения, которую ты можешь применить уже сегодня и получить практические навыки планирования и декомпозиции.', '', 0),
    			new Result(2, 2, 'Планирование и Декомпозиция целей', 'itog-testirovaniia', 'Ты нуждаешься в улучшении навыков планирования и декомпозиции. Это очень сильно ограничивает реализацию твоего потенциала. Если ты научишься правильно ставить цель и освоишь технику декомпозиции, то самая большая мечта начнет осуществляться. Я подготовил для тебя короткие мини-упражнения, которую ты можешь применить уже сегодня и получить практические навыки планирования и декомпозиции.', '', 0),
    			new Result(3, 3, 'Планирование и Декомпозиция целей', 'planirovanie-dekomp-tcelei', 'Ты выглядишь как человек, который умеет планировать и делает это часто и на автомате. Это очень важный навык, который помогает добиваться задуманного. Также ты умеешь эффективно разбивать большую цель на более мелкие подзадачи.', 'У тебя отличные шансы преуспеть!', 1),
	        ],
	    },
	    {
		    id: 2,
		    answers: [
			    new Result(4, 1, 'Планирование и Декомпозиция целей', 'itog-testirovaniia', 'Ты нуждаешься в улучшении навыков планирования и декомпозиции. Это очень сильно ограничивает реализацию твоего потенциала. Если ты научишься правильно ставить цель и освоишь технику декомпозиции, то самая большая мечта начнет осуществляться. Я подготовил для тебя короткие мини-упражнения, которую ты можешь применить уже сегодня и получить практические навыки планирования и декомпозиции.', '', 0),
			    new Result(5, 2, 'Планирование и Декомпозиция целей', 'itog-testirovaniia', 'Ты нуждаешься в улучшении навыков планирования и декомпозиции. Это очень сильно ограничивает реализацию твоего потенциала. Если ты научишься правильно ставить цель и освоишь технику декомпозиции, то самая большая мечта начнет осуществляться. Я подготовил для тебя короткие мини-упражнения, которую ты можешь применить уже сегодня и получить практические навыки планирования и декомпозиции.', '', 0),
			    new Result(6, 3, 'Планирование и Декомпозиция целей', 'planirovanie-dekomp-tcelei', 'Ты выглядишь как человек, который умеет планировать и делает это часто и на автомате. Это очень важный навык, который помогает добиваться задуманного. Также ты умеешь эффективно разбивать большую цель на более мелкие подзадачи.', 'У тебя отличные шансы преуспеть!', 1),
		    ],
	    },
	    {
		    id: 3,
		    answers: [
			    new Result(7, 1, 'Волшебный пендель', 'volshebnyi-pendel', 'Поздравляю! Ты принадлежишь к тем 2% очень целеустремленных людей, которые умеют управлять собой и могут мотивировать себя самостоятельно. И я по-хорошему тебе завидую, ведь таких людей очень мало. Буду рад познакомиться с тобой лично.', 'У тебя большие шансы достичь небывалых высот и даже стать президентом!', 1),
			    new Result(8, 2, 'Волшебный пендель', 'volshebnyi-pendel', 'Похоже, тебе необходим волшебный пендель. Я могу сказать, что ты не одинок: в нем нуждаются 98% населения, включая успешных людей. Радуйся, у меня есть для тебя очень простое и эффективное супер-решение.', '', 0),
			    new Result(9, 3, 'Волшебный пендель', 'volshebnyi-pendel', 'Похоже, тебе необходим волшебный пендель. Я могу сказать, что ты не одинок: в нем нуждаются 98% населения, включая успешных людей. Радуйся, у меня есть для тебя очень простое и эффективное супер-решение.', '', 0),
		    ],
	    },
	    {
		    id: 4,
		    answers: [
			    new Result(10, 1, 'Отсутствие новизны', 'otsutstvie-novizny', 'Отлично! По итогам теста я вижу, что ты считаешь свою жизнь эмоциональной, яркой и насыщенной. Разнообразие в жизни придает тебе дополнительную энергию для продвижения к своим целям. Я рад, что у тебя  в этом отношении все хорошо.', 'Твоя эффективность — 100%. Ты способен быстро достигать целей, добиваться успеха!', 1),
			    new Result(11, 2, 'Отсутствие новизны', 'otsutstvie-novizny', 'Ты считаешь свою жизнь однообразной, скучной и неинтересной. Ты бегаешь по замкнутому кругу, и ничего нового не происходит. Ты недополучаешь энергию, поэтому не можешь быстро продвигаться к своим целям, создавать жизнь своей мечты.', '', 0),
			    new Result(12, 3, 'Отсутствие новизны', 'otsutstvie-novizny', 'Ты считаешь свою жизнь однообразной, скучной и неинтересной. Ты бегаешь по замкнутому кругу, и ничего нового не происходит. Ты недополучаешь энергию, поэтому не можешь быстро продвигаться к своим целям, создавать жизнь своей мечты.', '', 0),
		    ],
	    },
	    {
		    id: 5,
		    answers: [
			    new Result(13, 1, 'Навыки социального взаимодействия', 'navyki-sotcialnogo-vzaimodeistviia', 'С этим пунктом беда у абсолютного большинства людей, родившихся после 1995 года. Почему так происходит и что с этим делать, я рассказываю в этом коротком видео.', 'подвал ответа - 1', 0),
			    new Result(14, 2, 'Навыки социального взаимодействия', 'navyki-sotcialnogo-vzaimodeistviia', 'С этим пунктом беда у абсолютного большинства людей, родившихся после 1995 года. Почему так происходит и что с этим делать, я рассказываю в этом коротком видео.', 'подвал ответа - 1', 0),
			    new Result(15, 3, 'Навыки социального взаимодействия', 'navyki-sotcialnogo-vzaimodeistviia', 'Превосходно! Ты легко находишь общий язык с людьми. У тебя широкий круг общения, есть с кем посоветоваться и от кого получить поддержку.', 'Ты счастливый человек!', 1),
		    ],
	    },
	    {
		    id: 6,
		    answers: [
			    new Result(16, 1, 'Энергия и спорт', 'energiia-i-sport', 'Молодец! Я рад, что у тебя все здорово. Судя по ответам, ты спортивный, энергичный человек. Большинство успешных людей занимаются спортом. И это не просто так. Спорт действительно дает ту базовую жизненную энергетику, которая позволяет людям добиваться больших результатов.', 'У тебя сформированы базовые навыки для достижения успеха!', 1),
			    new Result(17, 2, 'Энергия и спорт', 'energiia-i-sport', 'Все мы знаем, что спорт крайне важен. Почти все успешные люди занимаются каким-либо видом спорта. И это не просто так. Спорт действительно качает базовую энергию и энергетику, которая нужна, чтобы менять свою жизнь и мир вокруг себя.', '', 0),
			    new Result(18, 3, 'Энергия и спорт', 'energiia-i-sport', 'Все мы знаем, что спорт крайне важен. Почти все успешные люди занимаются каким-либо видом спорта. И это не просто так. Спорт действительно качает базовую энергию и энергетику, которая нужна, чтобы менять свою жизнь и мир вокруг себя.', '', 0),
		    ],
	    },
    ];

// Массив с вопросами
const questions =
    [
    	{
    		id: 1,
    		answers: [
    			new Question('нет, это не про меня', 10),
    			new Question('иногда я так делаю', 20),
    			new Question('да, это про меня', 40),
    		],
    	},
    	{
    		id: 2,
    		answers: [
    			new Question('нет, это не про меня', 10),
    			new Question('иногда я так делаю', 20),
    			new Question('да, это про меня', 40),
    		],
    	},
    	{
    		id: 3,
    		answers: [
    			new Question('нет, это не про меня', 40),
    			new Question('иногда я так делаю', 20),
    			new Question('да, это про меня', 10),
    		],
    	},
	    {
		    id: 4,
		    answers: [
			    new Question('нет, это не про меня', 40),
			    new Question('иногда бывает такое', 20),
			    new Question('да, это про меня', 10),
		    ],
	    },
	    {
		    id: 5,
		    answers: [
			    new Question('нет, это не про меня', 10),
			    new Question('иногда бывает такое', 20),
			    new Question('да, это про меня', 40),
		    ],
	    },
	    {
		    id: 6,
		    answers: [
			    new Question('нет, это не про меня', 40),
			    new Question('иногда бывает такое', 20),
			    new Question('да, это про меня', 10),
		    ],
	    },
    ];

// Сам тест
export const quiz = new Quiz(questions, results,
	{
		progress: document.getElementById('progress'),
		questBlock: document.querySelectorAll('.quiz__quest-block--js'),
		nextBtn: document.querySelector('.btn-next--js'),
		score: document.querySelectorAll('.score-counter--js'),
		percentCounter: document.getElementById('spinnerBlockCounter'),
		whiteWrap: document.querySelector('.white-wrap--js'),
	});

// const answers = new Answer();

let toHTMLBad = (results) => {
	// console.log(id);
	return `
		<div id="resultBlock-${results.id}" class="result-block">
			<div class="result-block__title">${results.title}</div>
			<div class="row">
				<div class="col-lg-auto text-center">
					<img class="img-fluid" src="./images/result-block/${results.img}.jpg" alt="Итоги тестирования" />
				</div>
				<div class="col-lg textblock mt-20 mt-lg-0">
					<p class="mb-0 result-block__text">${results.text}</p>
				</div>
			</div>
			<h3 class="h6 text-cobalt position-relative mt-lg-40">
				Скорее смотри это видео и выполняй задания. <br class="d-none d-lg-inline" /> Не жди, начинай делать прямо сейчас.
				<img class="bad-result-arrow-down-1 d-none d-lg-inline" src="./images/result-block/bad/bad-result-arrow-down-1.png" alt="">
			</h3>
			<div class="row align-items-center">
				<div class="col-xl-auto text-center">
				<a class="video-block video-block__popup-stub popup-video--js" href="https://www.youtube.com/watch?v=jLvLZG0JEmk">
					<img class="img-fluid" src="./images/result-block/bad/video-stub.jpg" alt="Скорее смотри это видео и выполняй задания.">
				</a>
				</div>
				<div class="col-xl-1 textblock text-center mt-15 mt-xl-0">
					<p class="m-0">или</p>
				</div>
				<div class="col-xl text-center mt-15 mt-xl-0">
					<a class="font-weight-bold fz-14" href="#">
						<i class="icon pdf"></i>
						<span class="d-block mt-1">Скачать технику <br />в PDF-формате</span>
					</a>
				</div>
			</div>
			<div class="mt-15">
				<a class="d-flex align-items-center justify-content-center justify-content-xl-start fz-14" href="#" target="_blank">
					<i class="icon telegram"></i>
					<span class="ml-2">Вступить в группу->></span>
				</a>
			</div>
		</div>
	`;
};

let toHTMLGood = (results) => {
	return `
		<div id="resultBlock-${results.id}" class="result-block">
		    <div class="result-block__title">${results.title}</div>
		    <div class="row">
		        <div class="col-lg-auto text-center">
		            <img src="./images/result-block/${results.img}.jpg" alt="Планирование и Декомпозиция целей"/></div>
		        <div class="col-lg textblock mt-15 mt-lg-0">
		            <p class="mb-0 result-block__text">${results.text}</p>
		            <div class="result-block__footer mt-2">
		                <img class="img-fluid mb-10 mb-xl-0" src="./images/result-block/good/result-block-good-arrow.png" alt=""/>
		                <div class="d-flex justify-content-end align-items-center text-right">
		                    <p class="mb-0">${results.footer}</p>
		                    <div class="result-block__like ml-10">
		                        <i class="icon smile"></i>
		                        <i class="icon like"></i>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	`;
};

function render(id, index) {
	let newArr = [];
	const resultBlock = document.getElementById('resultContainerBlocks');

	function checkNode(obj, fEl) {
		return obj.indexOf(fEl);
	}

	function insertHTML(tohtml) {
		let html = newArr.map(tohtml).join('');
		resultBlock.insertAdjacentHTML('beforeend', html);
		const resultBlockText = resultBlock.getElementsByClassName('result-block__text');

		let issetNode = checkNode(newArr[0].text, resultBlockText[0].innerHTML);
		const resultBlockChildren = resultBlock.children[1];
		if (issetNode === 0 && resultBlockChildren) {
			resultBlockChildren.remove();
		}
	}

	for (let i = 0; i < results.length; i++) {
		if (`quizQuestBlock-${results[i].id}` === id) {
			for (let n = 0; n < results[i].answers.length; n++) {
				if (+index === results[i].answers[n].index) {
					newArr.push(results[i].answers[n]);
					const ifGood = results[i].answers[n].check();

					if (results[i].id === id) {
						console.log(' 343434343 ');
					}

					if (ifGood) {
						insertHTML(toHTMLGood);
					} else {
						insertHTML(toHTMLBad);

						setTimeout(() => {
							$('.popup-video--js').magnificPopup({
								type: 'iframe',
								mainClass: 'mfp-scale',
								removalDelay: 160,
								preloader: true,
								fixedContentPos: false,
							});
						}, 100);
					}
				}
			}
		}
	}
}

init();

function init() {
	quiz.progress();

	for (let i = 0; i < chebx.length; i++) {
		// Прикрепляем событие для каждой отдельной кнопки
		let bindNext = quiz.next.bind(quiz);
		chebx[i].addEventListener('change', (event) => {
			const questId = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
			const {index} = event.target.dataset;
			render(questId, index);

			setTimeout(() => {
				bindNext(event);
			}, 1000);
		});
	}
}

/**
 * Фиксируем клики по кнопкам навигации
 */
// Предыдущий вопрос
prevBtn[0].addEventListener('click', () => {
	quiz.prev();
});

// Следующий вопрос
nextBtn[0].addEventListener('click', () => {
	const currBlock = document.getElementById(`quizQuestBlock-${quiz.current + 1}`);
	const checks = currBlock.querySelectorAll('input[type="radio"]:checked');

	if (checks.length) {
		quiz.next();
	} else {
		const quizFooter = document.querySelector('.quiz__btns--js');
		const alertDanger = document.createElement('div');

		// console.log(alertDanger);
		alertDanger.classList.add('alert');
		alertDanger.classList.add('alert-danger');
		alertDanger.classList.add('mb-15');
		alertDanger.innerText = 'Пожалуйста, выберите вариант ответа!';

		quizFooter.prepend(alertDanger);

		setTimeout(() => {
			alertDanger.remove();
		}, 2000);
	}
});
