const technologyQuestions = [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], correct: 0, answered: false, userAnswer: null },
    { question: "Which tag defines a hyperlink in HTML?", options: ["<div>", "<a>", "<p>", "<span>"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the correct way to comment in JavaScript?", options: ["<!-- Comment -->", "// Comment", "/* Comment */", "Both // and /* */"], correct: 3, answered: false, userAnswer: null },
    { question: "Which CSS property changes the background color?", options: ["color", "background-color", "bg-color", "background"], correct: 1, answered: false, userAnswer: null },
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "HomeTool Markup Language"], correct: 0, answered: false, userAnswer: null },
    { question: "Which method selects an element by ID in JavaScript?", options: ["getElementByClass", "querySelector", "getElementById", "selectElement"], correct: 2, answered: false, userAnswer: null },
    { question: "What is the default value of the CSS position property?", options: ["absolute", "relative", "fixed", "static"], correct: 3, answered: false, userAnswer: null },
    { question: "Which event is triggered on a click in JavaScript?", options: ["onhover", "onclick", "onchange", "onmouse"], correct: 1, answered: false, userAnswer: null },
    { question: "What does the 'flex' property in CSS relate to?", options: ["Font styling", "Flexbox layout", "Grid layout", "Text alignment"], correct: 1, answered: false, userAnswer: null },
    { question: "Which JavaScript keyword declares a variable?", options: ["var", "let", "const", "All of the above"], correct: 3, answered: false, userAnswer: null }
];

const geographyQuestions = [
    { question: "What is the capital of Uruguay?", options: ["Montery", "New Uruguay", "Montevideo", "Panama City"], correct: 2, answered: false, userAnswer: null },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 3, answered: false, userAnswer: null },
    { question: "Which country has the most deserts?", options: ["Australia", "India", "Canada", "Brazil"], correct: 0, answered: false, userAnswer: null },
    { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correct: 1, answered: false, userAnswer: null },
    { question: "Which continent is the Sahara Desert located in?", options: ["Asia", "Africa", "Australia", "South America"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2, answered: false, userAnswer: null },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the smallest country by land area?", options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"], correct: 1, answered: false, userAnswer: null },
    { question: "Which mountain range separates Europe and Asia?", options: ["Alps", "Himalayas", "Ural Mountains", "Andes"], correct: 2, answered: false, userAnswer: null },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2, answered: false, userAnswer: null }
];

const scienceQuestions = [
    { question: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Fe", "Hg"], correct: 1, answered: false, userAnswer: null },
    { question: "Which planet is known as the Red Planet?", options: ["Jupiter", "Venus", "Mars", "Saturn"], correct: 2, answered: false, userAnswer: null },
    { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the primary source of energy for Earth's climate system?", options: ["The Moon", "The Sun", "Volcanoes", "Ocean currents"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the boiling point of water in Celsius?", options: ["0°C", "50°C", "100°C", "150°C"], correct: 2, answered: false, userAnswer: null },
    { question: "Which element is a noble gas?", options: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], correct: 1, answered: false, userAnswer: null },
    { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 2, answered: false, userAnswer: null },
    { question: "What gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the speed of light in a vacuum (approx.)?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], correct: 0, answered: false, userAnswer: null }
];

const historyQuestions = [
    { question: "In which year did the Titanic sink?", options: ["1905", "1912", "1920", "1931"], correct: 1, answered: false, userAnswer: null },
    { question: "In which year did World War II end?", options: ["1942", "1945", "1948", "1950"], correct: 1, answered: false, userAnswer: null },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correct: 1, answered: false, userAnswer: null },
    { question: "Which ancient wonder was located in Egypt?", options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Temple of Artemis"], correct: 2, answered: false, userAnswer: null },
    { question: "What year did Christopher Columbus first reach the Americas?", options: ["1492", "1453", "1519", "1607"], correct: 0, answered: false, userAnswer: null },
    { question: "Which empire built the Colosseum?", options: ["Greek Empire", "Roman Empire", "Ottoman Empire", "Byzantine Empire"], correct: 1, answered: false, userAnswer: null },
    { question: "Who led the Indian independence movement against British rule?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"], correct: 1, answered: false, userAnswer: null },
    { question: "In which year did the Berlin Wall fall?", options: ["1985", "1989", "1991", "1995"], correct: 1, answered: false, userAnswer: null },
    { question: "Which civilization built Machu Picchu?", options: ["Maya", "Aztec", "Inca", "Olmec"], correct: 2, answered: false, userAnswer: null },
    { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"], correct: 0, answered: false, userAnswer: null }
];

const literatureQuestions = [
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correct: 0, answered: false, userAnswer: null },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Louisa May Alcott"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the name of the hobbit in 'The Lord of the Rings'?", options: ["Bilbo Baggins", "Frodo Baggins", "Samwise Gamgee", "Peregrin Took"], correct: 1, answered: false, userAnswer: null },
    { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0, answered: false, userAnswer: null },
    { question: "Which novel begins with 'Call me Ishmael'?", options: ["Moby-Dick", "The Great Gatsby", "Treasure Island", "The Old Man and the Sea"], correct: 0, answered: false, userAnswer: null },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"], correct: 0, answered: false, userAnswer: null },
    { question: "What is the name of the wizard in 'Harry Potter'?", options: ["Harry Potter", "Ron Weasley", "Albus Dumbledore", "Severus Snape"], correct: 2, answered: false, userAnswer: null },
    { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Sophocles", "Euripides"], correct: 0, answered: false, userAnswer: null },
    { question: "Which play is known as Shakespeare's longest?", options: ["Macbeth", "Hamlet", "Othello", "King Lear"], correct: 1, answered: false, userAnswer: null },
    { question: "Who wrote 'The Catcher in the Rye'?", options: ["J.D. Salinger", "John Steinbeck", "William Faulkner", "Toni Morrison"], correct: 0, answered: false, userAnswer: null }
];

const physicsQuestions = [
    { question: "Who discovered the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the unit of force?", options: ["Watt", "Newton", "Joule", "Volt"], correct: 1, answered: false, userAnswer: null },
    { question: "What does 'E=mc^2' represent?", options: ["Kinetic Energy", "Mass-Energy Equivalence", "Potential Energy", "Work Done"], correct: 1, answered: false, userAnswer: null },
    { question: "Which particle carries a negative charge?", options: ["Proton", "Neutron", "Electron", "Photon"], correct: 2, answered: false, userAnswer: null },
    { question: "What is the SI unit of energy?", options: ["Newton", "Joule", "Watt", "Pascal"], correct: 1, answered: false, userAnswer: null },
    { question: "Who formulated the laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Michael Faraday", "James Maxwell"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the speed of sound in air (approx.)?", options: ["343 m/s", "1500 m/s", "300 m/s", "1000 m/s"], correct: 0, answered: false, userAnswer: null },
    { question: "Which law states that every action has an equal and opposite reaction?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], correct: 2, answered: false, userAnswer: null },
    { question: "What is the primary source of Earth's magnetic field?", options: ["Solar Wind", "Earth's Core", "Moon's Gravity", "Atmospheric Pressure"], correct: 1, answered: false, userAnswer: null },
    { question: "What is the unit of electrical resistance?", options: ["Ampere", "Volt", "Ohm", "Watt"], correct: 2, answered: false, userAnswer: null }
];


const topicOrder = [
    { name: "Technology", questions: technologyQuestions },
    { name: "Geography", questions: geographyQuestions },
    { name: "Science", questions: scienceQuestions },
    { name: "History", questions: historyQuestions },
    { name: "Literature", questions: literatureQuestions },
    { name: "Physics", questions: physicsQuestions }
];


const topicScores = {
    Technology: null,
    Geography: null,
    Science: null,
    History: null,
    Literature: null,
    Physics: null
};

let currentTopicIndex = 0;
let currentQuestions = [];
let currentQuestion = 0;
let currentOptionIndex = null;
let score = 0;
let totalScore = 0;
let totalQuestionsAnswered = 0;

const topicSelection = document.getElementById("topicSelection");
const quizContent = document.getElementById("quizContent");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const selectBtn = document.getElementById("selectBtn");
const scoreDisplay = document.getElementById("scoreDisplay");
const currentScoreEl = document.getElementById("currentScore");
const currentTopicNameEl = document.getElementById("currentTopicName");
const questionNumberEl = document.getElementById("questionNumber");
const scoresListEl = document.getElementById("scoresList");

function updateScoresDisplay() {
    scoresListEl.innerHTML = "";
    Object.entries(topicScores).forEach(([topic, score]) => {
        if (score !== null) {
            const scoreItem = document.createElement("div");
            scoreItem.className = "score-item";
            scoreItem.textContent = `${topic}: ${score}/10`;
            scoresListEl.appendChild(scoreItem);
        }
    });
}

function startQuiz(topicName) {
    
    currentTopicIndex = topicOrder.findIndex(topic => topic.name === topicName);
    if (currentTopicIndex === -1) {
    
        currentTopicIndex = 0;
    }
    totalScore = 0;
    totalQuestionsAnswered = 0;
    topicSelection.style.display = "none";
    quizContent.style.display = "block";
    loadTopic();
}

function startQuizWithCustomCategory() {
    const customCategory = document.getElementById("customCategoryInput").value.trim();
    if (customCategory) {
        
        alert(`Custom category "${customCategory}" is not implemented. Using default topic instead.`);
        startQuiz(topicOrder[0].name);
    } else {
        alert("Please enter a custom category!");
    }
}

function loadTopic() {
    const topic = topicOrder[currentTopicIndex];
    currentQuestions = topic.questions.map(q => ({ ...q })); 
    currentQuestions.forEach(q => {
        q.answered = false;
        q.userAnswer = null;
    });
    currentQuestion = 0;
    currentOptionIndex = null;
    score = 0;
    currentTopicNameEl.textContent = topic.name;
    loadQuestion();
}

function updateCurrentScore() {
    currentScoreEl.textContent = `Score: ${score}/${currentQuestions.length} (Topic: ${topicOrder[currentTopicIndex].name})`;
}

function loadQuestion() {
    const q = currentQuestions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        if (q.answered) {
            if (index === q.userAnswer) {
                optionDiv.classList.add(index === q.correct ? "correct" : "incorrect");
            }
        } else if (index === currentOptionIndex) {
            optionDiv.classList.add("selected");
        }
        optionDiv.textContent = option;
        optionDiv.onclick = () => {
            if (!q.answered) {
                currentOptionIndex = index;
                loadQuestion(); 
            }
        };
        optionsEl.appendChild(optionDiv);
    });
    
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${currentQuestions.length}`;
    updateQuestionButtons();
    if (q.answered) {
        resultEl.textContent = q.userAnswer === q.correct ? "Correct!" : `Wrong! The correct answer was: ${q.options[q.correct]}`;
        selectBtn.disabled = true;
    } else {
        resultEl.textContent = "";
        selectBtn.disabled = false;
    }
    scoreDisplay.style.display = "none"; 
    updateCurrentScore(); 
}

function updateQuestionButtons() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === currentQuestions.length - 1;
    if (currentQuestion === currentQuestions.length - 1 && currentQuestions.every(q => q.answered)) {
        showTopicScore();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function selectOption() {
    const q = currentQuestions[currentQuestion];
    if (q.answered || currentOptionIndex === null) return; 

    q.answered = true;
    q.userAnswer = currentOptionIndex;
    if (currentOptionIndex === q.correct) {
        score++;
        resultEl.textContent = "Correct!";
    } else {
        resultEl.textContent = `Wrong! The correct answer was: ${q.options[q.correct]}`;
    }
    selectBtn.disabled = true;
    loadQuestion(); 
}

function showTopicScore() {
    totalScore += score;
    totalQuestionsAnswered += currentQuestions.length;

    
    const currentTopicName = topicOrder[currentTopicIndex].name;
    topicScores[currentTopicName] = score;

    questionEl.textContent = `Topic Completed! - ${currentTopicName}`;
    optionsEl.innerHTML = "";
    resultEl.textContent = "";
    selectBtn.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    currentScoreEl.style.display = "none"; 
    questionNumberEl.style.display = "none"; 
    scoreDisplay.style.display = "block";
    scoreDisplay.textContent = `Topic Score: ${score}/${currentQuestions.length}`;
    scoreDisplay.classList.add("visible"); 

    
    setTimeout(() => {
        topicSelection.style.display = "block";
        quizContent.style.display = "none";
        scoreDisplay.style.display = "none";
        selectBtn.style.display = "block";
        prevBtn.style.display = "inline-block";
        nextBtn.style.display = "inline-block";
        currentScoreEl.style.display = "block";
        questionNumberEl.style.display = "block";
        updateScoresDisplay(); 
    }, 2000); 
}

function showFinalScore() {
    questionEl.textContent = "All Topics Completed!";
    optionsEl.innerHTML = "";
    resultEl.textContent = "";
    selectBtn.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    currentScoreEl.style.display = "none";
    questionNumberEl.style.display = "none"; 
    scoreDisplay.style.display = "block";
    scoreDisplay.textContent = `Total Score: ${totalScore}/${totalQuestionsAnswered}`;
    scoreDisplay.classList.add("visible");

    
    setTimeout(() => {
        topicSelection.style.display = "block";
        quizContent.style.display = "none";
        scoreDisplay.style.display = "none";
        selectBtn.style.display = "block";
        prevBtn.style.display = "inline-block";
        nextBtn.style.display = "inline-block";
        currentScoreEl.style.display = "block";
        questionNumberEl.style.display = "block";
        updateScoresDisplay(); 
    }, 2000); 
}

function goBack() {
    
    currentTopicIndex = 0;
    currentQuestions = [];
    currentQuestion = 0;
    currentOptionIndex = null;
    score = 0;
    totalScore = 0;
    totalQuestionsAnswered = 0;


    topicSelection.style.display = "block";
    quizContent.style.display = "none";
    scoreDisplay.style.display = "none";
    selectBtn.style.display = "block";
    prevBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    currentScoreEl.style.display = "block";
    questionNumberEl.style.display = "block";
    updateScoresDisplay(); 
}