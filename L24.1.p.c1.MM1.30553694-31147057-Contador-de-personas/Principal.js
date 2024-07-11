 import Cl_Person from "./Cl_Person.js";
  import Cl_conta from "./Cl_conta.js";
  
let person1 = new Cl_Person("luisa", "F");
let person2 = new Cl_Person("Ana", "F");
let person3 = new Cl_Person("José", "M");
let person4 = new Cl_Person("Carmen", "F");
let person5 = new Cl_Person("Rosa", "F");
let person6 = new Cl_Person("José", "M");
let person7 = new Cl_Person("Maria", "F");
let person8 = new Cl_Person("Luz", "F");
let person9 = new Cl_Person("Rafael", "M");
let person10 = new Cl_Person("Liz", "F");
let person11 = new Cl_Person("Marcos", "M");
let person12 = new Cl_Person("Leo", "M");
let conta = new Cl_conta();
conta.Procesar(person1);
conta.Procesar(person2);
conta.Procesar(person3);
conta.Procesar(person4);
conta.Procesar(person5);
conta.Procesar(person6);
conta.Procesar(person7);
conta.Procesar(person8);
conta.Procesar(person9);
conta.Procesar(person10);
conta.Procesar(person11);
conta.Procesar(person12);
let salida=document.getElementById("salida");
salida.innerHTML=`
<br> Cantidad de personas ${conta.Total()}
<br> Cantidad de mujeres ${conta.TotalM()}
<br> Cantidad de Hombre ${conta.TotalH()}
`;