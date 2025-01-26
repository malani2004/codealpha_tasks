let cart = [];

function addToCart(productId) {
    cart.push(productId);
    alert("Product added to cart!");
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(id => {
        // Mock data for simplicity; replace with AJAX for real backend integration.
        const product = { id: id, name: "Product " + id, price: 20.0 };
        total += product.price;
        cartItems.innerHTML += `<li>${product.name} - $${product.price}</li>`;
    });
    totalPrice.textContent = total.toFixed(2);
}
