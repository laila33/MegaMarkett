const electronicsContainer = document.getElementById("electronics-container");
const jeweleryContainer = document.getElementById("jewelery-container");
const mensContainer = document.getElementById("mens-container");
const womensContainer = document.getElementById("womens-container");

function createProductCard(product) {
  const cardlink = document.createElement("a");
  cardlink.href = `product-details.html?id=${product.id}`;
  cardlink.className = "block h-full"; 

  const card = document.createElement("div");

  card.className = "border p-4 rounded-lg w-full h-full hover:shadow-lg transition flex flex-col bg-white";

  const imgContainer = document.createElement("div");
  imgContainer.className = "flex items-center justify-center w-full bg-[#F5F5F5] p-2 rounded-lg h-48 flex-shrink-0";
  
  const img = document.createElement("img");
  img.src = product.image;
  img.className = "max-h-full object-contain"; 
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  const title = document.createElement("h2");
  title.className = "title my-2 mx-2 text-sm font-semibold line-clamp-2 min-h-[2.5rem]";
  title.textContent = product.title;
  card.appendChild(title);

  const priceDiv = document.createElement("div");
  priceDiv.className = "flex gap-2 mx-2 mt-auto"; 
  
  const originalPrice = document.createElement("p");
  originalPrice.className = "original-price font-bold text-[#008ECC]";
  originalPrice.textContent = `$${product.price}`;
  priceDiv.appendChild(originalPrice);
  card.appendChild(priceDiv);

  cardlink.appendChild(card);
  return cardlink;
}
function fetchCategoryProducts(category, container) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => response.json())
    .then((data) => {
      data.slice(0, 5).forEach((product) => {
        const card = createProductCard(product);
        container.appendChild(card);
      });
    })
    .catch((error) => console.log(error));
}

fetchCategoryProducts("electronics", electronicsContainer);
fetchCategoryProducts("jewelery", jeweleryContainer);
fetchCategoryProducts("men's clothing", mensContainer);
fetchCategoryProducts("women's clothing", womensContainer);
