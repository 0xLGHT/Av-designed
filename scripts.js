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
