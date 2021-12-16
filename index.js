document.getElementsByTagName("h1")[0].innerHTML = "Refresh Me";
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");

// if browser refresh
if (performance.navigation.type == 1) {
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var images1 = "images/dice"+randomNumber1+".png";
    var dice1 = document.getElementsByClassName("img1")[0];
    dice1.setAttribute("src",images1);

    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var images2 = "images/dice"+randomNumber2+".png";
    var dice2 = document.getElementsByClassName("img2")[0];
    dice2.setAttribute("src",images2);

    if(randomNumber1 > randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Win!";
    }if(randomNumber1 == randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
    }else {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Win!";
    }
}
