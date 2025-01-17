
async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  displayProducts(data);
}


function displayProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; 
  products.forEach(product => {
    const productCard = `
      <div class="col-12 col-md-4 col-lg-3">
        <div class="card shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button type="button" class="btn btn-warning w-48">Add to Cart</button>
            <button type="button" class="btn btn-primary w-48">View Details</button>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}


function searchProducts(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filteredProducts = window.products.filter(product => product.title.toLowerCase().includes(searchTerm));
  displayProducts(filteredProducts);
}


let products = [];
fetchProducts().then(data => {
  products = data;
});


document.getElementById('search-form').addEventListener('submit', searchProducts);
