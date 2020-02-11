import store from "../store.js";
import Question from "../Models/Question.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api/",
  timeout: 15000
});

class QuestionService {
  getApiQuestion() {
    _api
      .get("random")
      .then(response => {
        let question = new Question(response.data[0]);
        store.commit("question", question)
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const service = new QuestionService();
export default service;
