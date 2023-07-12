// Dentro de este reto encuentras las clases Student y Comment con un código base, recuerda ir a verlas en el sistema de archivos.

// Tu reto consisten en:

// Hacer que la clase TeacherStudent herede de Student
// Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent.
// Sobrescribir el método publicarComentario dentro de TeacherStundent.
// Debe agregar el array de skills en la propiedad studentRole de la clase Comment.
// El string debe verse de la siguiente manera "profesor de skill1, skill2".

import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent {
  // Tu código aquí 👈
  constructor({ props, skills = [] }) {
    super(props);
    this.skills = skills;
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor " + this.skills.join(","),
    });
    return comment.publicar();
  }
}
