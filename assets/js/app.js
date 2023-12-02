const render = (father, component) => {
  father.innerHtml = "";
  father.appendChild(component);

};
const categorias = document.querySelectorAll('.categoria');

categorias.forEach(categoria => {
  
  console.log(categoria.classList[1])

  categoria.addEventListener("click",(e) => {

    const valor = categoria.querySelector('.valor')
    const subcats = categoria.querySelectorAll('.sub-categoria')
    valor.innerHTML = '';
    let sum = 0;
    subcats.forEach(subCategoria => {
        if(subCategoria.querySelector('input[name="opcao1"]:checked')) {
          sum += parseInt(subCategoria.querySelector('input[name="opcao1"]:checked').value, 10) - 1
          
      }
      console.log(sum)
      


    })
    valor.innerHTML = sum
    let sumAll = 0
    document.querySelectorAll('.categoria').forEach(categoria => {

           sumAll += parseInt(categoria.querySelector('.valor').innerHTML, 10);
           console.log( parseInt(categoria.querySelector('.valor').innerHTML, 10))
           
  
  
    })
    document.querySelector('.atual').innerHTML = "Atual: "+sumAll+ " ("+(sumAll/20)*100+ "%)"
  })

});

canva = document.querySelector('.canva');

var timeLeft = 420; // Time left in seconds (5 min)
var timerDisplay = document.getElementById('timer'); // Get the timer div
var pauseBtn = document.getElementById('pauseBtn'); // Get the pause button
var restartBtn = document.getElementById('restartBtn'); // Get the restart button
var timerInterval; // Store the interval object

function startTimer() {
 timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
    }
    updateDisplay();
 }, 1000);
}

function pauseTimer() {
 clearInterval(timerInterval);
}

function restartTimer() {
 timeLeft = 420;
 updateDisplay();
}

function updateDisplay() {
 var minutes = Math.floor(timeLeft / 60);
 var seconds = timeLeft % 60;

 if (seconds < 10) {
    seconds = '0' + seconds;
 }
 if (minutes < 10) {
    minutes = '0' + minutes;
 }

 timerDisplay.textContent = minutes + ':' + seconds;
}

pauseBtn.addEventListener('click', function () {
 if (pauseBtn.textContent === 'Pause') {
      pauseTimer();
      pauseBtn.textContent = 'Start';
 } else {
      pauseBtn.textContent = 'Pause';
      startTimer();
 }
});

restartBtn.addEventListener('click', function () {
 pauseTimer();
 pauseBtn.textContent = 'Start';
 
 restartTimer();

});

updateDisplay();