for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
  makesound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
})
}


document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});






function makesound(key){
switch (key) {
  case "W":
  case "w": var audio1= new Audio("sounds/tom-1.mp3");
           audio1.play();
           break;
case "A":
case "a": var audio2= new Audio("sounds/tom-2.mp3");
                    audio2.play();
                    break;
  case "S":
  case "s": var audio3= new Audio("sounds/tom-3.mp3");
                             audio3.play();
                             break;
case "D":
 case "d": var audio4= new Audio("sounds/tom-4.mp3");
              audio4.play();
                break;
  case "J":
  case "j": var audio5= new Audio("sounds/snare.mp3");
           audio5.play();
             break;
  case "K":
  case "k": var audio6= new Audio("sounds/crash.mp3");
          audio6.play();
          break;
    case "L":
    case "l": var audio7= new Audio("sounds/kick-bass.mp3");
                   audio7.play();
                   break;
                   default: console.log(key);
}
}
function buttonAnimation(currentbutton) {
  document.querySelector("." + currentbutton).classList.add("pressed");
  setTimeout(function(){
      document.querySelector("." + currentbutton).classList.remove("pressed");
  },100);
}
