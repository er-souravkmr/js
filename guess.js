
let guessedSlot =[];
let guessedNumber;
let nn=0;


let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); // for testing


const guessForm = document.getElementById("guess");
let conc = document.querySelector("#conclusion");
const left = document.getElementById("left");
const prev = document.getElementById("prev");
const input = document.querySelector('#num')



    guessForm.addEventListener('submit' ,(e)=>{
        e.preventDefault();

        guessedNumber = parseInt(input.value); 

        validateGuess(guessedNumber);
        checkGuess(guessedNumber);

    })

function validateGuess(n){
    if(n=='' || n<0 ||n>100 || isNaN(n)){
        displayMessage('Give appropriate number')
    }else{
        guessedSlot.push(n)
        if(nn==11){
            endgame();
        }
    }
}

function checkGuess(g){
    if(g===randomNumber){
        displayMessage('Perfectly Guessed! Whatta Luck');
        setTimeout(()=>{endgame()},1000)
    }else if(g<randomNumber){
        displayMessage('Number is too low')
        diplayGuess(g);
        guessedSlot.push(g)
    }else if(g>randomNumber){
        displayMessage('number is higher')
        diplayGuess(g);
        guessedSlot.push(g)
    }
}

function displayMessage(dm){
    
        conc.innerHTML = dm
    
}

function diplayGuess(dg){
    input.value = ''
    prev.innerHTML += `${dg}, `

    left.innerHTML = 10-nn
    nn++;

    if(nn==11){
        endgame();
    }
}

function endgame(){
    displayMessage(`Game Over | Number was : ${randomNumber}`)
    input.setAttribute('disabled','');

}
