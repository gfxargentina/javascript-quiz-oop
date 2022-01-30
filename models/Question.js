export class Question {
  /**
   *
   * @param {string} text El texto de la pregunta
   * @param {string[]} choices Las opciones
   * @param {string} answer La respuesta
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice El texto a adivinar
   * @returns {boolean} retorna verdadero si choice es el correcto
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}
