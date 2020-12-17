


// ANIMATION PUITS

var player;
var timestamp;

function preloadImage (done, i) {
    if (!i) { i = 1; }
    
    
    var img = new Image();
    img.onloadend = function () {
        if (this.height == 0) { return done(); }
        preloadImage(done, i + 1);
    };
    img.src = "image/well/pick/" + i + ".png";
}


function start(){
    clearInterval(player);
    document.getElementById("well").src = "/image/well/pick/0.png";
    player = setInterval(function(){ next(); }, 40);
}

function next(){
    
    
        
        var fullPath=document.getElementById("well").src;
        var filename = fullPath.split("/").pop();
        var n=parseInt(filename, 10) + 1;
        if (n < 39) {
            document.getElementById("well").src = "image/well/pick/" + n + ".png";
            if (document.getElementById("well").height == 0) { clearInterval(player); };
        }
        if (n == 3) { timestamp = new Date().getTime(); };
    
    
}


// usage
preloadImage(function () { console.log('images loaded'); });





var player;
var timestamp;

function preloadImage2 (done, i) {
    if (!i) { i = 1; }
    
    
    var img = new Image();
    img.onloadend = function () {
        if (this.height == 0) { return done(); }
        preloadImage2(done, i + 1);
    };
    img.src = "image/well/put/" + i + ".png";
}


function start2(){
    clearInterval(player);
    mybutton = document.getElementById("myBtn");
    document.documentElement.scrollTop = 50;
    document.getElementById("well").src = "/image/well/pick/0.png";
    player = setInterval(function(){ next2(); }, 40);
    document.getElementById('idea').value = ''
    
}

function next2(){
    
    
        
        var fullPath=document.getElementById("well").src;
        var filename = fullPath.split("/").pop();
        var n=parseInt(filename, 10) + 1;
        if (n < 33) {
            document.getElementById("well").src = "image/well/put/" + n + ".png";
            if (document.getElementById("well").height == 0) { clearInterval(player); };
        }
        if (n == 3) { timestamp = new Date().getTime(); };
    
    
}


// usage
preloadImage(function () { console.log('images loaded'); });






// ANIMATION TITRE & TEXTE PRESENTATION

