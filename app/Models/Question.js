export default class Question {
  constructor(data) {
    this.category = data.category.title
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
  }

  get categoryTemplate() {
    return `
    ${this.category}
    `;
  }
  get questionTemplate() {
    return `
    ${this.question}
    `;
  }
  get answerTemplate() {
    return `
    ${this.answer}
    `;
  }
  get valueTemplate() {
    return `
    ${this.value}
    `;
  }
}

