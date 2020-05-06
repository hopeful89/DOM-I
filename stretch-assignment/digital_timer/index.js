const timer = document.querySelectorAll('.digit');
const timerEnd = document.querySelector('.digits');
let startBtn = appendBtn('button', 'Start', 'setInterval(myTimer(), 10)');
// let resetBtn = appendBtn('button', 'Reset', 'resetTimer()');


function appendBtn(type, content, func){
    let newBtn = document.createElement(`${type}`); //grab given type ex. nav/main-content
    newBtn.textContent = `${content}`; //set text for new content
    newBtn.style.display = 'block';
    newBtn.style.width = '100%';
    newBtn.setAttribute("onClick", func)
    timerEnd.appendChild(newBtn); // add to start of the nav
    return newBtn;
  }

function timerLogic(){
    startBtn.style.display = 'none';
    timerEnd.classList.remove('redDigit')
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
        startBtn.style.display = 'block';
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
    clearInterval(myTimer);
    clearInterval(myTimer());
    timerEnd.classList.remove('redDigit')
}


// <button onclick="myFunction()">Click me</button>
// setInterval(myTimer(), 10);
