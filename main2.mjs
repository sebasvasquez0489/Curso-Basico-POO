function videoPlay(id) {
  const urlSecreta = "http://platzisecreta.com/" + id;
  console.log("Se esta reproduciendo url" + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "http://platzisecreta.com/" + id;
  console.log("Se pausa url" + urlSecreta);
}

export class PlatziClass {
  constructor({ name, videID }) {
    this.name = name;
    this.videoID = videID;
  }
  reproducir() {
    videoPlay(this.videID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, clases = [] }) {
    this._name = name;
    this.clases = clases;
  }

  get name() {
    return this._name;
  }
  set name(nuevoNombresito) {
    if (nuevoNombresito === "Curso Malito de Programación Básica") {
      console.error("Web...No");
    } else {
      this._name = nuevoNombresito;
    }
  }
}

const cursosProgramacionBasica = new Course({
  name: "Curso gratis de programación Básica",
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Definitivo HTML y CSS",
});
class learningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new learningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursosProgramacionBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});
const escuelaData = new learningPath({
  name: "Escuela de Data Science",
  courses: [cursosProgramacionBasica, "Curso DataBusines", "Curso Dataviz,"],
});
const escuelaVgs = new learningPath({
  name: "Escuela de videojuegos",
  courses: [cursosProgramacionBasica, "Curso de Unity", "Curso de Unreal"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const sebastian2 = new Student({
  name: "Sebastian",
  username: "sevasquez89",
  email: "sebitas0489@gmail.com",
  instagram: "se_vasquez89",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const diana2 = new Student({
  name: "diana",
  username: "dianis89",
  email: "dianita2189@gmail.com",
  facebook: "diana echeverri89",
  learningPaths: [escuelaWeb, escuelaData],
});
