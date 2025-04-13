const questions = [
    {
        question: "1. Se \( f(x) = 3x^2 - 2x + 1 \), qual é o valor do limite \( \\lim_{x \\to 1} f(x) \)?",
        answers: [
            { id: 1, text: "2", correct: true },
            { id: 2, text: "3", correct: false },
            { id: 3, text: "1", correct: false },
            { id: 4, text: "0", correct: false },
        ]
    },
    {
        question: "2. Se \( f(x) = \\frac{x^2 - 1}{x - 1} \), qual é o \( \\lim_{x \\to 1} f(x) \)?",
        answers: [
            { id: 1, text: "0", correct: false },
            { id: 2, text: "1", correct: false },
            { id: 3, text: "2", correct: true },
            { id: 4, text: "O limite não existe", correct: false },
        ]
    },
    {
        question: "3. Qual das alternativas representa uma função afim crescente?",
        answers: [
            { id: 1, text: "f(x) = -3x + 1", correct: false },
            { id: 2, text: "f(x) = 2x + 5", correct: true },
            { id: 3, text: "f(x) = -x^2 + 1", correct: false },
            { id: 4, text: "f(x) = 7", correct: false },
        ]
    },
    {
        question: "4. Qual é o conjunto imagem da função \( f(x) = x^2 - 4x + 5 \)?",
        answers: [
            { id: 1, text: "y ≤ 1", correct: false },
            { id: 2, text: "y ≥ 1", correct: true },
            { id: 3, text: "y ≥ 0", correct: false },
            { id: 4, text: "y ∈ ℝ", correct: false },
        ]
    },
    {
        question: "5. Qual é o domínio da função \( f(x) = \\frac{1}{x + 2} \)?",
        answers: [
            { id: 1, text: "x ≠ -2", correct: true },
            { id: 2, text: "x > -2", correct: false },
            { id: 3, text: "x < -2", correct: false },
            { id: 4, text: "Todos os reais", correct: false },
        ]
    },
    {
        question: `6. Se \\[f(x) = \\begin{cases}x + 2, & \\text{se } x < 1 \\\\x^2, & \\text{se } x \\geq 1\\end{cases}\\]
Qual é o \\( \\lim_{x \\to 1} f(x) \\)?`,
        answers: [
            { id: 1, text: "1", correct: false },
            { id: 2, text: "2", correct: false },
            { id: 3, text: "O limite não existe", correct: true },
            { id: 4, text: "3", correct: false },
        ]
    },
    {
        question: "7. Uma função é dita contínua em um ponto \( x = a \) quando:",
        answers: [
            { id: 1, text: "O limite lateral direito for diferente do esquerdo", correct: false },
            { id: 2, text: "O valor da função for diferente do limite", correct: false },
            { id: 3, text: "\\( \\lim_{x \\to a} f(x) = f(a) \\)", correct: true },
            { id: 4, text: "A função não estiver definida em a", correct: false },
        ]
    },
    {
        question: "8. Se \( \\lim_{x \to 2^-} f(x) = 5 \) e \( \\lim_{x \to 2^+} f(x) = 7 \), então:",
        answers: [
            { id: 1, text: "\\( \\lim_{x \\to 2} f(x) = 6 \\)", correct: false },
            { id: 2, text: "\\( \\lim_{x \\to 2} f(x) = 7 \\)", correct: false },
            { id: 3, text: "\\( \\lim_{x \\to 2} f(x) \\) não existe", correct: false },
            { id: 4, text: "f(2) = 6", correct: false },
        ]
    },
    {
        question: "9. Calcule: \\( \\lim_{x \\to \\infty} \\frac{4x^2 - 7x + 1}{x^2 + 3} \\)",
        answers: [
            { id: 1, text: "0", correct: false },
            { id: 2, text: "1", correct: false },
            { id: 3, text: "4", correct: true },
            { id: 4, text: "∞", correct: false },
        ]
    },
    {
        question: "10. O gráfico de uma função quadrática possui vértice em (3,−4) e coeficiente \( a > 0 \). Qual é seu conjunto imagem?",
        answers: [
            { id: 1, text: "y ≤ −4", correct: false },
            { id: 2, text: "y ≥ −4", correct: true },
            { id: 3, text: "y ∈ ℝ", correct: false },
            { id: 4, text: "y = −4", correct: false },
        ]
    }
]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function renderMath() {
    if (window.MathJax) {
        MathJax.typesetPromise().catch(err => console.log("Erro ao renderizar MathJax:", err));
    }
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    console.log(questionElement);

    renderMath()
}

startQuiz();


