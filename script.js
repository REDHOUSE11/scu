function toggleLightUp(event) {
    const word = event.target;
    word.classList.toggle('active');
}






let scrolled = false;

window.addEventListener("wheel", (event) => {
    if (!scrolled && event.deltaY > 0) { // Detects downward scroll
        scrolled = true;
        document.getElementById("nextSection").scrollIntoView({ behavior: "smooth" });
    }
});
