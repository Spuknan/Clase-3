console.clear();

class ProductManager {
  constructor(products) {
    this.products = products || [];
    this.#lastProductId = 0;
  }

  #lastProductId;

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        return false;
      }
    }

    const newProduct = {
      id: ++this.#lastProductId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(newProduct);
    return true;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    }
  }
}

// TESTING
const productManager = new ProductManager(); // Inicializando productManager vacio.

// Test 1 --> El array debe existir y estar vacío.
console.log("Test 1 --> Verificar si el array existe y se encuentra vacío.");

const products = productManager.getProducts();
if (products.length > 0) {
  console.error("TEST 1 FALLIDO");
} else {
  console.warn("TEST 1 EXITOSO");
}

// Test 2 --> Se debe agregar correctamente el producto.
console.log("Test 2 --> Verificar el funcionamiento de addProduct.");
productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

if (productManager.products.length > 0) {
  console.warn("TEST 2 EXITOSO");
} else {
  console.error("TEST 2 FALLIDO");
}

// Test 3 --> Mostrar el producto agregado con getProducts().
console.log("Test 3 --> Se debe devolver el array con el producto agregado.");
console.log(productManager.getProducts());

if (productManager.products.length > 0) {
  console.warn("TEST 3 EXITOSO");
} else {
  console.error("TEST 3 FALLIDO");
}

// Test 4 --> Al intentar agregar un producto con el mismo code debe verse un mensaje de error.
console.log("Test 4 --> Verificar que no se permita crear dos objetos con el mismo code");
productManager.addProduct(
  "producto prueba2",
  "Este es un producto prueba2",
  500,
  "Sin imagen",
  "abc123",
  40
);

if (productManager.products.length > 0) {
  console.warn("TEST 3 EXITOSO");
} else if (productManager.products.length > 1) {
  console.error("TEST 3 FALLIDO");
}


// Test 5 --> Se deben probar las dos instancias de getProductById. Tanto si encuentra un producto como si no encuentra nada.
console.log("Test 5 --> Debe mostrarse un error y luego un mensaje de confirmación.");
if (!productManager.getProductById(0) && productManager.getProductById(1)) {
  console.warn("TEST 5 EXITOSO");
} else {
  console.error("TEST 5 FALLIDO");
};
