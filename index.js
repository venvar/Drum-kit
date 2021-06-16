var numberofbuttons=document.querySelectorAll(".drum").length;
// button press
for(var i=0;i<numberofbuttons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
});
}

//keyboard press
document.addEventListener("keypress",function(){
   makeSound(event.key);
   buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break; 
        case "a":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "s":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;    
        case "d":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break; 
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break; 
        
        default:
            console.log();
    }    

}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}
