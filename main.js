console.log("working")

var AR_button = document.getElementById("AR");
AR_button.addEventListener("click", function(){
    console.log("AR pressed");
    window.open("ARmenu.html");

});

var d_button = document.getElementById("devices");
d_button.addEventListener("click", function(){
    tour.next();
    console.log("ARP");
    window.open("devices.html");

});
var d_button = document.getElementById("scan");
d_button.addEventListener("click", function(){
    tour.next();
    console.log("ARP");
    //window.open("devices.html");

});