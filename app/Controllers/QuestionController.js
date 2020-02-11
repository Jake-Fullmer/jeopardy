import QuestionService from "../Services/QuestionService.js";
import store from "../store.js";
// import Question from "../Models/Question.js"

//Private
function _draw() {
  let question = store.State.question;
  console.log(question);
  document.getElementById("category").innerHTML = "category"
  document.getElementById("question").innerHTML = "question"
  document.getElementById("value").innerHTML = "value"
}

function _drawAnswer() {
  let answer = store.State.question;  // at an index?
  console.log(answer)
  document.getElementById("answer").innerHTML = "answer"
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
