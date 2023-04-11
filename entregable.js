console.clear();

class ProductManager {
  constructor() {
    this.products = [];
    this.#lastProductId = 0;
  }

  #lastProductId;

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Falta completar un campo.")
      return false;
    }
  
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.error(`Ya existe otro producto con el código ${code}, por favor, ingrese uno nuevo.`)
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
    console.log(`Producto ${newProduct.id} (${newProduct.title}) agregado con exito.`);
    return true;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      console.log(`Producto encontrado: ${product.id} - ${product.title}.`)
      return product;
    }
    console.log('Not Found');
    return undefined;
  }
}




////////////////////////////////////
////////////// TESTING//////////////
////////////////////////////////////

// Se creará una instancia de la clase “ProductManager”
const pm = new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.info("TEST 1 --> getProducts debe devolver un arreglo vacío.");
const test1 = pm.getProducts();
console.log(test1);
test1.length ? console.error("TEST 1 FALLIDO") : console.warn("TEST 1 EXITOSO"), true;

// Se llamará al método “addProduct”
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
console.info("TEST 2 --> addProduct debe agregar un nuevo producto.");
const test2 = pm.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log(test2);
test2 ? console.warn("TEST 2 EXITOSO") : console.error("TEST 2 FALLIDO");

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.info("TEST 3 -->  getProducts debe devolver el producto añadido.");
const test3 = pm.getProducts();
console.log(test3);
test3.length ? console.warn("TEST 3 EXITOSO") : console.error("TEST 3 FALLIDO");

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
console.info("TEST 4 --> addProduct (usando un código repetido) debe devolver un error.");
const test4 = pm.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log(test4);
test4 ? console.error("TEST 4 FALLIDO") : console.warn("TEST 4 EXITOSO");

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.info("TEST 5 --> getProductsById con un ID existente debe devolver el producto.");
const test5 = pm.getProductById(1);
console.log(test5);

console.info('TEST 6 --> getProductById con un ID inexistente debe devolver "Not Found".');
const test6 = pm.getProductById(25);

test5 ? console.warn("TEST 5 EXITOSO") : console.error("TEST 5 FALLIDO");
test6 ? console.error("TEST 6 FALLIDO") : console.warn("TEST 6 EXITOSO");
