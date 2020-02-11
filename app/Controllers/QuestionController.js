import QuestionService from "../Services/QuestionService.js";
import store from "../store.js";
// import Question from "../Models/Question.js"

//Private
function _draw() {
  let question = store.State.question;
  console.log(question);
  document.getElementById("category").innerHTML = question.categoryTemplate;
  document.getElementById("question").innerHTML = question.questionTemplate;
  document.getElementById("value").innerHTML = question.valueTemplate;
  document.getElementById("answer").innerHTML = "";
}


//Public
export default class QuestionController {
  constructor() {
    store.subscribe("question", _draw);
  }
  getApiQuestions() {
    QuestionService.getApiQuestion();
  }
  drawAnswer() {
    let answer = store.State.question;
    console.log(answer)
    document.getElementById("answer").innerHTML = answer.answerTemplate;
  }
}
