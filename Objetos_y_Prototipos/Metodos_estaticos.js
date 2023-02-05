const persona = {
    nombre: "Pedro",
    apeliido: "Perez",
    cursos: []
}

console.log("Object.keys: " + Object.keys(persona))
console.log("Object.getOwnPropertyNames: " + Object.getOwnPropertyNames(persona))
console.log("Object.entries: " + Object.entries(persona))
console.log("Object.getOwnPropertyDescriptor: " + Object.getOwnPropertyDescriptor(persona))

console.log("Persona antes del defineProperty: ")

console.log(persona)


Object.defineProperty(persona, "PruebaNASA", {
    value: "TOP SECRET",
    writable: true,
    enumerable:true,
    configurable: true
})

console.log(`${persona.nombre} despues del defineProperty, antes de modificar enumerable: `)

console.log(persona)

//DeepCopy
function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)

    if (subjectIsArray) {
        copySubject = []
    } else if (subjectIsObject) {
        copySubject = {}
    } else {
        return subject
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key])
        
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }
    
    return copySubject
}

function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject)
}