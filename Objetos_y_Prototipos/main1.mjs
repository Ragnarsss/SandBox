class LearningClass {
    
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID)
    }

    pausar() {
        videoStop(this.videoID)

    }
}

function videoPlay() {
    const url = "https://video.secreto";
    console.log("se esta reproduciendo algo " + url)
}

function videoStop() {
    const url = "https://video.secreto";
    console.log("se ha pausado algo " + url)
}

class LearningPaths {

    constructor(
        name,
        courses = []
    ){
        this.name = name;
        this.course = courses;
    }

    addCourse(course){
        if (course instanceof Course) {
            this.courses.push(course)
        }else{
            console.log("Esto no es un curso!")
        }
    }
}

const escuelaProgra = new LearningPaths({
    name: "Escuela de Programacion",
    courses: [
        programacionBasica,
        html_css,
        angular
    ]
})
class Course {

    constructor(
        name,
        classes = [],
    ){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if (newName === "Curso de Magia") {
            console.error("La magia es para expertos!")
        } else {
            this._name = newName;
        }
    }
}

const programacionBasica = new Course({
    name: "Curso de Programacion Basica"
});
const html_css = new Course({
    name: "Curso de HTML y CSS"
});
const angular = new Course({
    name: "Curso de Angular"
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

const estudiante = new Student({
    name: "Un Estudiante",
    username: "estudianteX",
    email: "estudiante.promedio@gmail.com",
    
})