class Estudiante {
  constructor(c, n) {
    this.cedula = c;
    this.nota = n;
  }
  set cedula(c) {
    this._cedula = +c;
  }
  get cedula() {
    return this._cedula;
  }
  set nota(n) {
    this._nota = +n;
  }
  get nota() {
    return this._nota;
  }
}

class Resultado {
  constructor() {
    this.contaprob = 0;
    this.contreprob = 0;
    this.acnotas = 0;
    this.contestu = 0;
  }

  procesarEstudiante(e) {
    this.contestu++;
    this.acnotas += e.nota;

    if (e.nota >= 48) {
      this.contaprob++;
    } else this.contreprob++;
  }

  cantaprobados() {
    return this.contaprob;
  }

  cantreprobados() {
    return this.contreprob;
  }

  promNotas() {
    return this.acnotas / this.contestu;
  }
}

let estudiante1 = new Estudiante(888, 60);
let estudiante2 = new Estudiante(777, 50);
let estudiante3 = new Estudiante(333, 80);
let estudiante4 = new Estudiante(111, 30);
let estudiante5 = new Estudiante(333, 90);
let estudiante6 = new Estudiante(444, 48);
let estudiante7 = new Estudiante(999, 40);
let estudiante8 = new Estudiante(222, 60);

let resultado = new Resultado();
resultado.procesarEstudiante(estudiante1);
resultado.procesarEstudiante(estudiante2);
resultado.procesarEstudiante(estudiante3);
resultado.procesarEstudiante(estudiante4);
resultado.procesarEstudiante(estudiante5);
resultado.procesarEstudiante(estudiante6);
resultado.procesarEstudiante(estudiante7);
resultado.procesarEstudiante(estudiante8);

let salida = document.getElementById("app");
salida.innerHTML += `
<br> La cantidad de aprobados es ${resultado.cantaprobados()}

<br> La cantidad de reprobados es ${resultado.cantreprobados()}

<br> La nota promedio de la seccion es ${resultado.promNotas()}`;
