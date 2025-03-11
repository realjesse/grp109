// Create food_carousel array
image_source_array = ["images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg", "images/kelly-visel-MIMgqOQLnOc-unsplash.jpg", 
    "images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg", "images/mahmoud-fawzy-MgvByrhYz24-unsplash.jpg", 
    "images/mahmoud-fawzy-YnVaHqgpPLA-unsplash.jpg"
]

// Get image element, left and right element
const food_carousel_image = document.querySelector(".food_carousel img");
const left_carousel_div = document.querySelector(".food_carousel .left");
const right_carousel_div = document.querySelector(".food_carousel .right");

// Create index for images
let index = 0;

function updateImage() {
    food_carousel_image.src = image_source_array[index];
}

function moveCarouselForward() {
    index++;
    updateImage();
}

function moveCarouselBackward() {
    index--;
    updateImage();
}