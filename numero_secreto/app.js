let arraySorted = [];
let max = 3;
let numSec = randomNumber(1, max);
let tries = 0;

function editarTexto (tag, text)
{
  let campo = document.querySelector(tag);
  campo.innerHTML = text;
  responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

editarTexto('h1', 'Jogo do número secreto');
editarTexto('p', `Escolha um número entre 1 e ${max}`);

function verificarChute ()
{
  let kick = document.querySelector('input').value;
  tries++;

  if (kick == numSec)
  {
    console.log(arraySorted);
    editarTexto('h1', 'Acertou!!');
    let wTries = tries > 1 ? 'tentativas' : 'tentativa';
    editarTexto('p', `Parabéns! Você acertou em ${tries} ${wTries}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  else if (kick > numSec)
  {
    editarTexto('p', 'Seu chute é maior do que o número secreto');
  }
  else
  {
    editarTexto('p', 'Seu chute é menor do que o número secreto');
  }
  cleanAns();
}

function randomNumber (min, max)
{
  let number = parseInt(Math.random() * max + min);
  if (arraySorted.length == max)
  {
    arraySorted = [];
  }
  if (arraySorted.includes(number))
  {
    return randomNumber(1, max);
  }
  else 
  {
    arraySorted.push(number);
    //console.log(number); 
    return number;
  }
}

function reset()
{
  tries = 0;
  numSec = randomNumber(1, max);
  cleanAns();
  alert('Jogo reiniciado!');
  editarTexto('h1', 'Jogo do número secreto');
  editarTexto('p', `Escolha um número entre 1 e ${max}`);
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function cleanAns ()
{
  kick = document.querySelector('input');
  kick.value = '';
}