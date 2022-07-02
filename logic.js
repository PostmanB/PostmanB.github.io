function myFunction() {

    var sound = new Audio('Szippantcsáki.wav');
    console.log("Szippantcsáki");
    const header = document.getElementById("H1");
    header.innerHTML = "Szippantcsáki";
    header.style.color = "green";
    header.style.fontSize = "50px";
    sound.currentTime = 0;
    sound.play();
}