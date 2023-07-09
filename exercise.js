// Dadas la siguientes clases:

// Clase Banda con las propiedades:

// nombre - string
// generos - Array
// integrantes - Array
// Crea una clase llamada "Integrante" con las propiedades:

// nombre - string
// instrumento - string

// Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  //*** AGREGAR INTEGRANTE ***/
  agregarIntegrante(integranteNuevo) {
    if (this.integrantes.every((i) => i.instrumento !== "Baterista")) {
      this.integrantes.push(integranteNuevo);
    } else {
      console.log("No cumples!!!");
    }
  }
}

//*** CREAR CLASE INTEGRANTE ***//
class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

export { Banda, Integrante };
