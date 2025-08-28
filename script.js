// Toggle mobile menu
const bar = document.getElementById('bar');
const nav = document.getElementById('ak');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Cart button click
const cartIcons = document.querySelectorAll('.cart-icon');

cartIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Item added to cart!");
    });
});

// Subscribe button click
const subscribeBtn = document.querySelector('.form button');
const emailInput = document.querySelector('.form input');

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email && email.includes("@")) {
            alert(`Subscribed with ${email}`);
            emailInput.value = '';
        } else {
            alert("Please enter a valid email address.");
        }
    });
}
