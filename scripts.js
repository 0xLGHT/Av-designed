const menuIcon = document.getElementById('menuIcon');
const menuOverlay = document.getElementById('menuOverlay');

menuIcon.addEventListener('click', () => {
    menuOverlay.classList.toggle('hidden');
});


const modals = document.querySelectorAll(".modal");
const thumbnails = document.querySelectorAll(".thumbnail");
const closeBtns = document.querySelectorAll(".close");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        const id = thumbnail.getAttribute("data-id");
        const modal = document.querySelector(`.modal[data-id="${id}"]`);

        modal.style.display = "block";
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        modals.forEach((modal) => {
            modal.style.display = "none";
        });
    });
});

modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

function handleResize() {
    const videoElement = document.getElementById("bg-video");
    if (window.innerWidth <= 768) {
        videoElement.pause();
    } else {
        videoElement.play();
    }
}

// Listen for window resize events
window.addEventListener("resize", handleResize);
handleResize(); // Call the function once to handle initial load