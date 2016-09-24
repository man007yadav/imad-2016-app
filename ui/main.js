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

//Counter code

var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response in a variable
    request.onreadystatechange = function(){
        if(request.readystate == XMLHttpRequest.DONE){
            //Take some action
            if(request.state === 200){
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    //counter = counter + 1 ;
                    span.textContent = counter.toString();
            }
        }
        //Not done yet
    };
    
    //Make the request
    request.open('GET',"http://man007yadav.imad.hasura-app.io/counter",true);
    request.send(null);
    
};