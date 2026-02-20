import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  
    //  vamos  hacer un loop anidado 
let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dominio =[".com",".net",".us",".io",".er",".on"];
  
// creamos un loop anidado en el que pase por cada uno de los arrays 

pronoun.forEach(i => {
adj.forEach(j => {
noun.forEach(k => {
  //  queremos que el string creado en este caso el noun queremos que del 0 al 4 se mantenga y luego se concatene 
  let corte= k.substring(0,4);
dominio.forEach(n => {
  // aqui concatenamos todo  los arrays ademas del array noun esta cortado por lo que  le denominamos con la variable que usamos para guardar el nuevo string
   const web=  `${i}${j}${corte}${n}`;
  console.log( web );
});  
  
});  
});
});


};
  

