import store from "../store.js";
import Question from "../Models/question.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "https://jservice.io/api/",
  timeout: 15000
});

class QuestionService {
  getApiQuestion() {
    _api
      .get("random")
      .then(response => {
        let questions = response.data.results.map(
          rawData => new Question(rawData)
        );
        store.commit("questions", questions)
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const service = new QuestionService();
export default service;
