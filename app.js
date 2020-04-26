/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: `What is Link's main weapon in Legend of Zelda: Ocarina of Time?`,
      answers: [
        'Deku Stick',
        'Master Sword',
        'Biggoron Sword',
        'Boomerang'
      ],
      correctAnswer: 1,
      category: 'Legend of Zelda'
    },
    {
      question: 'Super Smash Bros. Melee has many classic moments, including the infamous Wombo Combo. During what tournament did this take place?',
      answers: [
        'Evo 2012',
        'SCSA West Coast Circuit 2008',
        'Dreamhack: Winter 2010',
        'CFL Smackdown 29'
      ],
      correctAnswer: 1,
      category: 'Super Smash Bros'
    },
    {
      question: `In an infamous Counter-Strike: Global Offensive update in 2017, Valve nerfed what aspect of the AWP within the game?`,
      answers: [
        'Raw damage',
        'Scope speed',
        'Jumping accuracy',
        'Movement while scoped'
      ],
      correctAnswer: 3,
      category: 'Counter-Strike: Global Offensive'
    },
    {
      question: `In World of Warcraft, given a focus on raiding (PVE), and an ilvl of greater than 440, what is the optimal stat priority of a Demon Hunter in Havoc Spec?`,
      answers: [
        'Versatility > Crit/Haste > Agi > Mastery',
        'Agi > Mastery > Versatility > Crit/Haste',
        'Mastery > Crit/Haste > Versatility > Agi',
        'Versatility > Agi > Mastery > Crit/Haste'
      ],
      correctAnswer: 0,
      category: 'World of Warcraft'
    },
    {
      question: `In an end-game situation (i.e. final three moving circles), what is the technique used to traverse high-ground position in order to conserve materials?`,
      answers: [
        'Walling',
        'Larping',
        'Flooring',
        'Tarping'
      ],
      correctAnswer: 3,
      category: 'Fortnite'
    },
    {
      question: `Who holds the world record for the Minecraft any % set seed speed run?`,
      answers: [
        'TheeSizzler',
        'Admiral_Stapler',
        'Curcuit',
        'Geosquare'
      ],
      correctAnswer: 0,
      category: 'Minecraft'
    },
    {
      question: `In February 2020, 'Limit' became the first U.S. guild in a decade to reach 'World First' in raiding. What was the name of the only other U.S. guild to achieve that feat and what raid instance did they conquer?`,
      answers: [
        'Method > Tempest Keep',
        'Blood Legion > Heart of Fear',
        'Midwinter > Siege of Orgrimmar',
        'Mors Certa > Throne of Thunder'
      ],
      correctAnswer: 1,
      category: 'World of Warcraft'
    },
    {
      question: `In what year is Valve slated to release Half-Life 3?`,
      answers: [
        '2021',
        '2022',
        '2023',
        'lol'
      ],
      correctAnswer: 3,
      category: 'Half-Life 2'
    },
    
  ],
  questionNumber: 0,
  score: 0,
  feedbackString: " ",
  // Page state: 0 - Start. 1 - Quiz. 2 - End.
  pageState: 0,
  result: [' ']
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
      '<div class="question"> Category: ', item.questions[item.questionNumber].category, '</div>',
    '</div>',
    '<form id="quiz-form">',
      '<fieldset class="quiz-container">',
        '<div class="inner">', item.questions[item.questionNumber].question, '</div>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-1" value="0">',
        '<label class="quiz-label before-selected" id="label1" for="quiz-ans-1">', item.questions[item.questionNumber].answers[0], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-2" value="1">',
        '<label class="quiz-label before-selected" id="label2" for="quiz-ans-2">', item.questions[item.questionNumber].answers[1], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-3" value="2">',
        '<label class="quiz-label before-selected" id="label3" for="quiz-ans-3">', item.questions[item.questionNumber].answers[2], '</label>',
        '<br>',
        '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-4" value="3">',
        '<label class="quiz-label before-selected" id="label4" for="quiz-ans-4">', item.questions[item.questionNumber].answers[3], '</label>',
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
    '<div class="question">', store.feedbackString, '</div>',
  ];
  
  return feedbackStructure;
}

function generateStartPage(item) {
  let startStructure = [
    '<div class="upper-container">',
      '<div class="score-begin">Score</div>',
      '<div class="question"> Category</div>',
    '</div>',
    '<form id="page-form">',
      '<fieldset class="quiz-container">',
        '<div class="instructions">Instructions:</div>',
          '<div class="instructions-body">A light-hearted, fun check to see how much you know about the wide world of video games! Laugh! Enjoy!</div>',
        '<button type="submit" class ="submit-button start-button">Start Game</button>',
      '</fieldset>',
    '</form>'
  ];

  return startStructure;
}

function generateEndPage(item) {
  let endStructure = [
    '<div class="upper-container">',
    '<div class="score">', item.result.join(''), '</div>',
      '<div class="question">Results!</div>',
    '</div>',
    '<form id="end-form">',
      '<fieldset class="quiz-container">',
          '<div class="results-body">You got ', store.score, ' out of ', store.questionNumber, ' correct!</div>',
          '<div class="results-body">Pro tip: Get some sun and exercise... IRL.</div>',
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
    let correctAns = Number(store.questions[store.questionNumber].correctAnswer);
    let index = Number(ans) + 1;
    
    if(ans == undefined) {
      alert('You must select an answer!');
    } else {
      // Handle score and result from answer
      handleAnswer(ans);

      // Launch feedback page
      handleFeedback();

      // Turn incorrect answer red
      $(`#label${index}`).addClass('incorrect');

      // Turn correct answer green no matter what
      // Override incorrect answer
      $(`#label${correctAns + 1}`).addClass('correct');

      // Remove quiz-label class to keep from highlighting label after submission
      $('.before-selected').removeClass('quiz-label');

      // Add hidden class to quiz button
      $('.next-button').addClass('hidden').removeClass('submit-button');

      // Disable radio buttons
      $('input[type=radio]').attr('disabled', true);

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
    store.questionNumber++;

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

  // If answer passed is correct, 
  // Add to score, push an 'O' into result, return feedback
  // If answer passed is incorrect,
  // Only push an 'X' into result.
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

// Main function launching all functionality
function handleQuiz() {
  renderPage();
  handleStartButtonClicked();
  handleQuizButtonClicked();
  handleEndButtonClicked();
  handleContinueButtonClicked();
}

$(handleQuiz);