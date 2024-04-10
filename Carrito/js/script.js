// Obtener los elementos del resumen
const summarySubtotal = document.getElementById('subtotal');
const summaryTotal = document.getElementById('total');

// Función para actualizar el resumen del carrito
function updateSummary(productName, price, quantity) {
  const productList = document.getElementById('product-list');
  const productTotal = price * quantity;
  const currentSubtotal = parseFloat(summarySubtotal.textContent.replace('$', ''));
  const newSubtotal = currentSubtotal + productTotal;
  summarySubtotal.textContent = `$${newSubtotal.toFixed(2)}`;
  summaryTotal.textContent = `$${newSubtotal.toFixed(2)}`;

  // Buscar el elemento de producto existente en el resumen
  const existingProductItem = Array.from(productList.children).find(item => item.textContent.includes(productName));

  if (existingProductItem) {
    // Actualizar la cantidad del producto existente
    existingProductItem.textContent = `${productName} x ${quantity}`;
  } else {
    // Crear elemento para mostrar el producto en el resumen
    const productItem = document.createElement('li');
    productItem.textContent = `${productName} x ${quantity}`;
    productItem.dataset.price = price;
    productList.appendChild(productItem);
  }
}

// Función para guardar la compra en localStorage
function guardarCompra(productName, price, quantity) {
  const compra = { productName: productName, price: price, quantity: quantity };
  // Obtener las Productos existentes del localStorage o inicializar un array vacío
  let Productos = JSON.parse(localStorage.getItem('Productos')) || [];
  // Agregar la nueva compra al array
  Productos.push(compra);
  // Guardar el array de Productos actualizado en el localStorage
  localStorage.setItem('Productos', JSON.stringify(Productos));
}

// Agregar botón de "Agregar al carrito" en cada producto
const products = document.querySelectorAll('.product');
products.forEach((product, index) => {
  const priceElement = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity-input');
  const price = parseFloat(priceElement.textContent.replace('$', ''));
  const productName = product.querySelector('.product-name a').textContent;

  const row = product.querySelector('.row');
  const addToCartButton = document.createElement('div');
  addToCartButton.classList.add('col-md-2');
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Agregar al carrito';
  button.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    updateSummary(productName, price, quantity);
  });
  addToCartButton.appendChild(button);
  row.appendChild(addToCartButton);
});

// Botón Checkout
const checkoutButton = document.querySelector('.summary button');
checkoutButton.addEventListener('click', () => {
  const productList = document.getElementById('product-list');
  const productListItems = productList.querySelectorAll('li');

  // Iterar sobre los elementos de la lista de productos en el resumen
  productListItems.forEach(item => {
    const [productName, quantity] = item.textContent.split(' x ');
    const price = parseFloat(item.dataset.price);
    guardarCompra(productName, price, parseInt(quantity));
  });

  // Limpiar el resumen después de guardar la compra
  summarySubtotal.textContent = '$0';
  summaryTotal.textContent = '$0';
  productList.innerHTML = '';
});