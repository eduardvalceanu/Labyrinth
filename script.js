function currentRoom(){
  const button = document.getElementById("room");
  const buttonPressed = (e) => {
    e.target.classList.toggle("current");
  }
  button.addEventListener("click", buttonPressed);
}