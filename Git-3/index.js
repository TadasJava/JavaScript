/*let number = parseInt(prompt('enter the number'));
switch(number){
    case 1:
        console.log('print 1')
    break;
    case 2:
        console.log('print 2')
        break
    }*/
/*const stringsArr = ['vienas', 'du', 'trys'];
    const nestedArr =[
        ['X', null, '0'],
        ['0', null, 'X'],
        ['X','0', null]
    ]
    console.log(nestedArr[0][0])
*/
/*
for (let i = 20; i >=0; i= i-4){
console.log (i)
}*/

/*
const skaiciai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,]
for (let i = 0; i <= skaiciai.length - 1; i++){
    if (skaiciai[i] %2 === 0)
    console.log(skaiciai[i])
    }
*/
/*
const myArr = ['One', 'Two', 'Sofa', 'Stalas', 'test']
    for (let i = myArr.length -1; i >=0; i--) {
        console.log(myArr[i])
    }
/*
let daugiauNeiAstuoni= [];
    const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
    for (let i = 0; i < skaiciai.length; i++ ){
        if (skaiciai[i] > 8){
            daugiauNeiAstuoni.push(skaiciai[i])
        }
    }
    console.log(daugiauNeiAstuoni)*/
/*
    const numbersArr = [2, 45, 3, 67, 34,567, 34, 345, 123];
    let didziausiasSkaicius = 0;
    for (let i =0; i<= numbersArr.length -1; i++){
        if(didziausiasSkaicius < numbersArr[i]{
            didziausiasSkaicius = numbersArr[i]
        }
    }
 /*   // Uzduotis
const numbersArr = [2, 45, 3, 67, 34, 567, 34, 345, 123, 593]; 
let didziausiasSkaicius = 0;
for (let i = 0; i <= numbersArr.length - 1; i++) {
  if(didziausiasSkaicius < numbersArr[i]) {
    didziausiasSkaicius = numbersArr[i]
  }
}
console.log(didziausiasSkaicius)
// naudojantis for loop'u surasti didziausia skaiciu

// Nested loops
for (let isorinis = 1; isorinis <= 4; isorinis++){
  console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
  for(let vidinis = 1; vidinis < 5; vidinis++) {
    console.log(`  Vidinis loopas sukasi ${vidinis} karta`)
  }
}
*//*
const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
  ];

  for (let i = 0; i < activities.length; i++){
      console.log(`Eilute ${i + 1}`)
      for (let j = 0; j < activities[i].length; j++){
        console.log(activities[i] [j])
      }
  }
const SLAPTAS_SKAICIUS = 52;
let spejimas = parseFloat(prompt('Spekite skaiciu')); 52
while(spejimas !== SLAPTAS_SKAICIUS) { // false
  spejimas = parseFloat(prompt('Spekite skaiciu'));

*/
/*
const skaiciai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,]
const skaiciai2 = []
for (let i of skaiciai)  {
    console.log(i ** 2);
    skaiciai2.push(i ** 2);
   } 
   console.log(skaiciai2)
   */
/*
   let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
   while(vartotojoIvestaKomanda !== 'quit'){
       if (vartotojoIvestaKomanda === 'new'){
         let naujasDarbas = prompt('Iveskite nauja darba i darbu sarasa')
        vartotojoIvestaKomanda = promt('Iveskite nauja darba i darbu sarasa')    
        todoList.push(naujasDarbas)
    }   else if (vartotojoIvestaKomanda === 'list'){
      { console.log('Jusu darbu sarasas:');
        for (let i = 0; i < todoList.length; i++)
        console.log('--------------------');
        console.log('${i} - ${todoList[i]}');
        console.log('--------------------');
        vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
        } 
    } else if (vartotojoIvestaKomanda === 'delete'){
      vartotojoIvestaKomanda = parseInt(prompt('Iveskite norimo istrinti darbo numeri'));
      todoList.splice(index, 1)
    }vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
       console.log('Vartotojas neivede quit')
       vartotojoIvestaKomanda = promt('Kokia yra jusu sekanti komanda')
   }




   const todoList = [
       'Pradeti nuo q komandos'

   ]
/*
   const todoList = [
    'Pradeti nuo q komandos', 
    'panaudoti prompt, kad gauti duomenis', 
    'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
    ];
  
  
  let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
  
  while(vartotojoIvestaKomanda !== 'quit') {
    if (vartotojoIvestaKomanda === 'list') {
      vartotojoIvestaKomanda = prompt('Iveskite nauja darba i darbu sarasa')
      todoList.push(vartotojoIvestaKomanda)
    } else if ()
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
  }*/
/*
  const todoList = ['Pradeti nuo q komandos', 
  'panaudoti prompt, kad gauti duomenis', 
  'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
  ];

*//*
let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')

while(vartotojoIvestaKomanda !== 'quit') {
  if (vartotojoIvestaKomanda === 'new') {
    let naujasDarbas = prompt('Iveskite nauja darba i darbu sarasa');
    todoList.push(naujasDarbas);
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  } else if (vartotojoIvestaKomanda === 'list') {
    console.log(`Jusu darbu sarasas:`);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`----------------------`);
      console.log(`${i} - ${todoList[i]}`);
      console.log(`----------------------`);
    } 
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  } else if (vartotojoIvestaKomanda === 'delete') {
    let index = parseInt(prompt('Iveskite norimo istrinti darbo numeri'));
    todoList.splice(index, 1)
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
  } else {
    vartotojoIvestaKomanda = 'quit'
    console.log('Ivesta neteisinga komanda')
  }
}
/*
let komanda
function name(params) {
  
}*//*

function duSkaiciai (skaicius, laipsnis){
  console.log(skaicius ** laipsnis)
}
duSkaiciai (3, 2)
 */

function atiduokDidesni(a, b){
  console.log(Math.max(a, b))
}
atiduokDidesni (5, 9)