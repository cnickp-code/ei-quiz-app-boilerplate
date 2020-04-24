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
      correctAnswer: 3
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: 2
    }
  ],
  questionNumber: 0,
  score: 0,
  feedbackString: "",
  pageState: 0,
  result: []
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
    '<div class="upper-container">',
      '<div class="score">', item.result.join(''), '</div>',
      '<div class="question">', item.questions[item.questionNumber].question, '</div>',
    '</div>',
    '<form id="quiz-form">',
      '<fieldset class="quiz-container">',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-1" value="0">',
        '<label class="quiz-label label1" for="quiz-ans-1">', item.questions[item.questionNumber].answers[0], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-2" value="1">',
        '<label class="quiz-label label2" for="quiz-ans-2">', item.questions[item.questionNumber].answers[1], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-3" value="2">',
        '<label class="quiz-label label3" for="quiz-ans-3">', item.questions[item.questionNumber].answers[2], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-4" value="3">',
        '<label class="quiz-label label4" for="quiz-ans-4">', item.questions[item.questionNumber].answers[3], '</label>',
        '<br>',
        '<button type="submit" class="submit-button next-button">Submit</button>',
        '<button class="continue-button hidden">Continue</button>',
      '</fieldset>',
    '</form>',
    
    
  ];

  return quizStructure;
}

function generateFeedbackPage(item) {
  let feedbackStructure = [
    '<div class="score">', item.result.join(''), '</div>',
    '<div class="question">', item.questions[item.questionNumber].question, '</div>',
    '<div class="question">', store.feedbackString, '</div>'
  ];
  
  return feedbackStructure;
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
    '<form id="end-form">',
      '<fieldset class="end-container">',
        '<div class="results">Results:</div>',
          '<div class="results-body">You got ', store.score, ' out of ', store.questionNumber, '</div>',
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

  return pageArray.join('');
}

// Render page function
function renderPage() {
  console.log("Rendering page");
  
  const pageString = generatePageString(store);

  $('main').html(pageString);
}



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Start button click
function handleStartButtonClicked() {
  $(document).on('submit', '#page-form', event => {
    event.preventDefault();
    console.log("Start button pressed, handleStartButtonClicked ran");

    store.pageState = 1;

    renderPage();
  });
}

// Quiz button clicked
function handleQuizButtonClicked() {
  $(document).on('submit', '#quiz-form', event => {
    event.preventDefault();
    console.log("Quiz button   pressed, handleQuizButtonClicked ran");

    const ans = $('input[name="quizanswer"]:checked').val();
    console.log(ans);
    
    if(ans == undefined) {
      alert('Must select an answer.');
    } else {
      // Handle score and result from answer
      handleAnswer(ans);

      // Launch feedback page
      handleFeedback();

      // Add hidden class to quiz button
      $('.next-button').addClass('hidden').removeClass('submit-button');

      // Remove hidden class from continue button
      $('.continue-button').removeClass('hidden').addClass('submit-button');
    }
  });
}

// Handle feedback
function handleFeedback() {
  $('.upper-container').html(generateFeedbackPage(store).join(''));
}

// Continue button clicked
function handleContinueButtonClicked() {
  $(document).on('click', '.continue-button', event => {
    console.log("Continue button pressed, handleContinueButtonClicked ran");

    // Increment question number on click
    console.log(store.questionNumber);
    store.questionNumber++;
    console.log(store.questionNumber);

    const questionNum = store.questionNumber;
    checkIfMax(questionNum);

    renderPage();
  });
}

// Check if answer was correct
function handleAnswer(num) {
  console.log("handleAnswer ran");
  console.log(num);
  console.log(store.questions[store.questionNumber].correctAnswer)

  let answerValue = store.questions[store.questionNumber].correctAnswer;
  

  if(num == answerValue) {
    store.score++;
    store.result.push('O ');
    console.log('Right!');
    store.feedbackString = "You are correct!";

  } else {
    store.result.push('X ');
    console.log('Wrong :(');
    store.feedbackString = `Wrong. The correct answer is ${store.questions[store.questionNumber].answers[answerValue]}.`;
  }

  renderPage();
}


// Check if at the end of questions
function checkIfMax(num) {
  if(num >= store.questions.length) {
    store.pageState = 2;
  }
}

// End page button clicked
function handleEndButtonClicked() {
  $(document).on('submit', '#end-form', event => {
    event.preventDefault();
    console.log("End button pressed, handleEndButtonClicked ran");

    store.pageState = 0;
    store.questionNumber = 0;
    store.score = 0;
    store.result = [];

    renderPage();
  });
}

function handleQuiz() {
  renderPage();
  handleStartButtonClicked();
  handleQuizButtonClicked();
  handleEndButtonClicked();
  handleContinueButtonClicked();
}

$(handleQuiz);