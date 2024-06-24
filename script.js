let timer;
let timeLeft;
let timerType = 'pomodoro';
const times = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

document
  .getElementById('pomodoro')
  .addEventListener('click', () => setTimer('pomodoro'));
document
  .getElementById('shortBreak')
  .addEventListener('click', () => setTimer('shortBreak'));
document
  .getElementById('longBreak')
  .addEventListener('click', () => setTimer('longBreak'));
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);

function setTimer(type) {
  timerType = type;
  timeLeft = times[type];
  updateDisplay();
}

function startTimer() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
    } else {
      updateDisplay();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('time').textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initialize with default timer
setTimer('pomodoro');
