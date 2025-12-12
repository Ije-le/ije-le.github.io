// Fade out featured image when animation video enters viewport
window.addEventListener('scroll', function() {
  const featured = document.getElementById('featured-image');
  const video = document.getElementById('animation-video');
  const videoTop = video.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // When top of video reaches 80% of viewport height, fade out the featured image
  if (videoTop < windowHeight * 0.8) {
    featured.style.opacity = 0;
  } else {
    featured.style.opacity = 1;
  }
});
