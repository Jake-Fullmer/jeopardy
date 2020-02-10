import ValuesController from "./Controllers/QuestionController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
