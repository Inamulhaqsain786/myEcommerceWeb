// mart.js

function toggleSearch() {
    const searchBox = document.getElementById("searchBox");
    searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
}

function toggleUser() {
    const userBox = document.getElementById("userBox");
    userBox.style.display = userBox.style.display === "block" ? "none" : "block";
}



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







// ✅ Initialize cart count from localStorage
document.addEventListener("DOMContentLoaded", function () {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

    // Update badge if exists
    const badge = document.querySelector(".cart-badge");
    if (badge) {
        badge.textContent = cartCount;
    }

    // Add click listener to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", () => {
            cartCount++;
            localStorage.setItem("cartCount", cartCount);

            // Update badge
            if (badge) {
                badge.textContent = cartCount;
                badge.classList.add("pop");
                setTimeout(() => badge.classList.remove("pop"), 300);
            }
        });
    });
});
