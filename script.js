let randomColor = Math.floor(Math.random()*16777215).toString(16);
const changeColorBtn = document.querySelector('button');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    body.style.backgroundColor = '#' + randomColor;
}