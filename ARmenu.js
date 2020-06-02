console.log("working")

var AR_button = document.getElementById("ARproj");
AR_button.addEventListener("click", function(){
    console.log("AR pressed");
    window.open("ARPlace.html");

});

var home =document.getElementById(Home);
home.addEventListener("click",function(){

    window.open("home.html");
})