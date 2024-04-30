let intIndex = 0;

function showImage() {
    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
    
    for (let n = 0; n < images.length; n++) {
        images[n].style.display = "none";
        dots[n].classList.remove("active");
    }
    if (intIndex >= images.length) {
        intIndex = 0;
    }
    
    images[intIndex].style.display = "block";
    dots[intIndex].classList.add("active");
    intIndex++;
}

window.onload = function () {
    setInterval(showImage, 5000);
    showImage(); // Call showImage initially
};
