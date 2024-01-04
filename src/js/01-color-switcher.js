const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  } 
  stopButton.disabled = true;
  let interval = null;

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    
    interval = setInterval(() => {
        
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}); 



stopButton.addEventListener('click', () => {
    clearInterval(interval);
    
    stopButton.disabled = true;
    startButton.disabled = false;
});
