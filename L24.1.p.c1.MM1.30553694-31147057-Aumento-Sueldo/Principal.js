import Cl_Person from "./Cl_Person.js";
import Cl_Empresa from "./Cl_Empresa.js";
let per1 = new Cl_Person("juan", "obrero", 100);
let per2 = new Cl_Person("ana", "obrero", 120);
let per3 = new Cl_Person("lin", "administrativo", 200);
let per4 = new Cl_Person("Carlos", "administrativo", 150);
let per5 = new Cl_Person("mary", "obrero", 50);

let empre= new Cl_Empresa();
empre.Procesar(per1);
empre.Procesar(per2);
empre.Procesar(per3);
empre.Procesar(per4);
empre.Procesar(per5);
let salida=document.getElementById("salida");
salida.innerHTML=`

<br> ${per1.nombre} tiene un aumento de ${per1.Aumento()}$
<br> ${per2.nombre} tiene un aumento de ${per2.Aumento()}$

<br> ${per3.nombre} tiene un aumento de ${per3.Aumento()}$
<br> ${per4.nombre} tiene un aumento de ${per4.Aumento()}$
<br> ${per5.nombre} tiene un aumento de ${per5.Aumento()}$

<br> el total del monto adicional que debe pagar la empresa es de ${empre.totalpago()}$
`;
