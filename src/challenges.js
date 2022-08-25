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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
