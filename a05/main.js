var imageNum = 1;
var imageDiv = document.getElementById("currentImage");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

function updateImage() {
    imageDiv.style.backgroundImage = "url(images/image" + imageNum + ".png)";
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

function prevImage() {
    imageNum--;
    if (imageNum === 0) {
        imageNum = 5;
    }
    updateImage();
}

function nextImage() {
    imageNum++;
    if (imageNum === 6) {
        imageNum = 1;
    }
    updateImage();
}