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
  quizStarted: false,
  questionNumber: 0,
  score: 0
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
function generateQuiz(item) {
  let quizStructure = [
    '<header>',
      '<h1>How Well Do You Know Video Games?</h1>',
    '</header>',
    '<main>',
      '<div class="score">Results go here O X O</div>',
      '<div class="question">Question</div>',
      '<form>',
        '<fieldset class="quiz-container">',
          '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-1" value="0" checked>',
          '<label for="quiz-ans-1">Answer 1</label>',
          '<br>',
          '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-2" value="1">',
          '<label for="quiz-ans-2">Answer 2</label>',
          '<br>',
          '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-3" value="2">',
          '<label for="quiz-ans-3">Answer 3</label>',
          '<br>',
          '<input type="radio" name="quizanswer" class="answers" id="quiz-ans-2" value="3">',
          '<label for="quiz-ans-2">Answer 4</label>',
          '<br>',
          '<button type="submit" class ="submit-button next-button">Submit</button>',
        '</fieldset>',
      '</form>',
      
    '</main>'
  ];

  return quizStructure;
}

function generateStartPage(item) {
  let startStructure = [
    '<header>',
      '<h1>How Well Do You Know Video Games?</h1>',
    '</header>',
    '<main>',
      '<form>',
        '<fieldset class="start-container">',
          '<div class="instructions">Instructions:</div>',
            '<div class="instructions-body">Placeholder text for instructions</div>',
         '<button type="submit" class ="submit-button start">Start Game</button>',
        '</fieldset>',
      '</form>',
    '</main>'
  ];

  return startStructure;
}

function generateEndPage(item) {
  let endStructure = [
    '<header>',
      '<h1>How Well Do You Know Video Games?</h1>',
    '</header>',
    '<main>',
      '<form>',
        '<fieldset class="end-container">',
          '<div class="results">Results:</div>',
            '<div class="results-body">Placeholder text for results</div>',
          '<button type="submit" class ="submit-button start-button">Play Again</button>',
        '</fieldset>',
      '</form>',
    '</main>'
  ];
}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)