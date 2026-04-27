const graph1 = document.getElementById("graph1");
const overlay = graph1.querySelector(".overlay");

let triggered = false;

window.addEventListener("scroll", () => {
  const rect = graph1.getBoundingClientRect();

  if (rect.top <= 0 && !triggered) {
    triggered = true;

    // wait 2 seconds, then fade overlay
    setTimeout(() => {
      overlay.style.background = "rgba(50, 50, 50, 0.6)";
    }, 2000);
  }
});