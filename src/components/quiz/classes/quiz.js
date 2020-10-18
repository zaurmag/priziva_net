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
		if (event) {
			// Добавляем очки
			let value = this.questions[this.current - 1].change();
			this.score += value;

			this.elements.score.forEach((element) => {
				element.innerText = this.score;
			});
		}

		if (this.current < this.questions.length) {
			this.showBlock();
			this.progress();
		} else {
			this.hideBlock();
			this.progress(true);
		}

		const prevBtn = document.querySelector('.btn-prev--js');
		if (this.current >= 1) {
			prevBtn.style.display = 'inline';
		} else {
			prevBtn.style.display = 'none';
		}
	}

	// Переход к следующему вопросу
	next(event) {
		this.current++;

		if (this.current >= this.questions.length) {
			this.end();
		}

		this.change(event);
		this.elements.nextBtn.classList.add('is-active');
		this.elements.nextBtn.classList.add('btn-flare');
	}

	// Переход к предыдущему вопросу
	prev() {
		this.current--;
		this.change();
	}

	// Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	end() {
		for (let i = 0; i < this.results.length; i++) {
			if (this.results[i].Check(this.score)) {
				this.result = i;
			}
		}
		const result = document.querySelector('.quiz__result--js');
		const btns = document.querySelector('.quiz__buttons');
		result.innerHTML = this.results[this.result].text;

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
			step.innerHTML = `Вопрос ${i} из ${this.questions.length}`;

			if (i === this.current + 1) {
				step.classList.add('is-active');
			}

			if (allActive) {
				step.classList.add('is-active');
			}

			this.elements.progress.appendChild(step);
		}
	}
}
