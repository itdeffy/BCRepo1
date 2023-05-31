document.getElementById("clear").addEventListener("click", function(event) {
    var dots = document.getElementsByClassName("dot");
    console.log(dots)
    //this is like an arraylist in java not like a java array. I didn't realize the array would shrink so a forward loop doesn't work well
    for (let i = (dots.length - 1); i >= 0; i--) {
        document.body.removeChild(dots[i]);
    }
    
    event.stopPropagation();
});

document.body.addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = event.pageX - 4 + "px";
    dot.style.top = event.pageY - 4 + "px";
    document.body.appendChild(dot);
    event.stopPropagation();
});