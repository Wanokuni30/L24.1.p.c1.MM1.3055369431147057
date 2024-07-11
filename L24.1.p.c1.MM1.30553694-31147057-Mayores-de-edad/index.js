class Persona {
  constructor(n, e) {
    this.nomb = n;
    this.edad = e;
  }
  set nomb(n) {
    this._nomb = n;
  }
  get nomb() {
    return this._nomb;
  }
  set edad(e) {
    this._edad = +e;
  }
  get edad() {
    return this._edad;
  }
}

class Mayores {
  constructor() {
    this.contperso = 0;
    this.contpersoM18 = 0;
  }

  procesarPersona(p) {
    this.contperso++;

    if (p.edad >= 18) {
      this.contpersoM18++;
    }
  }

  cantpersonas() {
    return this.contperso;
  }

  cantpersonM18() {
    return this.contpersoM18;
  }

  porcM18() {
    return (this.contpersoM18 / this.contperso) * 100;
  }
}

let persona1 = new Persona("Luis", 15);
let persona2 = new Persona("Ana", 19);
let persona3 = new Persona("Jose", 21);
let persona4 = new Persona("Carmen", 17);
let persona5 = new Persona("Rosa", 18);
let persona6 = new Persona("Jose", 22);
let persona7 = new Persona("Maria", 17);
let persona8 = new Persona("Luz", 19);
let persona9 = new Persona("Rafael", 23);
let persona10 = new Persona("Liz", 15);
let persona11 = new Persona("Marcos", 20);
let persona12 = new Persona("Leo", 16);

let mayor = new Mayores();
mayor.procesarPersona(persona1);
mayor.procesarPersona(persona2);
mayor.procesarPersona(persona3);
mayor.procesarPersona(persona4);
mayor.procesarPersona(persona5);
mayor.procesarPersona(persona6);
mayor.procesarPersona(persona7);
mayor.procesarPersona(persona8);
mayor.procesarPersona(persona9);
mayor.procesarPersona(persona10);
mayor.procesarPersona(persona11);
mayor.procesarPersona(persona12);

let salida = document.getElementById("app");
salida.innerHTML += `
<br> La cantidad total de personas es ${mayor.cantpersonas()}

<br> La cantidad de personas mayor de edad es ${mayor.cantpersonM18()}

<br> El porcentaje de personas mayores de edad es ${mayor
  .porcM18()
  .toFixed(2)}`;
