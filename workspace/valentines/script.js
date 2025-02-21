VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 900.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    quantity: 4.00,
    backgroundAlpha: 0.00,
    birdSize: 1.00,
    wingSpan: 10.00,
    speedLimit: 2.00,
    separation: 100.00,
    alignment: 1.00,
    cohesion: 1.00,
    color1: 0xff58dc,
    color2: 0xa75e5e,
    })
const messages = [
    "Are you sure?",
    "Really sure?",
    "Pookie Please?",
    "I'm going to cry... :(",
    "You're breaking my heart!",
    "REALLY sure?",
    "please?",
    "pretty please?",
    "PLEASE?",
    "PRETTY PLEASE?",
    "PLEASE PLEASE PLEASE?",
    "PLEASE PLEASE PLEASE PLEASE PL",
    "stop",
    "STOP",
    ":(",
    ":( :(",
    ":( :( :(",
    "I'm sad now",
    "No",
    "No",
    "No",
    "No",
];

let currentMessageIndex = 0;
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
let yesScale = 1;
let noScale = 1;
yesButton.addEventListener('click', () => {
    // switch the image in id="joe" to a different link
    document.getElementById('joe').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Joe_Biden_presidential_portrait_%28cropped%29.jpg/768px-Joe_Biden_presidential_portrait_%28cropped%29.jpg";

    // change the text of the yes button to a different message
    yesButton.textContent = "Yay!!!!!!!!!!!!";

    // hide the no button
    noButton.style.display = "none";

    // change the scale of the yes button
    yesButton.style.transform = "scale(1.6)";
    yesButton.classList.add('shake');
});
noButton.addEventListener('click', () => {
    yesScale += 0.1;
    yesButton.style.transform = `scale(${yesScale})`;
    // Decrease the red button's scale
    noScale -= 0.05;
    noButton.style.transform = `scale(${noScale})`;
    // Teleport the red button to a random location
    teleportButton(noButton);
    // Update the text of the no button to the next message
    noButton.textContent = messages[currentMessageIndex];
    // Increment the message index, and reset to 0 if it reaches the end
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});
function teleportButton(button) {
    const screenWidth = window.innerWidth; // Get the width of the screen
    const screenHeight = window.innerHeight; // Get the height of the screen
    const card = document.querySelector('.card');
    if (!card) {
    console.warn("No .card element found.");
      // Optionally, set cardRect to an empty area or adjust your logic.
    return;
    }
    const cardRect = card.getBoundingClientRect();

    //Define padding to place the button within the screen and away from the card
    const padding = 20;
    // Use getBoundingClientRect to account for transforms (like scale)
    const buttonRect = button.getBoundingClientRect();
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Calculate safe boundaries for the button
    const minX = padding;
    const maxX = screenWidth - buttonWidth - padding;
    const minY = padding;
    const maxY = screenHeight - buttonHeight - padding;

    // Ensure the button doesn't overlap with the card
    let randomX, randomY;
    let attempts = 0;
    const maxAttempts = 100;
    do {
      randomX = minX + Math.random() * (maxX - minX);
      randomY = minY + Math.random() * (maxY - minY);
    
        attempts++;
        
        // If we've tried too many times, break out.
       // if (attempts > maxAttempts) {
           // console.warn("Unable to find a safe position for the button after many attempts.");
          //  break;
       // }
    } while (
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );

        // Apply the new position
        button.style.position = 'absolute';
        // Ensure the button can move freely
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
}  