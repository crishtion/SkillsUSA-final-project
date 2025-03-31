let toggle = document.getElementById("dark-mode");
let buttonTxt = document.getElementById("buttonText");
let body = document.body;
let isOn = false;

toggle.addEventListener("click", ()=>{
  isOn = !isOn;

  if(isOn){
    body.classList.add("darkmode")
  } else {
    body.classList.remove("darkmode")
  }
})