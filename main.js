// letters
const letters = 'abcdefghijklmnopqrstuvwxyz';

// get array from leeters
let lettersArray = Array.from(letters);

// seiect letter container
let lettersContainer = document.querySelector(".letters");

// generate letters
lettersArray.forEach(letter => {

  // create span
  let span = document.createElement("span");

  // create letter text node
  theLetter = document.createTextNode(letter);

  // append the letter to span
  span.appendChild(theLetter);

  //add className
  span.className = 'letter-box';

  // apped span to the letter container
  lettersContainer.appendChild(span);
});

// objects of words + catagores
const words = {
  programming: [ 'javascript', 'mysql','php', 'go','python'],
  movies: ['prestige', 'Inception', 'Parasite', 'Interstellar', 'Whiplash', 'Memento', 'Coco', 'Up'],
  people: ['Albert Einstein', 'Hitchcock', 'Alexander', 'Cleoptra', 'Mahatma Ghandi'],
  countries: ['Syria', 'Phalestine', 'Yemen', 'Egypt', 'Bahrain', 'Qatar']
}


// get random property
let allKeys = Object.keys(words);

// random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// catagory
let randomPropName = allKeys[randomPropNumber];

// catagory words
let randomPropValue = words[randomPropName];

// random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// the random word
let randomValueValue = randomPropValue[randomValueNumber];

// set catagory info
document.querySelector(".game-info .catagory span").innerHTML = randomPropName;

// select letter guess element
let letterGuessContainer = document.querySelector(".letters-guess");

// convert random word to array
let letterAndSpace = Array.from(randomValueValue.toLowerCase());

// create span depend on word
letterAndSpace.forEach(letter => {

  // create empty span
  let emptySpan = document.createElement("span");

  // if letter is space
  if (letter === ' ') {

    //add className to the span
    emptySpan.className = 'with-space';
  }

  // append span to the letter guess container
  letterGuessContainer.appendChild(emptySpan);
});

// select guess span
let guessSpans = document.querySelectorAll(".letters-guess span");

// set thr wrong attepmts
let wrongAttempts = 0;

// select the daw element
let theDraw = document.querySelector(".hangman-draw");

// handle clicked on letter
document.addEventListener("click", (e) => {

   // set the status
   let status = false;

  if (e.target.className == 'letter-box') {

    e.target.classList.add("clicked");

    // get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    letterAndSpace.forEach((wordLetter, wordIndex) => {

      // if clicked letter == randomWord
      if (theClickedLetter == wordLetter) {

     // set status to true if the clicked = randomWord
          status = true;

    // loop on all guess span
      guessSpans.forEach((span, spanIndex) => {

       if (wordIndex === spanIndex) {

       span.innerHTML = theClickedLetter;

         }

      });

   }

});

// outer loop
if (status !== true) {

    //// increase the wrongAttempts
    wrongAttempts++;

    // add class wrong on the draw element
    theDraw.classList.add(`wrong-${wrongAttempts}`);

    if (wrongAttempts === 8) {

      endGame();

      lettersContainer.classList.add("finished")
    }

}

}

})

// endGame function
function endGame() {

   // create popup div
   let div = document.createElement("div");

   // create textNode
   let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

   // append text to div
   div.appendChild(divText);

   // add class on div
  div.className = "popup";

  // append to the body
  document.body.appendChild(div);

  document.getElementById("start").play();


}
