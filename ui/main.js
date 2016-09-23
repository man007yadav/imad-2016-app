console.log('Loaded!');

//change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = "We are akatsuki";

var img = document.getElementById('img');
var marginleft=0;

function moveRight(){
   marginleft = marginleft + 1;
   img.style.marginLeft = marginleft + "px"; 
    
}

img.onclick = function(){
    
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft= '100px';
}