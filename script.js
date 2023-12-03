const questions = [
    {
        question: "ಕಂಪ್ಯೂಟರ್ ಬಳಕೆದಾರರ ಅರಿವಿಲ್ಲದೆ, ಅನಗತ್ಯ ಸಾಫ್ಟ್ವೇರ್ ಅನ್ನು ಸ್ಥಾಪಿಸುವುದು ಮತ್ತು ಇಂಟರ್ನೆಟ್ ಬಳಕೆಯ ಡೇಟಾ ಮತ್ತು ಇತರ ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿಯನ್ನು ಕದಿಯುವುದು, ಇದನ್ನು ______ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
        answers: [
            { text: "ರಾನ್ಸಮ್ವೇರ್", correct: false },
            { text: "ಸ್ಪೈವೇರ್", correct: false },
            { text: "ಟ್ರೋಜನ್", correct: false },
            { text: "ಕೀ ಲೊ ಗ್ಗರ್", correct: true }
        ]
    },
    {
        question: "ಮಿನಮಟ ಎಂಬ ರೋಗ, ಯಾವ ಲೋಹದಿಂದಾಗುತ್ತದೆ?",
        answers: [
            { text: "ಸೀಸ", correct: false },
            { text: "ನಿಕ್ಕಲ್", correct: false },
            { text: "ಪಾದರಸ", correct: false },
            { text: "ಫ್ಲೋರೀನ್", correct: true }
        ]
    },
    {
        question: "ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆಯು ಒಂದು ______.",
        answers: [
            { text: "ನೇರ ತೆರಿಗೆ", correct: false },
            { text: "ಪರೋಕ್ಷ ತೆರಿಗೆ", correct: false },
            { text: "ಆದಾಯ ತೆರಿಗೆಯ ಭಾಗ", correct: false },
            { text: "ಇವುಗಳಲ್ಲಿಯಾವುದೂ ಅಲ್ಲ", correct: true }
        ]
    },
    {
        question: "ಆರ್ಬಿಐ ಮೊನೆಟರಿ ಪಾಲಿಸಿಯ ಸಂಬಂಧದಲ್ಲಿ, ಸಿಆರ್ಆರ್ ಎಂಬ ಪದವು ______ ಅನ್ನು ಸೂಚಿಸುತ್ತದೆ:",
        answers: [
            { text: "ಕ್ಯಾಶ್ ರಿಸರ್ವ್ ರೇಶಿಯೊ", correct: false },
            { text: "ಕರೆನ್ಸಿ ರಿಸರ್ವ್ ರೇಶಿಯೊ", correct: false },
            { text: "ಕ್ಯಾಶ್ ರಿಸರ್ವ್ ರೇಟ್", correct: false },
            { text: "ಕರೆನ್ಸಿ ರಿಸರ್ವ್ ರೇಟ್", correct: true }
        ]
    },
    {
        question: "ಹಣಕಾಸು ವಲಯದಲ್ಲಿ ಎನ್‌ಪಿಎ ಮತ್ತು ಸ್ಟ್ರೆಸಡ್ ಅಸೆಟ್ಸ್ ______ ಅನ್ನು ಅರಿಯಲು ಬಳಕೆಯಾಗುತ್ತದೆ.",
        answers: [
            { text: "ವಿಮೆಯು", correct: false },
            { text: "ಕಂಪೌಂಡ್", correct: false },
            { text: "ಇಯರ್", correct: false },
            { text: "ನೆಟ್", correct: true }
        ]
    },

];

const questionElement = document.getElementById("questions");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");

        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
        }

        function showQuestion() {
            resetState();
            let currentQuestion = questions[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
                if(answer.correct){
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            });
        }

        function resetState(){
            nextButton.style.display = "none";
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }

        function selectAnswer(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button =>{
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        }

        function showScore(){
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }

        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            } else {
                showScore();
            }
        }

        nextButton.addEventListener("click", () => {
            if(currentQuestionIndex < questions.length){
                handleNextButton();
            } else {
                startQuiz();
            }
        });

        startQuiz();