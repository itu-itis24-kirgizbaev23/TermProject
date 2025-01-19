let score = 0;
const word = "nymph";
let number = 3;

function checkLetter() {
    console.log("Your prediction is received. Please wait for the result.");
    let predictionInput = document.getElementById("prediction-input");
    let prediction = predictionInput.value.toLowerCase(); 

    if (prediction === word) {
        alert("Congratulations! You guessed the whole word!");
        score += 100;
        revealAllLetters();
        gameWon();
    } else if (word.includes(prediction) && prediction.length === 1) {
        alert("You guessed the right letter!");
        openLetter(prediction);
        score += 20;
        if (score == 100){
            gameWon();
        }
    } else {
        alert("You guessed the wrong letter.");
        wrongAnswer();
    }

    document.getElementById("score").textContent = score;
    predictionInput.value = "";
}

function openLetter(letter) {
    if (document.getElementById(`letter-${letter}`).style.display === 'block') {
        score -= 20;
        return
    }
    if (score<100){
        alert("You opened a letter " + letter + ".");
    }
    document.getElementById(`stone-${letter}`).style.display = 'none';
    document.getElementById(`letter-${letter}`).style.display = 'block';
}

function revealAllLetters() {
    for (let letter of word) {
        openLetter(letter);
    }
}

function resetGame() {
    alert("Game has been reset.");
    document.getElementById('gameOverOverlay').style.display = 'none';
    document.getElementById('gameWonOverlay').style.display = 'none';
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("prediction-input").value = "";

    for (let letter of word) {
        document.getElementById(`stone-${letter}`).style.display = 'block';
        document.getElementById(`letter-${letter}`).style.display = 'none';
    }
}

function wrongAnswer(){
    document.getElementById(`life${number}`).style.display = 'none';
    number--;
    if(number === 0){
        gameOver();
    }
}

function gameOver(){
    document.getElementById('gameOverOverlay').style.display = 'flex';
}

function gameWon(){
    document.getElementById('gameWonOverlay').style.display = 'flex';
}