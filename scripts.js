function bg(){
    var headerImgOptions = Array("url(/img/headers/1.jpg)", "url(/img/headers/2.jpg)");
    var headerImgChoice = headerImgOptions[Math.floor(Math.random() * headerImgOptions.length)];
    document.getElementById("topPic").style.backgroundImage = headerImgChoice;
}

bg()