export default class Result {
	constructor(dataId, index, title, img, text, footer, value) {
		this.dataId = dataId;
		this.index = index;
		this.title = title;
		this.img = img;
		this.text = text;
		this.footer = footer;
		this.value = value;
	}

	// Этот метод проверяет на какой вопрос мы кликнули - положительный или отрицательный
	check() {
		return this.value > 0;
	}
}
