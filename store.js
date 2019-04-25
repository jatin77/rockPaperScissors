//function initialize
(function init() {
  //User Select Button Add Event
  const buttons = document.querySelectorAll('footer button');
  buttons.forEach(btn => btn.addEventListener('click', playGame));
})();
//Global Variables Set Scores
let scoreYou = 0;
let scoreComp = 0;
//function Play Game
function playGame(e) {
  //User Selected Button
  let btnName = this.getAttribute('data-name');
  //User Hand Image
  const userHand = document.querySelector('.you-hand i');
  //Comp Hand Image
  const compHand = document.querySelector('.comp-hand i');
  //set animation
  document.querySelector('.you-hand').style.animation = 'handyou .4s ease';
  document.querySelector('.comp-hand').style.animation = 'handyou .4s ease';
  //remove animation
  document.addEventListener('animationend', () => {
    document.querySelector('.you-hand').style.animation = '';
    document.querySelector('.comp-hand').style.animation = '';
  });

  //Comp Hands
  const compHands = [
    'fas fa-hand-rock',
    'fas fa-hand-paper',
    'fas fa-hand-scissors'
  ];
  //Comp Random Hand
  let compHandNum = Math.floor(Math.random() * compHands.length);

  //set timeout
  setTimeout(function() {
    //Set User Image
    userHand.className = btnName;
    //Set Comp Hand Image
    compHand.className = compHands[compHandNum];
    //check conditions
    check(userHand, compHand);
  }, 400);
}
//function check Hands
function check(userHand, compHand) {
  //Count

  //Result Class
  let result = document.querySelector('.result h1');
  //Check Hands
  if (userHand.className === compHand.className) {
    result.textContent = "It's a tie!";
    console.log('draw');
  } else {
    //Check For Rock
    if (userHand.className === 'fas fa-hand-rock') {
      if (compHand.className === 'fas fa-hand-paper') {
        result.textContent = 'Comp Won!';
        scoreComp++;
        updateScore(scoreComp, scoreYou);
      } else {
        result.textContent = 'You Won!';
        scoreYou++;
        updateScore(scoreComp, scoreYou);
      }
    }
    //Check For Paper
    if (userHand.className === 'fas fa-hand-paper') {
      if (compHand.className === 'fas fa-hand-scissors') {
        result.textContent = 'Comp Won!';
        scoreComp++;
        updateScore(scoreComp, scoreYou);
      } else {
        result.textContent = 'You Won!';
        scoreYou++;
        updateScore(scoreComp, scoreYou);
      }
    }
    //Check For Scissors
    if (userHand.className === 'fas fa-hand-scissors') {
      if (compHand.className === 'fas fa-hand-rock') {
        result.textContent = 'Comp Won!';
        scoreComp++;
        updateScore(scoreComp, scoreYou);
      } else {
        result.textContent = 'You Won!';
        scoreYou++;
        updateScore(scoreComp, scoreYou);
      }
    }
  }
  function updateScore(scoreComp, scoreYou) {
    let finalYou = 0,
      finalComp = 0;
    finalYou += scoreYou;
    finalComp += scoreComp;
    //Display Score You
    document.querySelector('.you-score').textContent = finalYou;
    //Display Score Comp
    document.querySelector('.comp-score').textContent = finalComp;
  }
}
