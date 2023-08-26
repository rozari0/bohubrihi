let productsdiv = document.querySelector("#products");

// Get Data From fakestoreapi
fetch('https://fakestoreapi.com/products').then(
  (res) => res.json()
).then(
  data => {
    return JSON.parse(JSON.stringify(data))
  }
).then(
  (data) => {
    console.log(data);
    data = data.slice(1, 9);
    data.forEach(
      (item) => {
        div = document.createElement('div');
        div.classList.add('row');
        div.classList.add('container');
        var h5 = document.createElement('h5');
        h5.innerHTML = item.title;
        div.appendChild(h5);
        var description = document.createElement('p')
        description.innerHTML = item.description;
        div.appendChild(description);
        var price = document.createElement('p');
        price.innerHTML = "Price: " + item.price;
        div.appendChild(price);
        var button = document.createElement('button')
        button.innerHTML = "Add to Cart"
        button.id = "add_to_cart"
        button.onclick = function () {
          AddToCart(this);
        }
        div.appendChild(button);
        productsdiv.appendChild(div);
      }
    )
  }
)

// Add product to cart
function AddToCart(e) {
  list = document.querySelector("#cart");

  console.log(e.parentNode);
  li = document.createElement('li')
  nameOfProduct = document.createElement('b')
  nameOfProduct.innerHTML = e.parentNode.firstChild.innerHTML + " ";
  icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-trash');
  icon.onclick = function () {
    removeFromCart(this);
  }
  li.appendChild(nameOfProduct)
  li.appendChild(icon)
  list.appendChild(li)
  AddToLCStroage(e.parentNode.firstChild.innerHTML);
}

// Add product to LocalStorage
function AddToLCStroage(text) {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    products = JSON.parse(localStorage.getItem('products'))
  }
  products.push(text)
  localStorage.setItem('products', JSON.stringify(products));
}

// Remove Product From Cart.
function removeFromCart(e) {
  list = document.querySelector("#cart");
  li = e.parentNode
  list.removeChild(e.parentNode);
  li.removeChild(li.lastChild);
  removeFromLCStorage(li.firstChild.innerHTML)

}

// Remove Product From Localstorage
function removeFromLCStorage(text) {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    products = JSON.parse(localStorage.getItem('products'))
  }
  products.forEach(
    (product, index) => {
      if (product == text.trim()) {
        products.splice(index, 1);
      }
    }
  )
  localStorage.setItem('products', JSON.stringify(products));
}

// Add previous cart choices from LocalStorage
document.addEventListener('DOMContentLoaded', AddFromLC);
function AddFromLC() {
  let products = [];
  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    products = JSON.parse(localStorage.getItem('products'))
  }
  list = document.querySelector("#cart");
  products.forEach(
    (product) => {
      li = document.createElement('li')
      nameOfProduct = document.createElement('b')
      nameOfProduct.innerHTML = product + " ";
      icon = document.createElement('i');
      icon.classList.add('fa-solid', 'fa-trash');
      icon.onclick = function () {
        removeFromCart(this);
      }
      li.appendChild(nameOfProduct)
      li.appendChild(icon)
      list.appendChild(li)
    }
  )
}