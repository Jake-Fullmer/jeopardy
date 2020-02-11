import QuestionService from "../Services/QuestionService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  console.log(questions);
  let template = "";
  questions.forEach(c => {
    template += c.Template;
  });
  document.getElementById("questions").innerHTML = template;
}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("questions", _draw);
  }
  getApiQuestions() {
    QuestionService.getApiQuestion();
  }
}
