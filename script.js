const BUTTONS = document.getElementsByTagName('button');
function getButtonId() {
  let currentButton = null;
  for (let i = 1; i < (BUTTONS.length+1); i++) {
    BUTTONS[i].addEventListener('click', function() {
      if (currentButton !== null) {
        currentButton.classList.remove('current');
        currentButton.classList.add('visited-room');
        currentButton.textContent = '';
      }   
      this.classList.add('current');
      this.textContent = 'PLAYER';
      currentButton = this;
      document.getElementById('RESET').addEventListener('click', function(){
        currentButton = null;
      })
    });
  }
}

function reset() {
  const resetButton = document.getElementById('RESET');
  resetButton.addEventListener('click', function(){
    let currentButton = null;
  for (let i = 1; i < (BUTTONS.length+1); i++) {
    BUTTONS[i].classList.remove('current');
    BUTTONS[i].classList.remove('visited-room');
    BUTTONS[i].textContent = '';
  }
  })
}




