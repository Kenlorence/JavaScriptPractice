let products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Smartphone", price: 40000 },
    { id: 3, name: "Tablet", price: 30000 }
];

let list = document.getElementById("productList");

products.forEach(product => {

    let div = document.createElement("div");
    div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: ₱${product.price}</p>
    <button>Add to Cart</button>
    <hr>
  `;

    list.appendChild(div);
});