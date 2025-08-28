function filterPosters(category) {
    const posters = document.querySelectorAll(".pro");

    posters.forEach(poster => {
        if (category === 'all') {
            poster.style.display = "block";
        } else {
            if (poster.classList.contains(category)) {
                poster.style.display = "block";
            } else {
                poster.style.display = "none";
            }
        }
    });
}
