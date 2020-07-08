function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("logo").src = images[x];
}

// function displayPreviousImage() {
//     x = (x <= 0) ? images.length - 1 : x - 1;
//     document.getElementById("logo").src = images[x];
// }

function startTimer() {
    setInterval(displayNextImage, 5000);
}

let images = [], x = -1;
images[0] = "assets/Logo2.svg";
images[1] = "assets/Logo3.svg";
images[2] = "assets/Logo4.svg";
images[3] = "assets/Logo5.svg";
images[4] = "assets/Logo.svg";
images[5] = "assets/Logo6.svg";

