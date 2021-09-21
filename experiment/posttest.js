/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Using the principle of proportioning and making use of the fact that the real distance between points _____ is 100 mm.", ///// Write the question inside double quotes
            answers: {
                a: "A and B", ///// Write the option 1 inside double quotes
                b: "C and B", ///// Write the option 2 inside double quotes
                c: "C and A",
                d: "None of the above",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. The concept can be extended to structural _____ problems also by taking pictures at a very small interval.",  ///// Write the question inside double quotes
      answers: {
        a: "Reference",                  ///// Write the option 1 inside double quotes
        b: "Principle",                  ///// Write the option 2 inside double quotes
        c: "Deflections",
        d: "Dynamics",
      },
      correctAnswer: "d"    ///// Write the correct option inside double quotes
    },
                         
    {
      question: "3. The photographs can be analysed for deflections using MS paint, MS word, ADOBE Photoshop or MATLAB.",  ///// Write the question inside double quotes
      answers: {
        a: "True",                  ///// Write the option 1 inside double quotes
        b: "False",                  ///// Write the option 2 inside double quotes
//         c: "Deflections",
//         d: "Dynamics",
      },
      correctAnswer: "a"    ///// Write the correct option inside double quotes
    },
                         
     {
      question: "4. The reference frame _____ is attached to the beam at the mid-point.",  ///// Write the question inside double quotes
      answers: {
        a: "A",                  ///// Write the option 1 inside double quotes
        b: "B",                  ///// Write the option 2 inside double quotes
        c: "C",
        d: "D",
      },
      correctAnswer: "c"    ///// Write the correct option inside double quotes
    },                    

    {
      question: "5. A stationary reference frame with two cross marks A and B 100 mm apart is fixed above the ?",  ///// Write the question inside double quotes
      answers: {
        a: "Blocks",                  ///// Write the option 1 inside double quotes
        b: "Beam",                  ///// Write the option 2 inside double quotes
        c: "Weight",
        d: "Computer",
      },
      correctAnswer: "b"    ///// Write the correct option inside double quotes
    },  
        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
