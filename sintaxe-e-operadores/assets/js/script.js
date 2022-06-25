function operadores(){

  let num1 = Number(prompt('Insira o primeiro número'));
  let num2 = Number(prompt('Insira o segundo número')); 
  const soma = num1 + num2;
  let compDez = 'menor';
  let compVinte = 'menor';

    if((num1 == num2) && (num2 == num1)){
    if(soma > 10){
      compDez = 'maior';
    }
    alert(`${num1} e ${num2} são iguais.\n Sua soma é ${soma}.\n que é ${compDez} do que 10 e ${compVinte} do que 20. `)
  }else {
    if (soma > 20){
      compVinte = 'maior'
    }
    alert(`${num1} e ${num2} não são iguais.\n Sua soma é ${soma}.\n que é ${compDez} do que 10 e ${compVinte} do que 20. `)
    } 
  }


operadores();