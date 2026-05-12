const carouselImages = ["bilder/OIP.jpg", "bilder/Colosseo.jpg", "bilder/ladda ned.jpg"];
let carouselIndex = 0;
const carouselImage = document.getElementById("carouselImage");

document.getElementById("prevBtn").addEventListener("click", () => {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    carouselImage.src = carouselImages[carouselIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    carouselImage.src = carouselImages[carouselIndex];
});