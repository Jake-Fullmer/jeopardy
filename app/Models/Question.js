export default class Question {
  constructor(data) {
    this.category = data.category.title
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
  }

  get categoryTemplate() {
    return `
    <li>${this.category}</li>;
    `;
  }
  get questionTemplate() {
    return `
    <li>${this.question}</li>;
    `;
  }
  get answerTemplate() {
    return `
    <li>${this.answer}</li>;
    `;
  }
  get valueTemplate() {
    return `
    <li>${this.value}</li>;
    `;
  }
}

{/* <li>${this.question}</li>;
    <li>${this.value}</li>; */}
