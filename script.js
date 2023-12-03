const questions = [
    // Question 1
{
    question: "ಪ್ರಶ್ನೆ: ಶ್ವಾಸಕೋಶಗಳ ಮುಖ್ಯ ಕಾರ್ಯವೇನು?",
    answers: [
        { text: " ಊರುಗೋಲನ್ನು ಹಾಕುವುದು", correct: false },
        { text: " ದೇಹದ ತಾಪ ನಿಯಂತ್ರಣ", correct: false },
        { text: " ಗುನಾಸುಗಳ ವಿನಿಮಯ", correct: true },
        { text: " ರಕ್ತದ ಶೋಧನ", correct: false }
    ]
},

// Question 2
{
    question: "ಪ್ರಶ್ನೆ: ಸರ್ಕ್ಯುಲೇಟರಿ ವ್ಯವಸ್ಥೆಯ ಯಾವ ಕೆಲಸವಿದೆ?",
    answers: [
        { text: " ರಕ್ತದ ಆಕ್ಸಿಜನೇಷನ್", correct: true },
        { text: " ಆಹಾರ ಜನನ", correct: false },
        { text: " ಹಾರ್ಮೋನ್ ಸಂಶೋಧನೆ", correct: false },
        { text: " ಮೋಟಾರ್ ನಿಯಂತ್ರಣ", correct: false }
    ]
},

// Question 3
{
    question: "ಪ್ರಶ್ನೆ: ಯಾವ ಜೀವಾಣುವಿನ ಎಲ್ಲ ಜೀವನ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ನಡೆಸಬಹುದು ಎಂದರೆ ಯಾವುದು?",
    answers: [
        { text: " ಕೋಶ", correct: true },
        { text: " ಅಂಗ", correct: false },
        { text: " ಉದಾಹರಣೆ", correct: false },
        { text: " ಜೀವ", correct: false }
    ]
},

// Question 4
{
    question: "ಪ್ರಶ್ನೆ: ಮಣ್ಣು ಕೋಶದಲ್ಲಿ ಫೋಟೋಸಿಂಥೆಸಿಸ್ ಯಾವ ಭಾಗದಲ್ಲಿ ನಡೆಯುತ್ತದೆ?",
    answers: [
        { text: " ನ್ಯೂಕ್ಲಿಯಸ್", correct: false },
        { text: " ಕ್ಲೋರೊಪ್ಲಾಸ್ಟ್", correct: true },
        { text: " ಮೈಟೊಕಂಡ್ರಿಯಾ", correct: false },
        { text: " ಎಂಡೊಪ್ಲಾಸ್ಟ್ರಿಯಮ್", correct: false }
    ]
},

// Question 5
{
    question: "ಪ್ರಶ್ನೆ: ಆಹಾರದಲ್ಲಿ ಕಾರ್ಬೊಹೈಡ್ರೇಟುಗಳನ್ನು ಭಂಗಿಸಲು ಯಾವ ಹೊಸತಾದ ಹಂಚಿನ ಹೊಡೆಯುವ ಕೆಲಸ ನಡೆಯುತ್ತದೆಯೇನು?",
    answers: [
        { text: " ಎಮಿಲೇಸ್", correct: true },
        { text: " ಲಿಪೇಸ್", correct: false },
        { text: " ಪ್ರೊಟಿಯೇಸ್", correct: false },
        { text: " ನ್ಯೂಕ್ಲೇಸ್", correct: false }
    ]
},

// Question 6
{
    question: "ಪ್ರಶ್ನೆ: ಪ್ರತಿರಕ್ಷಣ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಶ್ವೇತ ರಕ್ತ ಕೋಶಗಳ ಪಾತ್ರ ಯಾವು?",
    answers: [
        { text: " ಆಕ್ಸಿಜನ್ ಸಾರಾಂಶ", correct: false },
        { text: " ರಕ್ತ ಸ್ರಾವದ ನಿಯಂತ್ರಣ", correct: false },
        { text: " ಪಾಥೊಜನ್ ವಿರುದ್ಧ ರಕ್ಷಣೆ", correct: true },
        { text: " ಖಂಡಿತ ಜೀವಾಣು", correct: false }
    ]
},

// Question 7
{
    question: "ಪ್ರಶ್ನೆ: ಮಾನವ ದೇಹದಲ್ಲಿ ಇನ್ಸುಲಿನ್ ಯಾವ ಅಂಗದಲ್ಲಿ ಉತ್ಪನ್ನವಾಗುತ್ತದೆ?",
    answers: [
        { text: " ಲಿವರ್", correct: false },
        { text: " ಪ್ಯಾಂಕ್ರಿಯಾಸ್", correct: true },
        { text: " ಕಿಡ್ನಿ", correct: false },
        { text: " ಹೊಟ್ಟಿಗೆ", correct: false }
    ]
},

// Question 8
{
    question: "ಪ್ರಶ್ನೆ: ನರ ವ್ಯವಸ್ಥೆಯ ಮುಖ್ಯ ಕಾರ್ಯವೇನು?",
    answers: [
        { text: " ಹಾರ್ಮೋನ್ ಸಿದ್ಧಿ", correct: false },
        { text: " ನಿಯಂತ್ರಣ ಮತ್ತು ಹೊಡೆಯುವುದು", correct: true },
        { text: " ಪರಿಣಾಮ ಸಂಶೋಧನೆ", correct: false },
        { text: " ಸಸ್ತನ ಸಂಕೋಚನ", correct: false }
    ]
},

// Question 9
{
    question: "ಪ್ರಶ್ನೆ: ಕೋಶದ ಯಾವ ಭಾಗವು ಶಕ್ತಿ ಉತ್ಪನ್ನಗೊಳಿಸಲು ಹೊಂದಿರುವುದು?",
    answers: [
        { text: " ನ್ಯೂಕ್ಲಿಯಸ್", correct: false },
        { text: " ರೈಬೊಸೋಮ್", correct: false },
        { text: " ಮೈಟೊಕಂಡ್ರಿಯಾ", correct: true },
        { text: " ಗೋಲ್ಗಿ ಅಪರೇಟಸ್", correct: false }
    ]
},

// Question 10
{
    question: "ಪ್ರಶ್ನೆ: ಜನರ ಹಂಚಿನ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ಯಾವ ಪುನರುನೋದನ ಸಾಧನವಾಗಿದೆ?",
    answers: [
        { text: " ಡಿಎನ್‌ಎ", correct: true },
        { text: " ಆರ್‌ಎನ್‌ಎ", correct: false },
        { text: " ಪ್ರೊಟೀನ್‌ಗಳು", correct: false },
        { text: " ಲಿಪಿಡ್‌ಗಳು", correct: false }
    ]
},
// Question 11
{
    question: "ಪ್ರಶ್ನೆ: ಮುಖ್ಯವಾಗಿ ಹೊಮ್ಮಿದ್ದರೆ ಹೊಡೆಯುವ ಹೋಮೋಸ್ಟೇಸಿಸನ್ ನಿಯಂತ್ರಣದ ಅಂಗವೇನು?",
    answers: [
        { text: "ಹೃದಯ", correct: false },
        { text: "ಕ್ಷಯರೋಗ", correct: false },
        { text: "ಕ್ಷಯಾರು", correct: true },
        { text: "ಶ್ವಾಸಕೋಶ", correct: false }
    ]
},

// Question 12
{
    question: "ಪ್ರಶ್ನೆ: ಮೂರು ವಿಧದ ಶ್ವಾಸಕೋಶಗಳ ಹೆಸರುಗಳೇನು?",
    answers: [
        { text: "ಉರುಳಿಕೆ, ಅಂತಃಶ್ವಾಸ, ಬಾಹ್ಯಶ್ವಾಸ", correct: true },
        { text: "ಪಾರಾಮುಕುಲ್ಯ, ಪ್ರಾನಾಮ, ಅಂತರ್ಗತ ಶ್ವಾಸ", correct: false },
        { text: "ಸಾಮಾನ್ಯ, ವಿಶೇಷ, ಉದಾತ್ತ ಶ್ವಾಸ", correct: false },
        { text: "ಕಪಾಲ ಶ್ವಾಸ, ಮೂಕ ಶ್ವಾಸ, ಉತ್ತಾನ ಶ್ವಾಸ", correct: false }
    ]
},

// Question 13
{
    question: "ಪ್ರಶ್ನೆ: ಪುನರ್ನಿರ್ಮಾಣ ಕೋಶಗಳ ಉದಾಹರಣೆಗಳೇನು?",
    answers: [
        { text: "ಶರೀರದ ಎಡಭಾಗದ ಕೋಶಗಳು", correct: false },
        { text: "ಹೃದಯ ಕೋಶಗಳು", correct: false },
        { text: "ಮೂಳೆ ಕೋಶಗಳು", correct: true },
        { text: "ಮಸ್ತಿಷ್ಕ ಕೋಶಗಳು", correct: false }
    ]
},

// Question 14
{
    question: "ಪ್ರಶ್ನೆ: ಹೂಮರದ ಬಣ್ಣವನ್ನು ತಿಳಿಸುವ ಪರಿಕ್ರಮ ಯಾವುದು?",
    answers: [
        { text: "ಕ್ಲೋರೊಫಿಲ್", correct: true },
        { text: "ಕೆರೋಟಿನ್", correct: false },
        { text: "ಮೆಲನಿನ್", correct: false },
        { text: "ಆಂತರದೃಷ್ಟಿ", correct: false }
    ]
},

// Question 15
{
    question: "ಪ್ರಶ್ನೆ: ಹೀಮಗ್ಲೋಬಿನ್ ಮತ್ತು ಮೈಥೋಕಾಂಡ್ರಿಯಾ ಯಾವ ಕೋಶಗಳಲ್ಲಿ ಹೊರಗೊಮ್ಮಿದೆ?",
    answers: [
        { text: "ಶ್ವಾಸಕೋಶಗಳು", correct: false },
        { text: "ರಕ್ತದ ಹೊನಲು ಕೋಶಗಳು", correct: false },
        { text: "ಲೋಹದ ರಕ್ತಕೋಶಗಳು", correct: true },
        { text: "ಎರಡೂ ಹೊರಗೊಮ್ಮಿಲ್ಲ", correct: false }
    ]
},

// Question 16
{
    question: "ಪ್ರಶ್ನೆ: ಹುಡುಗರಲ್ಲಿ ಏನು ಬೆಳೆಯುವುದು ಮೊದಲಿನ ದಿನಗಳಲ್ಲಿ?",
    answers: [
        { text: "ಬ್ರೇಸ್ಟ್ ಮಿಲ್ಕ್", correct: true },
        { text: "ಮೂತ್ರ", correct: false },
        { text: "ರಕ್ತಕೋಶಗಳು", correct: false },
        { text: "ಎರಡೂ ಹೊರಗೊಮ್ಮಿಲ್ಲ", correct: false }
    ]
},

// Question 17
{
    question: "ಪ್ರಶ್ನೆ: ನಡುವಿನ ಬೇರೆ ಬೇರೆ ಅವಸ್ಥೆಗಳಲ್ಲಿ ರಕ್ತ ಚಾಪವು ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ?",
    answers: [
        { text: "ಉಚ್ಚ ಮತ್ತು ಕಡಿಮೆ ಮಧ್ಯಮ", correct: false },
        { text: "ಉಚ್ಚ ಮತ್ತು ಕಡಿಮೆ ಹೆಚ್ಚು", correct: false },
        { text: "ಉಚ್ಚ ಮತ್ತು ಕಡಿಮೆ ಕ್ರಮಶಃ", correct: true },
        { text: "ಎಲ್ಲಾ ಕಡೆಗಳಲ್ಲೂ ಸಂಸ್ಥಾಪನೆ", correct: false }
    ]
},

// Question 18
{
    question: "ಪ್ರಶ್ನೆ: ಬ್ರೇಸ್ಟ್ ಮಿಲ್ಕ್ ಹೊರಗೊಮ್ಮಿದ ಸಮಯವೇನು?",
    answers: [
        { text: "ಹುಟ್ಟುವ ಮೊದಲೇ", correct: true },
        { text: "ಸಾವಿರ ದಿನಗಳಲ್ಲಿ ಪರೀಕ್ಷಿತವಾಗಲು", correct: false },
        { text: "ಹುಟ್ಟುವ ನಂತರ ಒಂದೇ ದಿನ", correct: false },
        { text: "ಮತ್ತೊಂದು ವಾರದ ಅಂತ್ಯದಲ್ಲಿ", correct: false }
    ]
},

// Question 19
{
    question: "ಪ್ರಶ್ನೆ: ಮೊಗದ ಮೂಲಕ ಸ್ವಲ್ಪ ಬೂದಿ ಹೊರಗೊಳ್ಳುವ ಪ್ರಕ್ರಿಯೆಯ ಹೆಸರೇನು?",
    answers: [
        { text: "ಹೃದಯಾಕ್ರಾಂತಿ", correct: false },
        { text: "ಹಾನಿಮಾರ್ಜನ", correct: true },
        { text: "ಹೃದಯಾಸ್ತಾಂತ", correct: false },
        { text: "ಹೃದಯಾನುರೋಧನ", correct: false }
    ]
},

// Question 20
{
    question: "ಪ್ರಶ್ನೆ: ಪ್ಲಾಸೆಂಟಾ ಎಂದರೆ ಏನು?",
    answers: [
        { text: "ಉದಾಹರಣೆ", correct: false },
        { text: "ಮುಂಡ", correct: false },
        { text: "ಆಹಾರಿಯ", correct: false },
        { text: "ಹುಟ್ಟುವ ನಂತರ ಬೇರೆಡೆ ಹೋಗುವ", correct: true }
    ]
},
// Question 21
{
    question: "ಪ್ರಶ್ನೆ: ಮನುಷ್ಯನ ಬ್ರೇನ್‌ನಲ್ಲಿ ಯಾವ ಭಾಗವು ಜೀವಂತಾಡಿದ ಕಾರಣದಿಂದ ಗಂಗಾನದಿಯ ಮೇಲಣ ಮನನಂ ಆಡಬಹುದು?",
    answers: [
        { text: "ಹಿಪ್ಪೋಕ್ಯಾಂಪಸ್", correct: true },
        { text: "ಥಾಲಾಮಸ್", correct: false },
        { text: "ಸೈನುಸ್", correct: false },
        { text: "ಪ್ಯಾರಿಟಲ್", correct: false }
    ]
},

// Question 22
{
    question: "ಪ್ರಶ್ನೆ: ಹೃದಯದ ದುಂಡಾಟಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಕಾಗದ ಎಂದರೆ?",
    answers: [
        { text: "ಮೈತಿಲ್ಲಿನ್ ವಾಲ್ವ್", correct: false },
        { text: "ಹಾಟ್‌ಸ್ಪಾಟ್", correct: false },
        { text: "ಪ್ರೊಟೆಯಸ್ಟಾಗ್ಲಾಂಡ್", correct: false },
        { text: "ಸಿನೋಅಟ್ರಿಯಲ್ ನೋಡ್", correct: true }
    ]
},

// Question 23
{
    question: "ಪ್ರಶ್ನೆ: ಹೃದಯದ ಬೆನ್ನುಮೂಳೆ ಯಾವ ಕಡೆಯಲ್ಲಿ ಇದೆ?",
    answers: [
        { text: "ಬೆನ್ನು", correct: false },
        { text: "ಮುನ್ನೂರು ನಾಲ್ಕು ದಂಡ", correct: true },
        { text: "ಹೊನಲು", correct: false },
        { text: "ಕೆಳಗಿನ ಭಾಗ", correct: false }
    ]
},

// Question 24
{
    question: "ಪ್ರಶ್ನೆ: ನೈಟ್ ಬ್ಲೈಂಡ್ ನಿರ್ಮಾಣವಾಗಿದೆಯೇನು?",
    answers: [
        { text: "ಬ್ರೈಲ್", correct: false },
        { text: "ರೋಡ್ ಬ್ಲೈಂಡ್", correct: false },
        { text: "ಆಂಟಿಸೈಕೋಟಿಕ ಪದಾರ್ಥ", correct: false },
        { text: "ಮೆಲನಿನ್", correct: true }
    ]
},

// Question 25
{
    question: "ಪ್ರಶ್ನೆ: ಪುರಾಣ ಕಥೆಗಳಲ್ಲಿ ಯಾವ ರಾಜನನ್ನು ಚಂದ್ರಮೌಳಿ ಎಂದು ಕರೆಯಲಾಗಿದೆ?",
    answers: [
        { text: "ಯುಧಿಷ್ಠಿರ", correct: false },
        { text: "ಬಲರಾಮ", correct: false },
        { text: "ಭೀಷ್ಮ", correct: false },
        { text: "ಚಂದ್ರಗುಪ್ತ", correct: true }
    ]
},

// Question 26
{
    question: "ಪ್ರಶ್ನೆ: ಆಕ್ರಮಣದ ವೇಳೆ ರಕ್ತ ಚಾಪವನ್ನು ಹೆಚ್ಚಿಸಲು ನೇತೃತ್ವವನ್ನು ತಾತ್ಕಾಲಿಕವಾಗಿ ವಹಿಸುವ ಹಾಗೂ ನಂತರ ಅದನ್ನು ಸಹಾಯಕ ದನದಿಂದ ನಿಯಂತ್ರಿಸುವ ಕಾರ್ಯವೇನು?",
    answers: [
        { text: "ಸೈನುಸ್ ನೋಡ್", correct: false },
        { text: "ರೇನಿನ್-ಐಂಸ್ ನಿಯಂತ್ರಣ", correct: true },
        { text: "ಮಿಟೋಕಾಂಡ್ರಿಯಾ ಸಂಶೋಧನೆ", correct: false },
        { text: "ನಾಯಿ ಪರ್ಯಾಯ", correct: false }
    ]
},

// Question 27
{
    question: "ಪ್ರಶ್ನೆ: ಮನುಷ್ಯ ದೇಹದಲ್ಲಿ ಏನು ಪ್ರಚಾರದಲ್ಲಿದೆ ಎಂದರೆ?",
    answers: [
        { text: "ಸೋಂಕು", correct: false },
        { text: "ಬೆರಳು", correct: false },
        { text: "ಹೊಟ್ಟೆ", correct: false },
        { text: "ಕುಳಿತುಕೊಂಡಿರುವ ರಕ್ತಗಳು", correct: true }
    ]
},

// Question 28
{
    question: "ಪ್ರಶ್ನೆ: ನಾರಿಯರ ಕಣ್ಣಿನಲ್ಲಿ ಬೆಳುಪು ಅಥವಾ ನೀಲಿಯಾಗಿ ಕಾಣುವ ಹಾಗೂ ಹಲವಾರು ವರ್ಣಗಳನ್ನು ಕಾಣಬಹುದಾದ ಶ್ರವಣಗೋಷ್ಠಿ ಯಾವುದು?",
    answers: [
        { text: "ರೆಟಿನಾ", correct: false },
        { text: "ಹ್ರಿಯಾಟಸ್", correct: false },
        { text: "ಲೆಂಸ್", correct: false },
        { text: "ಆಯೀರಿಸ್", correct: true }
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