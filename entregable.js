class ProductManager {
   constructor(products) {
      this.products = []
      this.#lastProductId = 0;
   }

   #lastProductId;

   addProduct(title, description, price, thumbnail, code, stock) {
      const codeExists = this.products.some(product => product.code === code);
      if (codeExists) {
         throw new Error("Código de producto duplicado");
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
   }

   getProducts() {
      return this.products;
   }

   getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
         return product;
      } else {
         console.log("Not found");
      }
   }
}

//! TESTING
const productManager = new ProductManager();

//? Test 1 - Iniciando products como un arreglo vacio.
const products1 = productManager.getProducts();
if (products1.length !== 0) {
   console.error("ERROR en Test 1 --> getProducts no devuelve un arreglo vacío");
} else {
   console.group();
   console.log("// Test 1 completado --> productManager se inicia vacío.");
   console.log(productManager);
   console.log("--------------");
   console.groupEnd();
}


//* Agrego un producto.
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);


//? Test 2 - Probando si el método agrega el producto deseado.
const products2 = productManager.getProducts();
if (products2.length !== 1 || products2[0].title !== "producto prueba") {
   console.error("ERROR en Test 2 --> getProducts no devuelve el producto agregado.");
} else {
   console.group();
   console.log("// Test 2 completado --> El producto se agregó correctamente.");
   console.log(productManager.getProducts());
   console.log("--------------");
   console.groupEnd();
}

//? Test 3 - Intentando agregar un producto con el mismo id.
try {
   productManager.addProduct("producto repetido", "Este es un producto repetido", 300, "Sin imagen", "abc123", 10);
   console.error("ERROR en Test 3 --> No se arroja error al intentar agregar un producto con un ID repetido.");
} catch (e) {
   if (e.message !== "Código de producto duplicado") {
      console.error("ERROR en Test 3 --> El mensaje de error es incorrecto.");
   } else {
      console.group();
      console.log("// Test 3 completado --> Error al ingresar un id repetido.");
      console.log("--------------");
      console.groupEnd();
   }
}

//? Test 4 - Buscamos un producto que no existe y comprobamos que se arroje un error
const product1 = productManager.getProductById(0);
if (product1 !== undefined) {
   console.error("ERROR en Test 4 --> getProductById no devuelve error cuando no se encuentra el producto");
} else {
   console.group();
   console.log("// Test 4 completado --> No se encuentra el producto.")
   console.log("--------------");
   console.groupEnd();

}

//? Test 5 - Buscamos un producto que existe y comprobamos que se devuelva correctamente
const product2 = productManager.getProductById(1);
if (product2 === undefined || product2.title !== "producto prueba") {
   console.error("ERROR en Test 5 --> getProductById no devuelve el producto correcto");
} else {
   console.group();
   console.log("// Test 5 completado --> Se devuelve el producto correcto");
   console.log(product2);
   console.log("--------------");
   console.groupEnd();
}

//! Si todas las pruebas pasan, mostramos un mensaje de éxito
console.log("// TODO CORRECTO.");