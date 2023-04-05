const objetos = [
   {
      manzanas: 3,
      peras: 2,
      carne: 1,
      jugos: 5,
      dulces: 2,
   },
   {
      manzanas: 1,
      sandias: 1,
      huevos: 6,
      jugos: 1,
      panes: 4,
   },
];

let propiedades = [];
let totalProductos = 0;

objetos.forEach((objeto) => {
   console.log(`Objeto ${Object.keys(objeto)}`);
   let claves = Object.keys(objeto);
   let valores = Object.values(objeto);

   claves.forEach((clave) => {
      if (!propiedades.includes(clave)) {
         propiedades.push(clave);
      } else {
         console.log(`Clave repetida ${clave}`);
      }
   });

   valores.forEach((valor) => {
      totalProductos = totalProductos + valor;
   });
});

console.log(`Propiedades encontradas: ${propiedades}`);
console.log(`Productos encontrados ${totalProductos}`);




class Persona {
   #fullName;
   constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.#fullName = `${this.nombre}  ${this.apellido}`;
   }

   #getFullName = () => {
      return this.#fullName;
   };

   getNombreCompletoYEdad = () => {
      return `${this.#fullName}  ${this.edad}`;
   };
}

let instaciaPersona = new Persona('raul', 'Ahumada', 23);

console.log(instaciaPersona.getNombreCompletoYEdad());
