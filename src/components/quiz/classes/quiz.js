import {animationPercent} from '../../spinner-block/spinner-block';
import {animateScroll} from '../../../vendor/animate-scroll';
import {quiz} from '../quiz';
const main = document.getElementById('main');

export default class Quiz {
	constructor(questions, results, elements) {
		// Массив с вопросами
		this.questions = questions;

		// Массив с возможными результатами
		this.results = results;

		// Количество набранных очков
		this.score = 0;

		// Номер результата из массива
		this.result = 0;

		// Номер текущего вопроса
		this.current = 0;

		// Элементы - объект с данными
		this.elements = elements;
	}

	change(event) {
		if (this.current < this.questions.length) {
			this.showBlock();
			this.progress();
			if (event) {
				const {index} = event.target.dataset;

				// Добавляем очки
				let value = this.questions[this.current - 1].answers[index - 1].change();
				this.score += value;

				this.elements.score.forEach((element) => {
					element.innerText = this.score;
				});
			}

			// Плавно скроллим до верхнего блока контейнера
			animateScroll($(main), 700);
		} else {
			this.hideBlock();
			this.progress(true);
		}

		const prevBtn = document.querySelector('.btn-prev--js');
		if (this.current >= 1) {
			prevBtn.style.display = 'inline';
			prevBtn.parentNode.nextElementSibling.classList.remove('col-12');
			prevBtn.parentNode.nextElementSibling.classList.add('col-6');
		} else {
			prevBtn.style.display = 'none';
			prevBtn.parentNode.nextElementSibling.classList.add('col-12');
			prevBtn.parentNode.nextElementSibling.classList.remove('col-6');
		}
	}

	checkBtn(event, questID) {
		if (event) {
			const nextQuest = document.getElementById(questID).nextElementSibling;
			const checks = nextQuest.querySelectorAll('input[type="radio"]:checked');
			const nextBtn = this.elements.nextBtn;

			console.log(checks.length);
			addClassBtn(nextBtn);

			if (checks.length) {
				addClassBtn(nextBtn);
			} else {
				nextBtn.classList.remove('is-active');
				nextBtn.classList.remove('btn-flare');
				nextBtn.classList.add('btn-secondary');
			}
		}

		function addClassBtn(btn) {
			btn.classList.add('is-active');
			btn.classList.add('btn-flare');
		}
	}

	// Переход к следующему вопросу
	next(event, questID) {
		this.current++;

		if (this.current >= this.questions.length) {
			this.end();
		}

		this.change(event);
		// this.checkBtn(event, questID);
		const nextBtn = this.elements.nextBtn;

		nextBtn.classList.add('is-active');
		nextBtn.classList.add('btn-flare');
	}

	// Переход к предыдущему вопросу
	prev() {
		this.current--;
		this.change();
	}

	// Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	end() {
		const getPhone = document.querySelector('.quiz__get-phone--js');
		const btns = document.querySelector('.quiz__btns--js');
		// Показываем блок захвата телефона
		getPhone.style.display = 'block';
		// Анимируем проценты
		animationPercent(0, 100, this.elements.percentCounter, () => {
			// Показываем блок результата, но пока скрытым
			this.elements.whiteWrap.parentNode.classList.remove('d-none');
			this.elements.whiteWrap.classList.add('white-wrap--inactive');
			// animateScroll($(document.getElementById('result')), 700);
		});
		// Скрываем кнопки навигации
		btns.style.display = 'none';
	}

	hideBlock() {
		// Скрыть все блоки вопросов
		for (let i = 0; i < this.elements.questBlock.length; i++) {
			this.elements.questBlock[i].classList.remove('is-active');
		}
	}

	showBlock() {
		let currBlock = document.getElementById(`quizQuestBlock-${this.current + 1}`);

		this.hideBlock();

		// Если не последний, то активируем следущий
		if (this.current <= this.questions.length) {
			currBlock.classList.add('is-active');
		} else {
			currBlock.classList.remove('is-active');
		}
	}

	progress(allActive = false) {
		this.elements.progress.innerHTML = '';

		for (let i = 1; i <= this.questions.length; i++) {
			let step = document.createElement('div');
			step.className = 'progress__step';

			if (i === this.current + 1) {
				step.classList.add('is-active');
				step.innerHTML = `<span>Вопрос ${i} из ${this.questions.length}</span>`;
			}

			if (allActive) {
				step.classList.add('is-active');

				if (i === this.questions.length) {
					step.innerHTML = `<span>Вопрос ${i} из ${this.questions.length}</span>`;
				}
			}

			this.elements.progress.appendChild(step);
		}
	}
}
