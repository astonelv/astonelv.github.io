const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span");


function randomWord () {
    //getting random word from array
    let ranObj = wordList [Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word; //getting word of random object
    console.log(ranObj);

    hint.innerText = ranObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++){
        html += `<input type = "text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

resetBtn.addEventListener("click", randomWord);