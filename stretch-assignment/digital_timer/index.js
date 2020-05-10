const timer = document.querySelectorAll('.digit');
const timerEnd = document.querySelector('.digits');
let interval;

function appendBtn(type, content){
    let newBtn = document.createElement(`${type}`);
    newBtn.textContent = `${content}`; 
    newBtn.style.display = 'block';
    newBtn.style.width = '100%';
    timerEnd.appendChild(newBtn); 
    return newBtn;
}

const startBtn = appendBtn('button', 'Start');
const resetBtn = appendBtn('button', 'Reset');
startBtn.setAttribute('onclick', `interval = setInterval(myTimer(), 10)`);
resetBtn.setAttribute('onclick', 'resetTimer()')

function resetVar(){
    timer[4].textContent = 0;
    timer[3].textContent = 0;
    timer[1].textContent = 0;
    timer[0].textContent = 0;
}

function myTimer(){
    resetVar();
    return timerLogic;
}


function timerLogic(){
    startBtn.disabled = true;
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


function resetTimer() {
    resetVar();
    clearInterval(interval);
    startBtn.disabled = false;
    timerEnd.classList.remove('redDigit')
}


