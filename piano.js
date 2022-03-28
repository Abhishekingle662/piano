var pianoNotes=document.querySelectorAll(".notes").length;

for(var i=0; i<pianoNotes; i++){
    document.querySelectorAll(".note")[i].addEventListener("click", function(){

        var buttonInnerHTMl= this.innerHTML;
        makeSound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl);
        });
}


document.addEventListener("keypress", function(event){
makeSound(event.key)
buttonAnimation(event.key);
});

function makeSound(key){

    switch(key){
        case "a":
            var a=new Audio("sounds/a.mp3");
            a.play();
            break;

            case "s":
            var b=new Audio("sounds/b.mp3");
            b.play();
            break;

            case "d":
            var c=new Audio("sounds/c.mp3");
            c.play();
            break;

            case "f":
            var d=new Audio("sounds/d.mp3");
            d.play();
            break;

            case "g":
            var g=new Audio("sounds/e.mp3");
            g.play();
            break;

            case "h":
            var q=new Audio("sounds/f.mp3");
            q.play();
            break;

            case "j":
            var r=new Audio("sounds/g.mp3");
            r.play();
            break;

            case "k":
            var x=new Audio("sounds/h.mp3");
            x.play();
            break;

            default:console.log(key);

    }
}


function buttonAnimation(currentKey){
    var activeButtton=document.querySelector("." + currentKey);

activeButtton.classList.add("pressed");

setTimeout(function(){
    activeButtton.classList.remove("pressed");
}, 100);
}