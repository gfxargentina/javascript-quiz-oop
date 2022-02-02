export class UI {
  constructor() {}

  /**
   *
   * @param {string} text pregunta a mostrar
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string} choices las opciones de las preguntas
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerText = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score el puntaje total
   */

  showScores(score) {
    const quizEndHTML = `<h1>Resultado</h1>
                           <h2 id="score">Tu puntaje: ${score}</h2> 
      `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }
  /**
   *
   * @param {number} currentIndex el numero de pregunta actual
   * @param {number} total numero total de preguntas
   */

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}
