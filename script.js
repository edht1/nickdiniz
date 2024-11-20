window.onload = () => {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const image = document.querySelector(".responsive-image");

    // Start the title animation
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";

    // Start fading in the subtitle after the title animation completes
    setTimeout(() => {
        subtitle.style.opacity = "1"; // Fade in subtitle after the title completes
    }, 1750); // Matches the title's transition duration

    // Delay the image fade-in for 2 seconds after the subtitle fades in
    setTimeout(() => {
        image.style.opacity = "1";  // Fade in the image after the 2-second delay
    }, 1750 + 2000); // 1750ms (title) + 2000ms (delay for the image)
};
