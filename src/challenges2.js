// Desafio 11
function generatePhoneNumber(number) {
if(largeSize(number) === true) {
  return "Array com tamanho incorreto.";
}else if (largerNumber(number) === true) {
  return "não é possível gerar um número de telefone com esses valores";
}else if (repeatedNumber(number) === true) {
  return "não é possível gerar um número de telefone com esses valores"
}else return numerPhone(number);
}

function largeSize(number){
if(number.length != 11) {
return true;
}
}

function largerNumber(number){
for(let index = 0; index < number.length; index += 1) {
if(number[index] > 9 || number[index] < 0) {
return true
}
}
}

function repeatedNumber(number){
for(let index = 0; index < number.length; index += 1) {
  let contador = 0;
  for(let index1 = 0; index1 < number.length; index1 += 1){
    if(number[index] === number[index1]) {
      contador += 1;
    if(contador === 3) {
      return true
    }
  }
}
}
}
function numerPhone(numberCorrect){

let ddd = '(' + numberCorrect[0] + '' + numberCorrect[1] + ')';
let space = ' ';
let firstFive =  numberCorrect[2] + '' + numberCorrect[3] + '' + numberCorrect[4] + '' + numberCorrect[5] + '' + numberCorrect[6];
let lastFours = numberCorrect[7] + ''  + numberCorrect[8] + '' + numberCorrect[9] + '' + numberCorrect[10] ;

return (ddd + space + firstFive + '-' + lastFours);
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
