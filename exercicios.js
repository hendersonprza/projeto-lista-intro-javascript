// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Insira a altura do retângulo')
  const largura = prompt('Insira a largura do retângulo')
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Em que ano estamos?')
  const dataNascimento = prompt('Qual é seu ano de nascimento?')
  const idade = anoAtual -dataNascimento
  
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura)
  const IMCFixed = IMC.toFixed(1)

  return IMCFixed

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nomeDoUsuario = prompt('Qual é o seu nome?')
  const idadeDoUsuario = Number(prompt('Qual é a sua idade atual?'))
  const emailDoUsuario = prompt('Qual é o seu e-mail particular?')
  const emailDoUsuarioSemEspaco = emailDoUsuario.trim()
  const frase =`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuarioSemEspaco}.`
  console.log(frase)
  
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = String(prompt('Qual a sua primeira cor favorita?'))
  const segundaCor = String(prompt('Qual a sua segunda cor favorita?'))
  const terceiraCor = String(prompt('Qual a sua terceira cor?'))
  const arrayCores = [primeiraCor, segundaCor, terceiraCor]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return  array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const indiceUltimoElemento = array.length - 1
  const ultimoElemento = array[indiceUltimoElemento]
  return ultimoElemento

}
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const copiaArray = array.slice();
  const ultimoIndice = copiaArray[copiaArray.length - 1] 
  array.pop();
  array.shift();
  array.push(copiaArray[0]);
  array.unshift(ultimoIndice);
  return array

  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Em que ano estamos?')
  const anoNascimento = prompt('Em que ano você nasceu?')
  const anoRg = prompt('Que ano você emitiu sua carteira?')
  const condicao1 = (anoAtual - anoNascimento) <= 20 && anoAtual - anoRg >= 5
  const condicao2 = (anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && anoAtual - anoRg >= 10
  const condicao3 = (anoAtual - anoNascimento) > 50 && anoAtual - anoRg >= 15
  console.log(condicao1 || condicao2 ||  condicao3)



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = (ano % 4 === 0) && (ano % 100 != 0) || (ano % 400 === 0)
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você possui ensino médio completo?')
  const horario = prompt('qual a sua disponibilidade de horário?')
  const respostaSim = 'sim'
  const respostaSimMinuscula = respostaSim.toLowerCase()
  const fluxoSim = (idade === respostaSimMinuscula) && (escolaridade == respostaSimMinuscula) && (horario === respostaSimMinuscula)
  
  
  console.log(fluxoSim)
}