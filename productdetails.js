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
