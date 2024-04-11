// TEXTO QUE DIGITA SOZINHO - DESENVOLVIDO PELO TIME DE SDR
const arrayText = [
    "Desenvolvido pelo time de SDR",
    "Com apoio do time Técnico e Comercial"
]

const writeTime = 80;
const removeTime = 1000;

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text")

function writeText(){
    if(indexChar <= arrayText[indexSentence].length){
        element.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar++
        setTimeout(writeText, writeTime);
    } else {
        setTimeout(removeText, removeTime);
    }
}

function removeText(){
    if(indexChar >= 0){
        element.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar--;
        setTimeout(removeText, writeTime);
    } else{
        indexSentence++;
        if(indexSentence >= arrayText.length){
            indexSentence = 0;
        }
        setTimeout(writeText, removeTime);
    }
}

writeText();
