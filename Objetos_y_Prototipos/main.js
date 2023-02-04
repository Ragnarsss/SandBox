//Objetio Literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};

//Objeto prototipo
function Student(name, age, cursosAprobados){
    this.name =  name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanete = new Student(
    "juan alcachofa",
    20,
    [
        "Curso POO",
        "Curso Slack"
    ],
)

//Prototipo con clases

class Student2 {
    
    constructor({
        name, 
        age,
        email,
        cursosAprobados = []
    }){
        this.name =  name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student2({
    name: "miguelito",
    age: 28,
    email: "correo@gmail.com",
    cursosAprobados: [
        "Curso Marketing Digital"
    ],
}
)