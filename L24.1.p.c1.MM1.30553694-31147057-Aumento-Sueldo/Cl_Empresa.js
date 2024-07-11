import Cl_Person from "./Cl_Person.js";
export default class Cl_Empresa{
  constructor(){
    this.acumtotal=0;
  }
  Procesar(person){
   this.acumtotal+=person.Aumento();
  }
  totalpago(){
    return this.acumtotal;
  }
}