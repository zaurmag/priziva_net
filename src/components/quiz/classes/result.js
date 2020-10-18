export default class Result {
	constructor(text, value) {
		this.text = text;
		this.value = value;
	}

	// Этот метод проверяет, достаточно ли очков набрал пользователь
	check(value) {
		if (this.value <= value) {
			return true;
		}

        return false;
	}
}
