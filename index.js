const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span");
guessRemaining = document.querySelector(".guess-remaining span")
wrong = document.querySelector(".wrong span")
typingInput = document.querySelector(".typing-input")


let word, maxGuesses, incorrects = [];

function randomWord () {
    //getting random word from array
    let ranObj = wordList [Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; //getting word of random object
    maxGuesses = 7;
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
}
    


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", check);
document.addEventListener("keydown", () => typingInput.focus());

