export default class Question {
  constructor(data) {
    this.category = data.category.title
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
  }

  get Template() {
    return `
    <li>${this.category}</li>;
    <li>${this.question}</li>;
    <li>${this.value}</li>;
    `;
  }
}


