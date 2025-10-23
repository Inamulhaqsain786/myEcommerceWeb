const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");


hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("fa-x");
    list.classList.toggle("navlist-active");


})


// Function to show "Added to cart ✓" popup
function showAddToCartAnimation() {
    const animationEl = document.createElement('div');
    animationEl.className = 'add-to-cart-animation';
    animationEl.textContent = 'Added to cart ✓';
    document.body.appendChild(animationEl);

    setTimeout(() => {
        animationEl.classList.add('fade-out');
    }, 1000);

    setTimeout(() => {
        animationEl.remove();
    }, 2000);
}

// Function to add product to localStorage cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showAddToCartAnimation();
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
        const card = e.target.closest('.card');
        if (!card) return;

        const product = {
            id: card.dataset.id || card.querySelector('img').src,
            name: card.querySelector('.title').textContent,
            price: parseFloat(card.querySelector('.price .amount').textContent.replace('$', '')),
            img: card.querySelector('img').src,
        };

        addToCart(product);
    });
});



// Toggle search bar visibility
function toggleSearch() {
    const box = document.getElementById("searchBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

// Dummy search action
function performSearch() {
    const value = document.getElementById("searchInput").value;
    alert("Searching for: " + value);
}


// Toggle User Box
function toggleUser() {
    const userBox = document.getElementById("userBox");
    userBox.style.display = userBox.style.display === "block" ? "none" : "block";
}

// Dummy login
function loginUser() {
    const email = document.getElementById("userEmail").value;
    const pass = document.getElementById("userPassword").value;

    if (email && pass) {
        alert("Welcome, " + email + "!");
        toggleUser();
    } else {
        alert("Please enter email and password.");
    }
}











