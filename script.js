var button = document.getElementById("submit-button");
button.addEventListener('click',welcomeMessage);
button.addEventListener('mouseenter',changeBackground);
button.addEventListener('mouseleave',changeBackgroundToDefault);



function welcomeMessage(){
  var fullName = document.getElementById("fullName").value;
  alert(`Hi ${fullName}, welcome to my website`)
}

function changeBackground(){
  button.style.backgroundColor = "green"
}

function changeBackgroundToDefault(){
  button.style.backgroundColor = null;
}