//*** CREACION DE OBJETO LITERAL ***/

const sebastian = {
  /// SE AGREGAN ATRIBUTOS ////
  name: "Sebastian",
  age: 34,
  cursosAprobados: ["Curso definitivo HTML Y CSS", "Curso practico HTML Y CSS"],
  /// CREACION DE METODOS ////
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

//*** CREACION DE PROTOTIPO ***//

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

//*** CREACION DE INSTANCIA ***//

const dianita = new Student("Dianita Yuvisely", 33, [
  "Curso gestion recursos humanos",
  "Cueso habilidades balnadas",
]);

//*** PROTOTIPOS CON LA SINTAXYS DE "CLASES" ***/
class Student2 {
  constructor({ name, age, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const estebitan = new Student2({
  name: "Esteban",
  age: 34,
  email: "estebitan0489@gmail.com",
});
