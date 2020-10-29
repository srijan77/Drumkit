// alert("hello");
// the below code for mouse click eevent
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
  // alert("i got clicked");
// this refers to the button that gets clicked
console.log(e);
console.log(this);
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});
}




// below code is for kepress event
document.addEventListener("keypress",function(event){
  console.log(event)
  makeSound(event.key);
  buttonAnimation(event.key);
});



// the below function is for making sounds

function makeSound(key){
  switch (key) {
    case "w":var audio =new Audio('sounds/tom-1.mp3');
             audio.play();break;
    case "a":var audio =new Audio('sounds/tom-2.mp3');
             audio.play();break;
    case "s":var audio =new Audio('sounds/tom-3.mp3');
             audio.play();break;
    case "d":var audio =new Audio('sounds/tom-4.mp3');
             audio.play();break;
    case "j":var audio =new Audio('sounds/snare.mp3');
             audio.play();break;
    case "k":var audio =new Audio('sounds/crash.mp3');
             audio.play();break;
    case "l":var audio =new Audio('sounds/kick-bass.mp3');
             audio.play();break;
    default:console.log(innerHTML);

  }
}
// the below function is for buttoon animation
function buttonAnimation(currentKey){
 var activeButton=document.querySelector("."+currentKey);
 //the below line is for  adding   the pressed class to button that is pressed
 activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
}
