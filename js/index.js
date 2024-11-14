/**
*ESTUDIANTE-A
*Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
*máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
*Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
*retorne los estudiantes de un semestre dado.
*La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
*Función: estudiantesSemestre.
*Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
*Retorno: array de objetos estudiante que pertenecen al semestre indicado.
*/
let estudiantesSemestre = (estudiantes, semestre) => {
    let estudiantesSemestre = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].semestre == semestre) {
            estudiantesSemestre.push(estudiantes[i]);
        }
    }
    return estudiantesSemestre;
}
let salida = document.getElementById("salida");
let estudiantes = [
    { nombre: "Angel", semestre: 5, nota: 14 },
    { nombre: "Petra", semestre: 5, nota: 19 },
    { nombre: "Pedro", semestre: 6, nota: 19 },
    { nombre: "Carolina", semestre: 6, nota: 14 },
    { nombre: "Samanta", semestre: 5, nota: 14 },
    { nombre: "Fernando", semestre: 6, nota: 19 }

]
salida.innerHTML = `Estudiantes del semestre 5:`+JSON.stringify(estudiantesSemestre(estudiantes, 5));
salida.innerHTML += `<br>Estudiantes del semestre 6:`+JSON.stringify(estudiantesSemestre(estudiantes, 6));
