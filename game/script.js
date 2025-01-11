let score = 0;
const word = "nymph";

function checkLetter(prediction) {
  console.log("Your prediction is received. Please wait for the result.");
  let predictionInput = document.getElementById("prediction-input");
  let prediction = predictionInput.value.toLowerCase(); 

  if (prediction === "word") {
    console.log("Congratulations! You guessed the whole word!");
    score = score + 100;
  } else if (word.includes(prediction) && prediction.length === 1) {
    console.log("You guessed the right letter!");
    openLetter(prediction);
    score = score + 20;
  } else {
    console.log("You guessed the wrong letter.");
  }

  document.getElementById("score").textContent = score;
}

function openLetter(letter){
    console.log("You opened a letter " + letter + ".");
    document.getElementById("stone").style.display = 'none';
    if (letter === "n") {
        document.getElementById("letter-n").style.display = 'block';
    }
    if (letter === "y") {
        document.getElementById("letter-y").style.display = 'block';
    }
    if (letter === "m") {
        document.getElementById("letter-m").style.display = 'block';
    }
    if (letter === "p") {
        document.getElementById("letter-p").style.display = 'block';
    }
    if (letter === "h") {
        document.getElementById("letter-h").style.display = 'block';
    }
}