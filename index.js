const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span");
guessRemaining = document.querySelector(".guess-remaining span")
wrong = document.querySelector(".wrong span")
typingInput = document.querySelector(".typing-input")
result = document.querySelector(".result")

let word, maxGuesses, corrects = [], incorrects = [];

function randomWord () {
    //getting random word from array
    let ranObj = wordList [Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; //getting word of random object
    maxGuesses = 7; corrects = [], incorrects = [];
    console.log(ranObj);

    hint.innerText = ranObj.hint;
    guessRemaining.innerText = maxGuesses;


    let html = "";
    for (let i = 0; i < word.length; i++){
        html += `<input type = "text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

function check(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if(word.includes(key)) {
            for(let i = 0; i < word.length; i++){
                if(word[i] === key){
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrects.push(` ${key}`);
        }
        guessRemaining.innerText = maxGuesses;
        wrong.innerText = incorrects;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(corrects.length === word.length) {
            result.innerText = 'Congrats!';
            randomWord(); // resets the game
        } else if(maxGuesses < 1) {
            result.innerText = 'Close! Try Again!';
            randomWord();
            for(let i = 0; i < word.length; i++) {
                //show letters in the input
                inputs.querySelector("input")[i].value = word[i];
            }
        }
    });
}




resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", check);
document.addEventListener("keydown", () => typingInput.focus());

