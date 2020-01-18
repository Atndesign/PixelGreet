var greetImg = document.getElementById("greetimg");
var wrapper = document.getElementById("wrapper");
var viewers = [];

if(getUrlVars()["firstgif"]){
    greetImg.src = getUrlVars()["firstgif"]
}
else{
    greetImg.src = "./img/Stitchv2Sleep.gif"
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if(command === "hi" ) {
        if(viewers.length == 0){
            greeting(user)
        }
        else{
            viewers.forEach(viewer => {
                if(user == viewer){
                    return
                }
                else{
                    greeting(user)
                }
            })
        }
       
    }
  }
ComfyJS.Init( getUrlVars()["channel"] );


function addRemoveClass(){
    span.classList.remove("greetingBubble", "fadeIn");
    span.classList.remove("greetingBubble", "fadeIn");
}

function greeting(user){
    var span = document.getElementById("span")
    span.classList.add("fadeIn");
    span.textContent = "Hello " + user + " welcome to the stream !";
    
    if(getUrlVars()["scndgif"] && getUrlVars()["firstgif"])
    {
        greet(getUrlVars()["scndgif"],getUrlVars()["firstgif"],span)
    }
    else if( getUrlVars()["firstgif"] == false && getUrlVars()["firstgif"]){
        greet(getUrlVars()["firstgif"],getUrlVars()["firstgif"],span)
    }
    else if(getUrlVars()["firstgif"]){
        greet(getUrlVars()["firstgif"],getUrlVars()["firstgif"],span)
    }
    else
    {
        greet("./img/stitchv2.gif","./img/stitchv2Sleep.gif",span)
    }
    viewers.push(user)
}
function greet(frst,scnd){
    greetImg.src = frst
    setTimeout(function(){
        greetImg.src = scnd
        span.classList.remove("fadeIn");
        span.classList.add("fadeOut");
    },2000)
}