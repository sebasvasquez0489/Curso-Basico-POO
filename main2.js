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
});

const diana2 = new Student({
  name: "diana",
  username: "dianis89",
  email: "dianita2189@gmail.com",
  facebook: "diana echeverri89",
});
