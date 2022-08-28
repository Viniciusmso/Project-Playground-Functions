// Desafio 1
function compareTrue(valueUm, valueDois) {
  if (valueUm && valueDois) {
    return true;
  } else return false
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height ) / 2
  return area;
}

// Desafio 3


function splitSentence(palavra) {
    let array = palavra.split(" ");
    return array;
}


// Desafio 4
function concatName(name) {

  return name[name.length -1] + 
  ", " + name[0];

}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);  
}

// Desafio 6
function highestCount(bigger) {
  let maior = -1 ;
  let contador = 0;
  for (let index = 0; index < bigger.length; index +=1) {
    if (bigger[index] >= maior) {
      maior = bigger[index];
    }
  }
  for (let index1 = 0; index1 < bigger.length; index1 += 1) { 
    if(maior === bigger[index1]) {
        contador += 1;
    }
  }
return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catUm = mouse - cat1;
  let catDois = mouse - cat2;
  
    if (catUm % catDois === 0) {
      return ("os gatos trombam e o rato foge")
    }
    else if (catUm > catDois) {
      return ('cat1');
    }else return ('cat2');
}

// Desafio 8
function fizzBuzz(array) {
  let list = [];
  
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] % 3 === 0 && array[index] % 5 === 0) {
      list.push("fizzBuzz");
    }else if (array[index] % 3 === 0) {
          list.push("fizz");
    }else if (array[index] % 5 === 0) {
          list.push("buzz");
    }else list.push("bug!");
  }
  return list; 
}

// Desafio 9
function encode(phrase) {

  let newPhrase = phrase.replaceAll(/a/gi, 1).replaceAll(/e/gi, 2).replaceAll(/i/gi, 3).replaceAll(/o/gi, 4).replaceAll(/u/gi, 5);

   return newPhrase;
}

function decode(Secretphrase) {
  let correctPhrase = Secretphrase.replaceAll(/1/gi, 'a').replaceAll(/2/gi, 'e').replaceAll(/3/gi, 'i').replaceAll(/4/gi, 'o').replaceAll(/5/gi, 'u');

  return correctPhrase;
}

// Desafio 10
function techList(tech, name) {
tech.sort();
let array = [];
if(tech.length === 0){
array = "Vazio!";
}else
for(let index = 0; index < tech.length; index += 1) {
array.push({name: name, tech: tech[index]})
}
return array;
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
