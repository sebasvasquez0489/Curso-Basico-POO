class Comment {
  constructor({ content, studentName, studentRol = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRol = studentRol;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studentRol + ")");
    console.log(this.likes + " " + "likes");
    console.log(this.content);
  }
}

function videoPlay(id) {
  const urlSecreta = "http://platzisecreta.com/" + id;
  console.log("Se esta reproduciendo url" + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "http://platzisecreta.com/" + id;
  console.log("Se pausa url" + urlSecreta);
}

class PlatziClass {
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
  constructor({ name, clases = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.clases = clases;
    this.isFree = isFree;
    this.lang = lang;
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

const cursoProBasica = new Course({
  name: "Curso gratis de programación Básica",
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Definitivo HTML y CSS",
  lang: "english",
});
class learningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new learningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});
const escuelaData = new learningPath({
  name: "Escuela de Data Science",
  courses: [cursoProBasica, "Curso DataBusines", "Curso Dataviz"],
});
const escuelaVgs = new learningPath({
  name: "Escuela de videojuegos",
  courses: [cursoProBasica, "Curso de Unity", "Curso de Unreal"],
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRol: "profesor",
    });
    comment.publicar();
  }
}

const sebastian = new FreeStudent({
  name: "Sebastian",
  username: "sevasquez89",
  email: "sebitas0489@gmail.com",
  instagram: "se_vasquez89",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const diana = new BasicStudent({
  name: "diana",
  username: "dianis89",
  email: "dianita2189@gmail.com",
  facebook: "diana echeverri89",
  learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "frediert",
  email: "freddyv@gmail.com",
  instagram: "fred_vega",
});
