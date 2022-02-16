function changeMode(){
    changeClasses(); //chama função muda classes
    changeText(); //chama funçao muda texto
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}//adiciona ou retira a classe dark mode

function changeText(){
    const lightMode = "Light mode"
    const darkMode = "Dark mode"

    if (button.classList.contains(darkModeClass)){ 
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + "ON";
        return;
    }//checa se existe a classe dark mode

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + "ON";
}

const darkModeClass = 'dark-mode'; //define constante para a classe dark mode
const button = document.getElementById('mode-selector'); //seleciona o botao
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0]; //index 0 para pegar o primeiro elemento

button.addEventListener('click', changeMode);



