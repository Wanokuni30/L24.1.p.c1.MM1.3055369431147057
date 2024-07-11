class personal {
  constructor(n, t, m) {
    this.nombre = n;
    this.tipo = t;
    this.monto = m;
  }
  set nombre(n) {
    this._nombre = n;
  }
  get nombre() {
    return this._nombre;
  }
  set tipo(t) {
    this._tipo = +t;
  }
  get tipo() {
    return this._tipo;
  }
  set monto(m) {
    this._monto = +m;
  }
  get monto() {
    return this._monto;
  }
}
class empresa {
  constructor() {
    this.acumObreros = 0;
    this.acumAdmin = 0;
    this.contObreros = 0;
    this.contAdmin = 0;
  }
  procesarPersonal(p) {
    if (p.tipo == 1) {
      this.contObreros++;
      this.acumObreros += p.monto;
    } else if (p.tipo == 2) {
      this.contAdmin++;
      this.acumAdmin += p.monto;
    }
  }
  promedioObreros() {
    return this.acumObreros / this.contObreros;
  }
  promedioAdmin() {
    return this.acumAdmin / this.contAdmin;
  }
}

let personal1 = new personal("Juan", 1, 100);
let personal2 = new personal("Ana", 1, 120);
let personal3 = new personal("Lin", 2, 200);
let personal4 = new personal("Mary", 1, 50);
let personal5 = new personal("Carlos", 2, 150);

let Empresa = new empresa();
Empresa.procesarPersonal(personal1);
Empresa.procesarPersonal(personal2);
Empresa.procesarPersonal(personal3);
Empresa.procesarPersonal(personal4);
Empresa.procesarPersonal(personal5);

let salida = document.getElementById("app");

salida.innerHTML += `<br> Monto total pagado a Obreros: ${Empresa.acumObreros}$.
                    <br> Promedio pagado a ${
                      Empresa.contObreros
                    } Obreros: ${Empresa.promedioObreros()}$.
                    <br>
                    <br> Monto total pagado a Administrativos: ${
                      Empresa.acumAdmin
                    }$.
                    <br> Promedio pagado a ${
                      Empresa.contAdmin
                    } Administrativos: ${Empresa.promedioAdmin()}$.
                    `;
