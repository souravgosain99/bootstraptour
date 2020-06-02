console.log("working")

var devices_button = document.getElementById("6940");
devices_button.addEventListener("click", function(){
    console.log("devices");
    window.open("deviceinfo.html");
    tour.next();

});
var home =document.getElementById(Home);
home.addEventListener("click",function(){

    window.open("home.html");
})