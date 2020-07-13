

let imageArr = ['Logo.svg','Logo2.svg','Logo3.svg','Logo4.svg','Logo5.svg','Logo6.svg','Logo7.svg','Logo8.svg','Logo9.svg','Logo10.svg'];
// images[0] = "assets/Logo.svg";
// images[1] = "assets/Logo2.svg";
// images[2] = "assets/Logo7.svg";
// images[3] = "assets/Logo3.svg";
// images[4] = "assets/Logo2.svg";
// images[5] = "assets/Logo6.svg";
// images[6] = "assets/Logo4.svg";
// images[7] = "assets/Logo8.svg";
// images[8] = "assets/Logo9.svg";
// images[9] = "assets/Logo10.svg";

let basePath = "assets/";

function randomImage() {
    for (let i = 0; i < 1; i++) {
        let rand = imageArr[Math.floor(Math.random() * imageArr.length)];
        let image = new Image();
        image.src = basePath + rand;
        document.getElementById('logo').src = image.src;
    }
}