document.addEventListener("DOMContentLoaded", function() { // Ensure DOM is fully loaded
    const leadImageContainer = document.querySelector('.lead-image-container');
    const leadImage = document.querySelector('.lead-image');
    const imageOverlay = document.querySelector('.image-overlay'); // Get the overlay
    const header = document.querySelector('header');  // Select the header element
  
  
    if (!leadImageContainer || !leadImage) {
      console.error("Lead image elements not found.  Check your HTML.");
      return; // Exit if elements are missing
    }
  
    window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY;
  
      // Calculate the fade amount based on scroll position
      let fadeAmount = 1 - (scrollPosition / 400); // Adjust 400 to change fade speed
  
      // Ensure fadeAmount stays within 0 and 1
      fadeAmount = Math.max(0, Math.min(1, fadeAmount));
  
      // Apply the fade
      leadImage.style.opacity = fadeAmount;
  
      // Optionally, adjust the transform
      leadImage.style.transform = `scale(${1 + (1-fadeAmount)/5})`; // Slight zoom
  
      // Optionally, fade out the text overlay as well
      if (imageOverlay) {
          imageOverlay.style.opacity = fadeAmount;
      }
  
       //Optionally change the headers opacity and position;
      if(header) {
         header.style.opacity = fadeAmount;
      }
    });
  });