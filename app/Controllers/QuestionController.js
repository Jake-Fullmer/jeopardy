import QuestionService from "../Services/QuestionService.js";
import store from "../store.js";
import Question from "../Models/Question.js"

//Private
function _draw() {
  let question = store.State.question;
  console.log(question);
  document.getElementById("questions").innerHTML = Question.Template;
}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("question", _draw);
  }
  getApiQuestions() {
    QuestionService.getApiQuestion();
  }
}
