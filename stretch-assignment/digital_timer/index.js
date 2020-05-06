const timer = document.querySelectorAll('.digit');
const timerEnd = document.querySelector('.digits');
let startBtn = appendBtn('button', 'Start');
let resetBtn = appendBtn('button', 'Reset');


function appendBtn(type, content){
    let newBtn = document.createElement(`${type}`); 
    newBtn.textContent = `${content}`; 
    newBtn.style.display = 'block';
    newBtn.style.width = '100%';
    timerEnd.appendChild(newBtn);
    return newBtn
  }

function timerLogic(){
    if(timer[0].textContent < 1){
        if(timer[4].textContent < 10 || timer[4].textContent === '-' ){
            timer[4].textContent++;
            if(timer[4].textContent === '10'){
                timer[4].textContent = 0;
                timer[3].textContent++;
                if(timer[3].textContent === '10'){
                    timer[1].textContent++;
                    timer[3].textContent = 0;
                    if(timer[1].textContent === '10'){
                        timer[0].textContent++;
                        timer[1].textContent = 0;
                    }
                }
            }
        }
    }else {
        timerEnd.classList.add('redDigit');
    } 
}

function myTimer(){
    timer[4].textContent = 0;
    timer[3].textContent = 0;
    timer[1].textContent = 0;
    timer[0].textContent = 0;
    return timerLogic;
}

function resetTimer() {
    clearInterval(startBtn);
    timerEnd.classList.remove('redDigit')
}


// <button onclick="myFunction()">Click me</button>
// setInterval(myTimer(), 10);
