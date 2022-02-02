var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function aumentar(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style = "color:#0000FF"
    }
}

function diminuir(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0 ){
        currentNumberWrapper.style = "color:#FF0000"
    }
}

