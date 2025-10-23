function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTable = document.getElementById("cart-items");
    const totalAmountEl = document.getElementById("total-amount");

    cartTable.innerHTML = ""; // Clear table
    let total = 0;

    cartItems.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
      <td><img src="${item.img}" alt="${item.name}"></td>
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>$${subtotal.toFixed(2)}</td>
      <td><button onclick="removeItem(${index})">Remove</button></td>
    `;
        cartTable.appendChild(row);
    });

    totalAmountEl.textContent = total.toFixed(2);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Load cart on page open
loadCart();
