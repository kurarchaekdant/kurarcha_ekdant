// Welcome message
window.onload = function(){
    alert("🙏 Welcome to Kurarcha Ekdant Mandal 🙏");
}


// Countdown Timer

let targetDate = new Date("September 7, 2026 10:00:00").getTime();

let x = setInterval(function(){

    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

},1000);