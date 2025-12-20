document.addEventListener("DOMContentLoaded", async () => {
  const cartIds = JSON.parse(localStorage.getItem("myCart")) || [];
  const cardsContainer = document.getElementById("cards");
  const subtotalPrice = document.getElementById("totalPrice");
  const taxElements = document.querySelectorAll(".tax");

  const cartCountElement = document.getElementById("cart-count");

  if (cartCountElement) {
    cartCountElement.textContent = `You have ${cartIds.length} items in your cart`;
  }

  let totalAllProducts = 0;

  if (cartIds.length > 0) {
    cardsContainer.innerHTML = "";

    for (const productId of cartIds) {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const product = await res.json();
        totalAllProducts += product.price;

        const productHTML = `
    <div class="flex items-center justify-between border-b pb-4 mb-4">
        
        <a href="./product-details.html?id=${
          product.id
        }" class="flex items-center gap-4 cursor-pointer hover:opacity-75 transition-opacity">
            <img src="${product.image}" class="w-16 h-16 object-contain">
            <p class="font-bold text-sm w-40 truncate">${product.title}</p>
        </a>
        <div class="flex flex-col items-center">
            <i class="fa-solid fa-angle-up cursor-pointer" onclick="changeQty('${
              product.id
            }', 1, ${product.price})"></i>
            <p id="qty-${product.id}" class="font-bold">1</p>
            <i class="fa-solid fa-angle-down cursor-pointer" onclick="changeQty('${
              product.id
            }', -1, ${product.price})"></i>
        </div>

        <div class="flex items-center gap-3">
            <p id="price-${
              product.id
            }" class="font-bold w-20 text-center">$${product.price.toFixed(
          2
        )}</p>
            <i class="fa-solid fa-trash-can text-red-500 cursor-pointer" onclick="deleteItem('${
              product.id
            }')"></i>
        </div>
    </div>
`;

        // cardsContainer.insertAdjacentHTML("beforeend", productHTML);

        cardsContainer.insertAdjacentHTML("beforeend", productHTML);
      } catch (err) {
        console.error("Error fetching item:", err);
      }
    }
    updateSummary();
  } else {
    cardsContainer.innerHTML =
      "<p class='p-5 text-center'>Your cart is empty</p>";
    updateSummary();
  }
});

function changeQty(id, delta, unitPrice) {
  const qtyElement = document.getElementById(`qty-${id}`);
  const priceElement = document.getElementById(`price-${id}`);

  let currentQty = parseInt(qtyElement.textContent);
  let newQty = currentQty + delta;

  if (newQty >= 1) {
    qtyElement.textContent = newQty;
    priceElement.textContent = `$${(newQty * unitPrice).toFixed(2)}`;
    updateSummary();
  } else {
    alert("Minimum quantity is 1");
  }
}

function updateSummary() {
  const subtotalPrice = document.getElementById("totalPrice");
  const taxElements = document.querySelectorAll(".tax");

  let currentSubtotal = 0;
  const allPrices = document.querySelectorAll("[id^='price-']");
  allPrices.forEach((p) => {
    currentSubtotal += parseFloat(p.textContent.replace("$", ""));
  });

  const shipping = currentSubtotal > 0 ? 10 : 0;
  const finalTotal = currentSubtotal + shipping;

  if (subtotalPrice)
    subtotalPrice.textContent = `$${currentSubtotal.toFixed(2)}`;
  taxElements.forEach((el) => {
    el.textContent = `$${finalTotal.toFixed(2)}`;
  });
}

function deleteItem(id) {
  let cart = JSON.parse(localStorage.getItem("myCart")) || [];
  cart = cart.filter((itemId) => itemId != id);
  localStorage.setItem("myCart", JSON.stringify(cart));
  location.reload();
}
