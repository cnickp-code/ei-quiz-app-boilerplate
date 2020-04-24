/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  questionNumber: 0,
  score: 0,
  pageState: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateQuizPage(item) {
  let quizStructure = [
    '<div class="score">Results go here O X O</div>',
    '<div class="question">', item.questions[item.questionNumber].question, '</div>',
    '<form id="quiz-form">',
      '<fieldset class="quiz-container">',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-1" value="0" checked>',
        '<label for="quiz-ans-1">', item.questions[item.questionNumber].answers[0], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-2" value="1">',
        '<label for="quiz-ans-2">', item.questions[item.questionNumber].answers[1], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-3" value="2">',
        '<label for="quiz-ans-3">', item.questions[item.questionNumber].answers[2], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-2" value="3">',
        '<label for="quiz-ans-2">', item.questions[item.questionNumber].answers[3], '</label>',
        '<br>',
        '<button type="submit" class ="submit-button next-button">Submit</button>',
      '</fieldset>',
    '</form>'
  ];

  return quizStructure;
}

function generateStartPage(item) {
  let startStructure = [
    '<form id="page-form">',
      '<fieldset class="start-container">',
        '<div class="instructions">Instructions:</div>',
          '<div class="instructions-body">Placeholder text for instructions</div>',
        '<button type="submit" class ="submit-button start-button">Start Game</button>',
      '</fieldset>',
    '</form>'
  ];

  return startStructure;
}

function generateEndPage(item) {
  let endStructure = [
    '<form id="page-form">',
      '<fieldset class="end-container">',
        '<div class="results">Results:</div>',
          '<div class="results-body">Placeholder text for results</div>',
        '<button type="submit" class ="submit-button end-button">Play Again</button>',
      '</fieldset>',
    '</form>'
  ];

  return endStructure;
}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

// Generate page string to add to main
function generatePageString(page) {
  console.log("Generating a page string element");

  const pageVal = page.pageState;
  let pageArray = [];

  if(pageVal === 0) {
    pageArray = generateStartPage(store);
  } else if(pageVal === 1) {
    pageArray = generateQuizPage(store);
  } else if(pageVal === 2) {
    pageArray = generateEndPage(store);
  } 
  console.log(pageArray);
  return pageArray.join('');
}

// Render page function
function renderPage() {
  console.log("Rendering page");
  
  const pageString = generatePageString(store);
  console.log(pageString);
  $('main').html(pageString);
}



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Start button click
function handleStartButtonClicked() {
  $(document).on('submit', '#page-form', event => {
    event.preventDefault();
    console.log("Start button pressed, handleStartButtonClicked ran");
    console.log(store.pageState);
    store.pageState = 1;
    console.log(store.pageState);
    renderPage();
  });
}

/*function handleQuizButtonClicked() {
  $(document).on('submit', '#quiz-form', event => {
    event.preventDefault();
    console.log("Start button pressed, handleStartButtonClicked ran");
    console.log(store.pageState);
    store.pageState = 1;
    console.log(store.pageState);
    renderPage();
  });
}*/

function handleQuiz() {
  renderPage();
  handleStartButtonClicked();
}

$(handleQuiz);