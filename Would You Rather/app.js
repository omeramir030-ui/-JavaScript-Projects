const questions = [
    { a: 'Have the ability to fly', b: 'Be invisible' },
    { a: 'Always be 10 minutes late', b: 'Always be 20 minutes early' },
    { a: 'Explore the ocean', b: 'Explore outer space' },
    { a: 'Have unlimited pizza', b: 'Have unlimited tacos' },
    { a: 'Read minds', b: 'See the future' },
    { a: 'Live without music', b: 'Live without movies' },
    { a: 'Travel to the past', b: 'Travel to the future' },
    { a: 'Be famous for your talent', b: 'Be rich but anonymous' },
    { a: 'Never use social media again', b: 'Never watch TV again' },
    { a: 'Speak every language', b: 'Play every instrument' },
    { a: 'Have a rewind button', b: 'Have a pause button' },
    { a: 'Always have perfect weather', b: 'Always find a perfect parking spot' }
];

let currentQuestion = 0;
const picks = [];

const gameScreen = document.getElementById('gameScreen');
const resultsScreen = document.getElementById('resultsScreen');
const questionCounter = document.getElementById('questionCounter');
const progressPercent = document.getElementById('progressPercent');
const progressBar = document.getElementById('progressBar');
const questionPrompt = document.getElementById('questionPrompt');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');

function displayQuestion() {
    const question = questions[currentQuestion];
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    progressPercent.textContent = `${Math.round((currentQuestion / questions.length) * 100)}%`;
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    questionPrompt.textContent = 'Would you rather...';
    document.getElementById('optionAText').textContent = question.a;
    document.getElementById('optionBText').textContent = question.b;
}

function selectOption(choice) {
    picks.push(choice);
    currentQuestion += 1;
    if (currentQuestion === questions.length) {
        showResults();
        return;
    }
    displayQuestion();
}

function showResults() {
    gameScreen.hidden = true;
    resultsScreen.hidden = false;
    const optionACount = picks.filter((pick) => pick === 'A').length;
    const optionBCount = picks.length - optionACount;
    document.getElementById('resultsSummary').textContent = `You chose option A ${optionACount} times and option B ${optionBCount} times.`;
}

function restartGame() {
    currentQuestion = 0;
    picks.length = 0;
    gameScreen.hidden = false;
    resultsScreen.hidden = true;
    displayQuestion();
}

optionA.addEventListener('click', () => selectOption('A'));
optionB.addEventListener('click', () => selectOption('B'));
document.getElementById('restartButton').addEventListener('click', restartGame);

displayQuestion();




