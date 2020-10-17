export default class Question {
	constructor(quest, score) {
		this.quest = quest;
		this.score = score;
	}

	change() {
		return this.score;
	}
}
