document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        const imgElement = document.getElementById("cardImg");
        if (imgElement) {
          imgElement.src = product.image;
          // imgElement.alt = product.title;
        }
        const imgTitle = document.getElementById("title");
        if (imgTitle) {
          imgTitle.textContent = product.title;
        }
        const imgCat = document.getElementById("category");
        if (imgCat) {
          imgCat.textContent = product.category;
        }
        const imgDes = document.getElementById("description");
        if (imgDes) {
          imgDes.textContent = product.description;
        }

        const imgElement2 = document.getElementById("img1");
        if (imgElement2) {
          imgElement2.src = product.image;
          // imgElement.alt = product.title;
        }
        const imgTitle2 = document.getElementById("title2");
        if (imgTitle2) {
          imgTitle2.textContent = product.title;
        }
        const imgCat2 = document.getElementById("category2");
        if (imgCat2) {
          imgCat2.textContent = product.category;
        }
        const imgcart = document.getElementById("imgincart");
        if (imgcart) {
          imgcart.src = product.image;
        }
        const titleincart = document.getElementById("titleincart");
        if (titleincart) {
          titleincart.textContent = product.title;
        }
        const priceincartt = document.getElementById("priceincart");
        if (priceincartt) {
          priceincartt.textContent = `$${product.price}`;
        }
        const cartCounter = document.getElementById("counterincart");
        if (cartCounter) {
          cartCounter.textContent = 1;
        }

        const addToCartLink = document.getElementById("addToCartLink");

        addToCartLink.addEventListener("click", (e) => {
          const urlParams = new URLSearchParams(window.location.search);
          const productId = urlParams.get("id");

          if (productId) {
            let cart = JSON.parse(localStorage.getItem("myCart")) || [];

            if (!cart.includes(productId)) {
              cart.push(productId);
            }
            localStorage.setItem("myCart", JSON.stringify(cart));
          }
        });
      })
      .catch((error) => console.error("Error fetching product:", error));
  }
});

const m = document.getElementById("minusBtn");
const p = document.getElementById("plusBtn");
const c = document.getElementById("counterValue");

let count = 0;
m.addEventListener("click", () => {
  if (count > 1) {
    count--;
    c.textContent = count;
  } else {
    alert("Invalid");
  }
});
p.addEventListener("click", () => {
  count++;
  c.textContent = count;
});

const mQut = document.getElementById("minQut");
const pqut = document.getElementById("plusQut");
const cqut = document.getElementById("counterincart");

let count2 = 1;
mQut.addEventListener("click", () => {
  if (count2 > 1) {
    count2--;
    cqut.textContent = count2;
  } else {
    alert("Invalid");
  }
});
pqut.addEventListener("click", () => {
  count2++;
  cqut.textContent = count2;
});
