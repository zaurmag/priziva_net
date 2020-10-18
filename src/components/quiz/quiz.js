// Vars
const prevBtn = document.getElementsByClassName('btn-prev--js');
const nextBtn = document.getElementsByClassName('btn-next--js');
const chebx = document.getElementsByClassName('radio__input--js');

// Класс, который представляет сам тест
import Quiz from './classes/quiz';

// Класс, представляющий вопрос
import Question from './classes/question';

// Класс, представляющий ответ
import Answer from './classes/answer';

// Класс, представляющий результат
import Result from './classes/result';

// Массив с результатами
const results =
    [
    	new Result('Вам многому нужно научиться', 0),
    	new Result('Вы уже неплохо разбираетесь', 2),
    	new Result('Ваш уровень выше среднего', 4),
    	new Result('Вы в совершенстве знаете тему', 6),
    ];

// Массив с вопросами
const questions =
    [
    	// eslint-disable-next-line no-mixed-spaces-and-tabs
    	new Question('Сколько будет 2 * 2?', 10),
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	new Question('Сколько будет 2 + 2?', 40),
    	new Question('Сколько будет 4 + 4?', 100),
    ];

// Сам тест
const quiz = new Quiz(questions, results,
	{
		progress: document.getElementById('progress'),
		questBlock: document.querySelectorAll('.quiz__quest-block--js'),
		nextBtn: document.querySelector('.btn-next--js'),
		score: document.querySelectorAll('.score-counter--js'),
	});

const answers = new Answer();

// eslint-disable-next-line no-use-before-define
init();

function init() {
	quiz.progress();

	for (let i = 0; i < chebx.length; i++) {
		// Прикрепляем событие для каждой отдельной кнопки
		let bindNext = quiz.next.bind(quiz);
		chebx[i].addEventListener('change', (event) => {
			// eslint-disable-next-line no-use-before-define
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
		alertDanger.innerText = 'Вы должны выбрать один вариант ответа!';

		quizFooter.prepend(alertDanger);

		setTimeout(() => {
			alertDanger.remove();
		}, 2000);
	}
});
