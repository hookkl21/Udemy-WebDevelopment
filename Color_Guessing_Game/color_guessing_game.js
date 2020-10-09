var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares = 3
    // picking color for easy mode 
    colors = generateRandomColors(numSquares);
    //pick the random color
    pickedColor = pickColor();
    //change colorDisplay to matched color
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //pick the random color
    pickedColor = pickColor();
    //change colorDisplay to matched color
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    }
});

reset.addEventListener("click", function(){
    //general all 6 new colors
    colors = generateRandomColors(numSquares);
    //pick the random color
    pickedColor = pickColor();
    //change colorDisplay to matched color
    colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
    //add initial color
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of clicked one then compared to pickedColor
        // alert(this.style.backgroundColor);
         var clickedColor = this.style.backgroundColor;

         if(clickedColor === pickedColor)
         {
             messageDisplay.textContent = "Correct!"
             changeColor(clickedColor);
             h1.style.backgroundColor = clickedColor;
             reset.textContent = "Play Again?";
         }else{

             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again"
         }
    });
}
function changeColor(color){
    //loop through all squares
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){

    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
} 

function generateRandomColors(num){
    //make array
    var arr = [];
    //add random color to array using push
    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    } 
    //return
    return arr;

}

function randomColor (){
    //create random red rgb(255,0,0)
    var r = Math.floor(Math.random()*256);
    //create random green rgb(0,255,0)
    var g = Math.floor(Math.random()*256);
    //create random blue rgb(0,0,255)
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")"

}

