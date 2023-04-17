var gamePatterns = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

// var name = "sounds/" + userChosenColor + ".mp3";
// console.log(name);=

var blueSound = new Audio("sounds/blue.mp3");
var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");

// var idx = document.getElementById();
// function idx(){document.getElementById();}
var c = -1;
var i = 0;
var round = 0;
var roundContinue = false;
var inGame = false;
var arrayMatch = false;
var gamePatternsCounter = 0;
var userClickedPatternCounter = 0;






  function arrayCompare() {
    // console.log(gamePatterns);
    // console.log(userClickedPattern);
    if(gamePatterns.length===userClickedPattern.length){
      arrayMatch=true;
      userClickedPattern.forEach((element, index) => {
        if (element===gamePatterns[index]){
          // console.log(gamePatterns.length);
          // console.log(userClickedPattern.length}
          roundContinue=true;
          if (gamePatterns[index]===gamePatterns.length){
            title();
          }

        }
        else{
          // console.log("NOT MATCH!");
          // console.log("ARRAY COMPARE");
          inGame = false;
          arrayMatch=false;
          roundContinue=false;
          endGame();
        }

    })
  }
  }
    // console.log("IM IN THE arrayCompare()");




  function endGame() {
    if(arrayMatch === false){
      wrongSound.play();
      $("#level-title").text("Game Over. You Made it to Round " +round+ ". Press Any Key to Restart.");
      $("body").css("background-color", "red");


      setTimeout(()=> {
        $("body").css("background-color", "#011F3F");
      }, 500);

      gamePatterns = [];
      userClickedPattern = [];
      c = -1;
      i = 0;
      // round = 0;
      roundContinue = false;
      inGame = false;
      arrayMatch = false;
      gamePatternsCounter = 0;
      userClickedPatternCounter = 0;

    }
  }


// *********************************************************************************************** Play Sound Function *********************************************************
function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();

  // console.log(audio);

};

$(document).keydown(function() {
  // alert( "Handler for .keydown() called." );
  c++;
  console.log("round in keypress " + round)
  if (c === 0) {
    // inGame = true;
    // round++;
    round===0;
    console.log(round);
    $("#level-title").text("Wait for Sequence.");
    // computerCheck();
    inGame=true;
    nextSequence();

  } else {
    console.log("Error. Already in game, or issue in the keydown event listener function. Check there. Round is " + round);
    inGame=false;
  }

});


// ******************************************************************************************************************* Click Event Listener ******************************************************
$(".btn").click(function() {
  // **************************************************************************************************************** Tests *******************************************************

  // console.log(this);

  var userChosenColor = $(this).attr("id");
  userClickedPatternCounter++;

  clickEvent(userChosenColor);
  if(userClickedPatternCounter>gamePatternsCounter){console.log("USER CLICKED EARLY! RESETTING!"); userClickedPatternCounter = 0;}


})




// if(gamePatterns[i]==userClickedPattern[i]){
// //       console.log("MATCH!");
//********************************************************************************* JQuery Event Listeners ********************************************
function clickEvent(userChosenColor) {
  switch (userChosenColor) {
    case "red":
      redSound.play();
      animatePress();
      userClickedPattern.push(userChosenColor);
      // console.log(equalsCheck(gamePatterns, userClickedPattern));
      // match();
      arrayCompare();
      console.log("userChosenColor is " + userChosenColor);
      console.log(userClickedPattern);
      if(inGame=true && gamePatterns.length>userClickedPattern.length){console.log("gamePatterns.length > userClickedPattern.length. Waiting for it to equal.")}
      else if(inGame===true && gamePatternsCounter===userClickedPatternCounter && roundContinue===true){nextSequence(); userClickedPatternCounter = 0; console.log("userClickedPatternCounter is  " + userClickedPatternCounter);}
      else{userClickedPattern = [];}
      break;


    case "blue":
      blueSound.play();
      animatePress();
      userClickedPattern.push(userChosenColor);
      // match();
      arrayCompare();
      console.log(userChosenColor);
      console.log(userClickedPattern);
      if(inGame=true && gamePatterns.length>userClickedPattern.length){console.log("gamePatterns.length > userClickedPattern.length. Waiting for it to equal.")}
      else if(inGame=true && gamePatternsCounter==userClickedPatternCounter && roundContinue===true){nextSequence(); userClickedPatternCounter = 0; console.log("userClickedPatternCounter is  " + userClickedPatternCounter);}
      else{userClickedPattern = [];}

      break;


    case "green":
      greenSound.play();
      animatePress();
      userClickedPattern.push(userChosenColor);
      // match();
      arrayCompare();
      console.log(userChosenColor);
      console.log(userClickedPattern);
      if(inGame=true && gamePatterns.length>userClickedPattern.length){console.log("gamePatterns.length > userClickedPattern.length. Waiting for it to equal.")}
      else if(inGame=true && gamePatternsCounter==userClickedPatternCounter && roundContinue===true){nextSequence(); userClickedPatternCounter = 0; console.log("userClickedPatternCounter is  " + userClickedPatternCounter);}
      else{userClickedPattern = [];}

      break;


    case "yellow":
      yellowSound.play();
      animatePress();
      userClickedPattern.push(userChosenColor);
      // match();
      arrayCompare();
      console.log(userChosenColor);
      console.log(userClickedPattern);
      if(inGame=true && gamePatterns.length>userClickedPattern.length){console.log("gamePatterns.length > userClickedPattern.length. Waiting for it to equal.")}
      else if(inGame=true && gamePatternsCounter==userClickedPatternCounter && roundContinue===true){nextSequence(); userClickedPatternCounter = 0; console.log("userClickedPatternCounter is  " + userClickedPatternCounter);}
      else{userClickedPattern = [];}

      break;



    default:
      console.log(userChosenColor);

  }
}



// ******************************************************************************************************** Animate Function *******************************************************************
function animatePress() {
  // var currentColor = $(this).attr("id");
  // event.target.classList.add('pressed');
  $(event.target).addClass("pressed");
  $(event.target).animate({
    height: '196px',
    width: '196px',
    opacity: '0.8'
  }, "fast");

  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 500);
  $(event.target).animate({
    height: "200px",
    width: "200px",
    opacity: "1"
  }, 800);
  // console.log("this is "+this);
  // console.log("event target is " + event.target);

}


//********************************************************************************* Random Number and Color Function *************************************

function nextSequence(randomNumber) {

  if (inGame = true){
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChoosenColor = randomNumber;

    randomChoosenColor = buttonColors[randomNumber];
    // animateComputerPress(randomChoosenColor);
    gamePatterns.push(randomChoosenColor);
    gamePatternsCounter++;
    round++;
    // console.log("gamePatternsCounter " + gamePatternsCounter);
    inGame = true;
    userClickedPattern=[];
    // console.log(inGame + " is the Current State of INGAME")
    console.log("nextSequence ACTIVATED");


  // $("#level-title").text("Level " + round + ". Wait for sequence.");



    setTimeout(() => {

      computerCheck();
    }, 2000);

    // console.log(inGame);
    // console.log(round);
    // console.log(userClickedPattern);
    // console.log(gamePatterns);
    setTimeout(()=> {
      // $("#level-title").text("Level " + round + ": Match the Sequence."  );
      $("#level-title").text("Level " + round );
    }, 1500);
  }


};


function computerCheck() {
  // var arrayForEach = gamePatterns.forEach;
  // computerCheckAnimate();
  console.log("Im in the computer check")
  // inGame = true;
  if(inGame = true && gamePatternsCounter==userClickedPatternCounter){
    // setTimeout(() => {
      nextSequence();
    // }, 1500);

    console.log("gamePatternsCounter = userClickedPatternCounter. NEXT SEQUENCE.")

  }
  else if (inGame = true && gamePatternsCounter>userClickedPatternCounter) {
      console.log("Im in the while loop in computer check")

      console.log(gamePatterns + "this is gamePatterns")
      gamePatterns.forEach(function(element,index) {
          // console.log(element + " :element");
          // animatePress(element);
          setTimeout(function(){
            computerCheckAnimate(element);
          }, index * 1000)
      });
  }
}



  function computerCheckAnimate(element) {
    console.log(element + "this is my check Animate element")
    switch (element) {
      case "red":
          redSound.play();
          $("#red").addClass("pressed");
          $("#red").animate({
            height: '196px',
            width: '196px',
            opacity: '0.8'
          }, "fast");


          setTimeout(function() {
            $("#red").removeClass("pressed");
          }, 500);
          $("#red").animate({
            height: "200px",
            width: "200px",
            opacity: "1"
          }, 800);
          console.log("red working");
          console.log("GAME PATTERNS"+gamePatterns);
          if(arrayMatch = true && gamePatternsCounter == userClickedPatternCounter){ console.log("gamePatterns[i] red"); nextSequence();}

          if (arrayMatch = true && gamePatternsCounter>userClickedPatternCounter){

            // console.log("waiting for " + gamePatternsCounter + " to equal " + userClickedPatternCounter);
          }
          break;

      case "blue":
          blueSound.play();
          $("#blue").addClass("pressed");
          $("#blue").animate({
            height: '196px',
            width: '196px',
            opacity: '0.8'
          }, "fast");

          setTimeout(function() {
            $("#blue").removeClass("pressed");
          }, 500);
          $("#blue").animate({
            height: "200px",
            width: "200px",
            opacity: "1"
          }, 800);
          console.log("blue working");
          console.log("GAME PATTERNS "+gamePatterns);
          if(arrayMatch = true && gamePatternsCounter == userClickedPatternCounter){ console.log("gamePatterns[i] blue"); nextSequence();}

          if (arrayMatch = true && gamePatternsCounter>userClickedPatternCounter){

            // console.log("waiting for " + gamePatternsCounter + " to equal " + userClickedPatternCounter);
          }
          break;

      case "green":
          greenSound.play();
          $("#green").addClass("pressed");
          $("#green").animate({
            height: '196px',
            width: '196px',
            opacity: '0.8'
          }, "fast");

          setTimeout(function() {
            $("#green").removeClass("pressed");
          }, 500);
          $("#green").animate({
            height: "200px",
            width: "200px",
            opacity: "1"
          }, 800);
          console.log("green working");
          console.log("GAME PATTERNS "+gamePatterns);
          if(arrayMatch = true && gamePatternsCounter == userClickedPatternCounter){ console.log("gamePatterns[i] green"); nextSequence();}

          if (arrayMatch = true && gamePatternsCounter>userClickedPatternCounter){

            // console.log("waiting for " + gamePatternsCounter + " to equal " + userClickedPatternCounter);
          }
        break;

      case "yellow":
          yellowSound.play();
          $("#yellow").addClass("pressed");
          $("#yellow").animate({
            height: '196px',
            width: '196px',
            opacity: '0.8'
          }, "fast");

          setTimeout(function() {
            $("#yellow").removeClass("pressed");
          }, 500);
          $("#yellow").animate({
            height: "200px",
            width: "200px",
            opacity: "1"
          }, 800);
          console.log("blue working");
          console.log("GAME PATTERNS "+gamePatterns);
          if(arrayMatch = true && gamePatternsCounter == userClickedPatternCounter){ console.log("gamePatterns[i] yellow"); nextSequence();}

          if (arrayMatch = true && gamePatternsCounter>userClickedPatternCounter){

            // console.log("waiting for " + gamePatternsCounter + " to equal " + userClickedPatternCounter);
          }
        break;





      default:

        console.log("GAME PATTERNS"+ gamePatterns + " ComputerCheck switch case");

    }
  }
