const menuIcon = document.getElementById('menuIcon');
const menuOverlay = document.getElementById('menuOverlay');

menuIcon.addEventListener('click', () => {
    menuOverlay.classList.toggle('hidden');
});

const thumbnails = document.querySelectorAll(".thumbnail");
const posts = document.querySelectorAll(".post");

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        posts[index].classList.toggle("hidden");
    });
});

posts.forEach((post) => {
    post.addEventListener("click", (event) => {
        if (event.target === post) {
            post.classList.add("hidden");
        }
    });
});