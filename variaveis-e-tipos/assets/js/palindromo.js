// solução 1
function verificaPalindromo(string){
  if(!string) return;
  
  return string.split("").reverse().join("") === string;

}

//console.log(verificaPalindromo("mim"));

// solução 2
// omo
// 012
// abbbba
// 012345

function verificaPalindromo2(string){
  if(!string) return "string inexistente";

  for(let i = 0; i < string.lenght / 2; i++){
    if(string[i] !== string[string.lenght - 1 - i]) {
      return false;
    } 
  }
  return true;
}

console.log(verificaPalindromo2("abba"));