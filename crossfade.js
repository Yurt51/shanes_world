document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(() => {
        const video1 = document.getElementById('background-video1');
        const video2 = document.getElementById('background-video2');
        const isVideo1Opaque = getComputedStyle(video1).opacity == 1;

        if (isVideo1Opaque) {
            video1.style.opacity = 0;
            video2.style.opacity = 1;
        } else {
            video1.style.opacity = 1;
            video2.style.opacity = 0;
        }
    }, 5000); // adjust timinng to match the length of the video
});
