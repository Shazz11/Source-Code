const images = [
    'Img/ironman.jpg',
    'Img/spider-man.jpg',
    'Img/iron-man.jpg',
    'Img/superheroes.jpg'
];

let currentIndex = 0;
let btn = document.getElementById("btn");
let img = document.getElementById("image");

function changeImage() {
    // Increment currentIndex and wrap around using modulus operator
    currentIndex = (currentIndex + 1) % images.length;
    // Change the image source to the new image
    img.src = images[currentIndex];
}

btn.addEventListener('click', changeImage);


// SECTION SECOND

const slideImages = [
    'Img/ironman.jpg',
    'Img/spider-man.jpg',
    'Img/superheroes.jpg'
];

let index = 0; 
const imageGallery = document.querySelector(".image-gallery");
const nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");

function displayImage(){
    imageGallery.innerHTML = '';
    let slideImg = document.createElement("img");
    slideImg.className = "slideImages";
    slideImg.src = slideImages[index];
    imageGallery.appendChild(slideImg);
};


nextBtn.addEventListener("click", ()=>{
  index = ( index + 1 ) % slideImages.length;
  displayImage(index)
});

previousBtn.addEventListener("click", ()=>{
    index = (index - 1 + slideImages.length) % slideImages.length;
    displayImage(index)
})

displayImage(index)











