 import Cl_Person from "./Cl_Person.js";
 export default class Cl_conta{
   constructor(){
     this.cont_person=0;
     this.cont_muje=0;
     this.cont_hombre=0;
   }
   Procesar(person){
     this.cont_person++;
     if(person.sexo ==="F"){
       this.cont_muje++;
     } else{
       this.cont_hombre++;
     }
   }
   Total(){
     return this.cont_person;
   }
   TotalM(){
     return this.cont_muje;
   }
   TotalH(){
     return this.cont_hombre;
   }
 }