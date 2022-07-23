var random_num = Math.random()*6;
var random1 = Math.floor(random_num)+1;
var random_num_2 = Math.random()*6;
var random2 = Math.floor(random_num_2)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");

if(random1 > random2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
} else if(random1 < random2){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} else {
    document.querySelector("h1").textContent = "It's a Draw!";
}