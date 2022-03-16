
/*let ivestaSuma = parseInt(prompt ('Jusu moketina suma yra: '))


let arbatpinigiai = 0;
let galutinesuma;

if (ivestaSuma <= 20){
    arbatpinigiai = ivestaSuma * 0.1;}
else if (20 < ivestaSuma && ivestaSuma <= 50){
    arbatpinigiai = ivestaSuma * 0.075;}
else {arbatpinigiai = ivestaSuma * 0.05;}

galutinesuma = `Visa sumokėta suma ${ivestaSuma + arbatpinigiai} 
arbatpinigiai yra ${arbatpinigiai} saskaita buvo ${ivestaSuma}`*/

let ivestaSuma = parseInt(prompt('Jusu moketina suma yra:'))

let arbatpinigiai = 0;
let galutinesuma;

if (ivestaSuma <= 20) {
  arbatpinigiai = ivestaSuma  * 0.1;
} else if ( 20 < ivestaSuma && ivestaSuma <= 50) {
  arbatpinigiai = ivestaSuma * 0.075;
} else {
  arbatpinigiai = ivestaSuma * 0.05
}
galutinesuma = `Visa sumoketa suma ${ivestaSuma + arbatpinigiai}
 arbatpinigiai yra ${arbatpinigiai} saskaita buvo ${ivestaSuma}
`
console.log(galutinesuma)