var initialVolume = 0.2; // Initial volume
var volumeMultiplier = 2; // Volume multiplier
var delayBetweenSounds = 500; // Delay in milliseconds
var isFirstSound = true; // Flag to track if it's the first sound

function clickSkibid() {
    // Get all existing audio elements
    var existingSounds = document.querySelectorAll('audio');
    
    // Calculate the volume for the new sound
    var volume = initialVolume * Math.pow(volumeMultiplier, existingSounds.length);
    
    // Create a new audio element
    var newSound = new Audio('./audio/skibidi-toilet.mp3');
    newSound.volume = volume;
    
    // Play the new sound after a delay
    if (isFirstSound) {
        isFirstSound = false;
        newSound.play();
    } else {
        setTimeout(function() {
            newSound.play();
        }, delayBetweenSounds * existingSounds.length);
    }
}
