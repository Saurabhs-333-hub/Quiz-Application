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
        question: "What is JavaScript?",
        a: 'A FrameWork',
        b: 'A Library',
        c: 'Awesome Programming Language',
        d: 'None Of The Above!',
        correct: 'c'
    },
    {
        question: "What is JavaScript?",
        a: 'A FrameWork',
        b: 'A Library',
        c: 'Awesome Programming Language',
        d: 'None Of The Above!',
        correct: 'c'
    },
    {
        question: "What is JavaScript?",
        a: 'A FrameWork',
        b: 'A Library',
        c: 'Awesome Programming Language',
        d: 'None Of The Above!',
        correct: 'c'
    },
]

let quiz = document.getElementById('quizdiv')
let answer = document.querySelectorAll('.answer')
let question = document.getElementById('question')
let option_a = document.getElementById('a')
let option_b = document.getElementById('b')
let option_c = document.getElementById('c')
let option_d = document.getElementById('d')
let submit = document.getElementsByTagName('button')

loadQuiz()