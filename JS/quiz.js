const questions = [
    {
        'que': 'Which of the follwing is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is not used in CSS?',
        'a': 'border-box',
        'b': 'const',
        'c': 'flex',
        'd': 'position',
        'correct': 'b',
    },
    {
        'que': "The correct option is 3",
        'a': '100M',
        'b': '200M',
        'c': '3000B',
        'd': '400M',
        'correct': 'c',
    },
    {
        'que': "The correct option is 4",
        'a': '1st option',
        'b': '2nd option',
        'c': '3rd option',
        'd': '4th option',
        'correct': 'd'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = ()=> {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerHTML = `${index + 1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitAns = ()=> {
    const data = questions[index];
    const ans = getAns()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++
    loadQuestion();
    return;
}

const getAns = ()=> {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <marquee style="color:green; font-size:20px;" > Thank you for playing the quiz!</marquee>
    <button class="btn" onclick="ShowResults()">Check Results</button>
    <div class="content">
    <h2 style="text-align:center;">${right}/${total} are correct!</h2>
    </div>
    `
}
const ShowResults = ()=>{
    const btn = document.querySelector(".btn");
    const content = document.querySelector(".content")
    btn.style.display = "none";
    content.style.display = "block";
}
//init call
loadQuestion()