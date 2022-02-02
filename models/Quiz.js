export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} questions preguntas
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} la pregunta encontrada
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  /**
   *
   * @param {string} answer el texto de la pregunta
   */

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
