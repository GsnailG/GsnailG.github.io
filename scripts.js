function bg(){
    var headerImgOptions = Array("url(/img/headers/1.jpg)", "url(/img/headers/2.jpg)", "url(/img/headers/3.jpg)", "url(/img/headers/4.jpg)", "url(/img/headers/5.jpg)");
    var headerImgChoice = headerImgOptions[Math.floor(Math.random() * headerImgOptions.length)];
    document.getElementById("topPic").style.backgroundImage = headerImgChoice;
    
}

bg()
setInterval(bg, 30000)