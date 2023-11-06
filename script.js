var cartItems = [];

function addToCart(productName, price) {
    var item = {
        name: productName,
        price: price
    };
    cartItems.push(item);
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    if (cartItems.length === 0) {
        cartElement.innerHTML = "<p>Keranjang belanja kosong.</p>";
        } 
        else {
        var totalPrice = 0;
        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            cartElement.innerHTML += "<div class='cart-item'>" +
                                        "<h3>" + item.name + "</h3>" +
                                        "<p>Harga: Rp" + item.price + "</p>" +
                                        "<button onclick='removeFromCart(" + i + ")'>Hapus</button>" +
                                    "</div>";
            totalPrice += item.price;
        }

        document.getElementById("checkout").innerHTML = "<p>Total Harga: Rp" + totalPrice + "</p>" +
                                                        "<button onclick='checkout()'>Bayar</button>";
    }
}

function checkout() {
    if (cartItems.length === 0) {
        alert("Keranjang belanja kosong. Tidak dapat melakukan pembayaran.");
    } else {
        alert("Pembayaran berhasil! Terimakasih");
        cartItems = [];
        updateCart();
    }
}
