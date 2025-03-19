document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("serverVideo");
  const button = document.getElementById("toggleSound");

  button.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      button.innerHTML = "Disable Sound 🔇";
      button.style.visibility = "hidden";
    } else {
      video.muted = true;
      button.innerHTML = "Enable Sound 🔊";
    }
  });
  const learnMoreLink = document.querySelector('a[href="#about"]');
  if (learnMoreLink) {
    learnMoreLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });
  }
});
