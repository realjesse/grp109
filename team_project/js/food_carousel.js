// Create food_carousel array
image_source_array = ["images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg", "images/kelly-visel-MIMgqOQLnOc-unsplash.jpg", 
    "images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg", "images/mahmoud-fawzy-MgvByrhYz24-unsplash.jpg", 
    "images/mahmoud-fawzy-YnVaHqgpPLA-unsplash.jpg"
]

// Get image element, left and right element
const food_carousel_image = document.querySelector(".food_carousel img");
const left_carousel_div = document.querySelector(".food_carousel .left");
const right_carousel_div = document.querySelector(".food_carousel .right");

// Create index for images, and interval variable
let index = 0;
let interval;

// Event listeners for left and right divs
// They will each loop through image array,
// then play the sound effect.
left_carousel_div.addEventListener("click", () => {
    moveCarouselBackward();
    playSoundEffect("sound/pop-39222.mp3");
});
right_carousel_div.addEventListener("click", () => {
    moveCarouselForward();
    playSoundEffect("sound/bubble-pop-293342.mp3");
});

// Upon loading webpage, updateImage(), and set interval for automatic scrolling
updateImage();
resetInterval();

// Updates the image on the DOM
function updateImage() {
    food_carousel_image.src = image_source_array[index];
}

// Moves the index forward by one, or loops
function moveCarouselForward() {
    // Check to see if at end of index
    if (index === image_source_array.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    resetInterval();
    updateImage();
}

// Moves the index back by one, or loops
function moveCarouselBackward() {
    if (index === 0) {
        index = image_source_array.length - 1;
    }
    else {
        index--;
    }
    resetInterval();
    updateImage();
}

// Resets interval time to 0
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(moveCarouselForward, 3000);
}

// Plays the given sound effect
function playSoundEffect(sound_file_path) {
    const sound = new Audio(sound_file_path);
    sound.play();
}