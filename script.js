let data = [
    {
        question: "What is JavaScript?",
        a: 'A FrameWork',
        b: 'A Library',
        c: 'Awesome Programming Language',
        d: 'None Of The Above!',
        correct: 'c'
    },
    {
        question: "Is JavaScript Important?",
        a: 'Oh Hell Yess! 🔥',
        b: 'Nah! 🚫',
        c: "I Don't Know 🤷‍♂️",
        d: 'None Of The Above!',
        correct: 'a'
    },
    {
        question: "What is React Js?",
        a: 'A FrameWork',
        b: 'A Library',
        c: 'A Module',
        d: 'None Of The Above!',
        correct: 'b'
    },
    {
        question: "First Name of JavaScript?",
        a: 'ECMA Script',
        b: 'ES6',
        c: 'Live Script',
        d: 'Mai Kyu Batau?',
        correct: 'c'
    },
]

let quiz = document.getElementById('quizdiv')
let answer = document.querySelectorAll('.answer')
let question = document.getElementById('question')
let option_a = document.getElementById('a_value')
let option_b = document.getElementById('b_value')
let option_c = document.getElementById('c_value')
let option_d = document.getElementById('d_value')
let submitbtn = document.getElementById('button')
let current_question = 0
let current_score = 0
loadQuiz()

function loadQuiz() {
    deselect()
    question.innerHTML = data[current_question].question
    option_a.innerText = data[current_question].a
    option_b.innerText = data[current_question].b
    option_c.innerText = data[current_question].c
    option_d.innerText = data[current_question].d
}

function deselect() {
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', () => {
    let selectedOption
    answer.forEach(answer => {
        if (answer.checked) {
            selectedOption = answer.id
        }
    });
    if (selectedOption == data[current_question].correct) {
        current_score = current_score + 1
    }
    current_question = current_question + 1
    if (current_question == data.length) {
        quiz.innerHTML = `<h1>Your Score is ${current_score}/${data.length}<br><a href='https://saurabhs-333-hub.github.io/Quiz-Application/'>Reload</a>`
    } else {
        loadQuiz()
    }
})
